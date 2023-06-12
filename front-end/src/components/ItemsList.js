import React, { useEffect, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Popup from 'reactjs-popup';
import axios from "axios";
import UpdateItem from "./UpdateItem";
import "./ItemsList.css"
import { useNavigate } from "react-router-dom";
export default function ItemsList() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState({ update: false, id: null });
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen({ update: false, id: null });
  };
  
  useEffect( () => {
    const userId = localStorage.getItem('userId');
    axios.get("/items", {
      headers: {
      'UserId': userId
  }
	}).then((response) => {
			setItems(response.data)
		}).catch(error => {
			setError(error);
		});
	}, [error]);
  function handleCheckboxSelect(e, itemId) {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  }
	function handleAddItem() {
		navigate("/add");
	}
  async function handleDelete(e) {
    e.preventDefault();
    try {
      await Promise.all(
        selectedItems.map((itemId) =>
          axios.delete("/item", {
            data: { id: itemId },
          })
        )
      );
      axios.get("/items")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          setError(error);
        });
      setSelectedItems([]);
    } catch (error) {
      alert("Error deleting items", error);
    }
  }
	return (
		<body>
		<h1  id='item-header' className="m-5 text-center">Items List</h1>
		  <div id="table-crud-items">
				<div id="search-elements">
					<p> Search: </p>
          <input
            id="search-input"
            className="text-center"
            type="text"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="name, description, or location"
          />
        </div>
        <button id="add-button" className="btn btn-primary btn-sm" onClick={handleAddItem}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
      <div id='item-table' class="table-responsive-sm">
        <table className='table table-bordered table-responsive text-wrap table-sm'>
          <thead>
            <tr className='table-light text-dark text-center'>
              <td> ID </td>
              <td> Name </td>
              <td class="test"> Quantity </td>
              <td> Description </td>
              <td class="test"> Location </td>
              <td></td>
              <td>
                <button id='delete-button'
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-secondary btn-sm btn-danger"
                ><i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
              {items
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.itemName.toLowerCase().includes(search) ||
                      item.description.toLowerCase().includes(search) ||
                      item.location.toLowerCase().includes(search);
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td> {item.id} </td>
                    <td> {item.itemName} </td>
                    <td> {item.itemQuantity} </td>
                    <td> {item.description} </td>
                    <td> {item.location} </td>
                    <Popup trigger={
                      <td >
                      {!(open.update && open.id === item.id) && (
                        <button
                          id="edit-button"
                          className="btn btn-warning btn-sm"
                          onClick={() => {
                            setOpen({ ...open, update: true, id: item.id });
                          }}
                        ><i className="bi bi-pencil"></i>
                        </button>
                      )}
                      </td>
                     }  position="center">
                      {open.update && open.id === item.id && (
                        <UpdateItem
                          id={open.id}
                          onClose={handleClose}
                          toEditTitle={item.itemName}
                          toEditItemQuantity={item.itemQuantity}
                          toEditDescription={item.description}
                          toEditLocation={item.location}
                          item={item.id}
                        />
                      )}
                    </Popup>
                    <td>
                    <label>
                      <input
                        id="checkbox"
                        type="checkbox"
                        onChange={(e) => handleCheckboxSelect(e, item.id)}
                        checked={selectedItems.includes(item.id)}
                        />
                    </label>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    </body>
  );
}
