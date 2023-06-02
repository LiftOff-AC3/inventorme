import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateItem from "./UpdateItem";

export default function ItemsList() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [open, setOpen] = useState({ update: false, id: null });
  const handleClose = () => {
    setOpen({ update: false, id: null });
  };

  console.log(open);
  useEffect(() => {
    axios
      .get("/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
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
      //deletes each item
      await Promise.all(
        selectedItems.map((itemId) =>
          axios.delete("/item", {
            data: { id: itemId },
          })
        )
      );
      //refreshes item table after deletion
      axios
        .get("/items")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          setError(error);
        });
      //clear selected items array
      setSelectedItems([]);
    } catch (error) {
      alert("Error deleting items", error);
    }
  }
  return (
    <>
      <h1 className="m-5 text-center">Items List</h1>
      <div className="text-center">
  <input type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search for Item..."/>
	</div>
      <div className="item-list-table m-5">
        <button
          onClick={handleDelete}
          type="button"
          class="btn btn-secondary btn-sm btn-danger"
        >
          Delete
        </button>
        <table className="table table-bordered table-striped ">
          <thead>
            <tr className="table-dark text-center">
              <td> Delete </td>
              <td> Id </td>
              <td> Name </td>
              <td> Quantity </td>
              <td> Description </td>
              <td> Edit </td>
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
    </>
  );
}
