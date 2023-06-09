import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import "./EditForm.css";

function EditForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [editURL, setEditURL] = useState("");

  //   const editImage = useSelector((store) => store.editReducer);

  const user = useSelector((store) => store.user);

  //gets image from user table
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    dispatch({ type: "FETCH_IMAGE" });
  }, []);

  const editItem = (incomingURL) => {
    // first check the URL input; if blank, change the URL to the existing one
    if (editURL === "") {
      setEditURL(incomingURL);
    }
    dispatch({
      type: "EDIT_IMAGE",
      payload: {
        userId: user.id,
        image_url: editURL,
      },
    });
  };

  return (
    <div id="edit-paper">
      <div id="edit-pattern">
        <div id="edit-content">
          <h1 id="edit">Edit Image</h1>
         
          <img id="edit-img" src={user.image_url} />

          <form onSubmit={() => editItem(user.id, user.image_url)} id={user.id}>
            <input
              placeholder="New Image URL"
              value={editURL}
              onChange={(event) => setEditURL(event.target.value)}
            />
            <button id="submit-bttn" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
