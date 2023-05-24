import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateItem from "./UpdateItem";

export default function ItemsList() {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState({ update: false, id: null });
  const handleClose = () => {
    setOpen({ update: false, id: null });
  };
  useEffect(() => {
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
		<body class="view-item-page">
		<h1  id='item-header' className="m-5 text-center">Items List</h1>
    <input
          className="text-center"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search for Item..."
        />
		<div className='item-list-table m-5'>
		  <button id='item-delete-button'
        onClick={handleDelete}
        type="button"
        class="btn btn-secondary btn-sm btn-danger"
      >
        Delete
		  </button>
      <div id='item-table'>
        <table className='table table-bordered'>
          <thead>
            <tr className='table-light text-center'>
              <td> Delete </td>
              <td> ID </td>
              <td> Name </td>
              <td> Quantity </td>
              <td> Description </td>
              <td> Edit </td>
            </tr>
          </thead>
          <tbody>
              {items
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.itemName.toLowerCase().includes(search) ||
                      item.description.toLowerCase().includes(search);
                })
                .map((item) => (
                  <tr key={item.id}>
                    <td>
                      <label>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxSelect(e, item.id)}
                          checked={selectedItems.includes(item.id)}
                        />
                      </label>
                    </td>
                    <td> {item.id} </td>
                    <td> {item.itemName} </td>
                    <td> {item.itemQuantity} </td>
                    <td> {item.description} </td>
                    <td>
                      {!(open.update && open.id === item.id) && (
                        <button
                          className="viewItemButton"
                          onClick={() => {
                            setOpen({ ...open, update: true, id: item.id });
                          }}
                        >
                          Edit
                        </button>
                      )}
                      {open.update && open.id === item.id && (
                        <UpdateItem
                          id={open.id}
                          onClose={handleClose}
                          toEditTitle={item.itemName}
                          toEditItemQuantity={item.itemQuantity}
                          toEditDescription={item.description}
                          item={item.id}
                        />
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}
