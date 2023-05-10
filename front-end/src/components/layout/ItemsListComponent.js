import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemsListComponent() {
    const [items, setItems] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/items")
            .then((response) => {
                setItems(response.data)
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) return 'Error: $ {error.message}';
    if (!items) return 'No items';

    return (
        <div className='container'>
            <table className='table table-boarder table-striped'>
                <thead>
                    <th> ID </th>
                    <th> Name </th>
                    <th> Quantity </th>
                    <th> Description </th>
                </thead>
                <tbody>
                    {items && items.length > 0 && items.map(item => (
                        <tr key={item.id}>                        
                            <td> {item.id} </td>
                            <td> {item.itemName} </td>
                            <td> {item.itemQuantity} </td>
                            <td> {item.description} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}