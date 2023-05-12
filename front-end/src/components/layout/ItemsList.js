import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ItemsList() {
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
		<>
			<div data-testid="items-list">
				<h1 className="m-5 text-center">Items List</h1>
			</div>
			<div className='item-list-table m-5'>
			<table className='table table-bordered table-striped '>
				<thead>
					<tr className='table-dark text-center'>
						<td> ID </td>
						<td> Name </td>
						<td> Quantity </td>
						<td> Description </td>
					</tr>
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
		</>
	)
}