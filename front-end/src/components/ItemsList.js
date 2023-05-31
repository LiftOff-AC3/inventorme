import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";

export default function ItemsList() {
	const [items, setItems] = useState(null);
	const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  /*Added a custom header whose value contains that loginId that is shared
   by the logged-in user and their items. This value is then used in the backend
   to retrieve items that share that same id to then be displayed in the items table*/
	useEffect(() => {
    const loginId = localStorage.getItem('loginId');
    console.log(typeof loginId);
		axios.get("http://localhost:8080/items", {
		 headers: {
		  'Authorization': loginId
		 }
		})
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
	return (
	<>
		<h1 className="m-5 text-center">Items List</h1>
		<div className='item-list-table m-5'>
		  <button
		       onClick={handleDelete}
		       type="button"
		       class="btn btn-secondary btn-sm btn-danger"
		       >Delete
		   </button>
			<table className='table table-bordered table-striped '>
				<thead>
					<tr className='table-dark text-center'>
						<td></td>
						<td> Name </td>
						<td> Quantity </td>
						<td> Description </td>
					</tr>
				</thead>
				<tbody>
					{items && items.length > 0 && items.map(item => (
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
