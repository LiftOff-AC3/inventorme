import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ItemsList() {
	const [items, setItems] = useState([]);
	const [error, setError] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);
	const [search, setSearch] = useState('');
	
	useEffect(() => {
		axios.get("http://localhost:8080/items")
			.then((response) => {
				setItems(response.data)
			})
			.catch(error => {
				setError(error);
			});
	}, []);

    function handleCheckboxSelect(e, itemId) {
       const isChecked = e.target.checked;
       if(isChecked) {
         setSelectedItems([...selectedItems, itemId]);
       } else {
         setSelectedItems(selectedItems.filter(id => id !== itemId));
       }
    }

	async function handleDelete(e) {
        e.preventDefault();
    try {
       //deletes each item
       await Promise.all(
       selectedItems.map(itemId =>
         axios.delete("http://localhost:8080/item", {
            data: { id: itemId}
            })
           )
         );
        //refreshes item table after deletion
        axios.get("http://localhost:8080/items")
            .then((response) => {
              setItems(response.data);
            })
            .catch(error => {
              setError(error);
            })
        //clear selected items array
        setSelectedItems([]);
     } catch(error) {
     alert("Error deleting items", error);

    }
  }
  console.log(items);
	return (
	<>
		<h1 className="m-5 text-center">Items List</h1>
		<div className='item-list-table m-5'>
		  <div className='text-center'>
		    <input type= "text" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search for Item' className='mb-4' />
		  </div>
			<table className='table table-bordered table-striped '>
				<thead>
					<tr className='table-dark text-center'>
						<td></td>
						<td> ID </td>
						<td> Name </td>
						<td> Quantity </td>
						<td> Description </td>
					</tr>
				</thead>
				<tbody>
				{items.filter((item) => {
						return search.toLowerCase() === '' ? item : item.itemName.toLowerCase().includes(search) || item.description.toLowerCase().includes(search) ;
					}).map(item => (
						<tr key={item.id}>
						    <td>
						      <label>
						        <input
						           type="checkbox"
						           onChange={e => handleCheckboxSelect(e, item.id)}
						           checked={selectedItems.includes(item.id)}
						           />
						      </label>
						    </td>
							<td> {item.id} </td>
							<td> {item.itemName} </td>
							<td> {item.itemQuantity} </td>
							<td> {item.description} </td>
						</tr>
					))}
				</tbody>
			</table>
		<button
		    onClick={handleDelete}
			type="button"
		    className="btn btn-secondary btn-sm btn-danger"
		    >Delete
		</button>
		</div>
		
		</>
	)
}
