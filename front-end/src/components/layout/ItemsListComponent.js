import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemsListComponent() {

    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        axios.get("http://localhost:8080/items")
            .then((response) => {
                setItems(response.data)
                console.log(response.data);
            });
    }, []);

    if (!items) return null;

    return (
        <div className='container'>
            <table className='table table-boarder table-striped'>
                <thead>
                    <th> Item ID </th>
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