import React, { useEffect, useState } from 'react';

export default function ItemsListComponent() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    //    useEffect(() => {
    //        setLoading(true);
    //
    //        fetch('items')
    //        .then(response => response.json())
    //        .then(data => {
    //            setItems(data);
    //            setLoading(false);
    //        })
    //    }, []);
    //
    //    if (loading) {
    //        return <p>loading...</p>;
    //    }

    return (
        <div className='container'>
            <h2>Items List</h2>
            <table className='table table-boarder table-striped'>
                <thead>
                    <th> Item ID </th>
                    <th> Name </th>
                    <th> Quantity </th>
                    <th> Description </th>
                </thead>
                <tbody>
                    <tr>
                        <td> item.id </td>
                        <td> item.itemName </td>
                        <td> item.itemQuantity </td>
                        <td> item.description </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
//        <div className='container'>
//            <h2>Items List</h2>
//            <table className='table table-boardered table-striped'>
//                <thead>
//                    <th> Item ID </th>
//                    <th> Name </th>
//                    <th> Quantity </th>
//                    <th> Description </th>
//                </thead>
//                <tbody>
//                    {
//                        this.state.items.map(
//                            item =>
//                                <tr key={item.id}>
//                                    <td> {item.id} </td>
//                                    <td> {item.itemName} </td>
//                                    <td> {item.itemQuantity} </td>
//                                    <td> {item.description} </td>
//                                </tr>
//                        )
//                    }
//                </tbody>
//            </table>
//        </div>
