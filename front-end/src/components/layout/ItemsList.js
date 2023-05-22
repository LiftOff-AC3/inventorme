import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function ItemsList() {
	const [items, setItems] = useState(null);
	const [error, setError] = useState(null);
	const [search, setSearch] = useState('');
	console.log(search)

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
			<div id='items-view-page'>
				<h1 className="m-5 text-center">Items List</h1>
				<Form>
					<InputGroup>
						<Form.Control onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder=' Search Items...' />
					</InputGroup>
				</Form>
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
					{items.filter((item) => {
						return search.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search);
					}).map(item => (
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