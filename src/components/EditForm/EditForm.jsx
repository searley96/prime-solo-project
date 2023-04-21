// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';


// function EditForm() {

//     const dispatch = useDispatch();
//     const history = useHistory();
//     const editImage = useSelector((store) => store.editImage);

//     function handleChange(event) {
//         dispatch({
//             type: 'EDIT_ONCHANGE', 
//             payload: { property: 'image_url', value: event.target.value}
//         })
//     }

//     function handleSubmit(event) {
//         event.preventDefault();

//         axios.put(`/user/${editImage.id}`, editImage)
//         .then(response => {
//           dispatch({ type: 'EDIT_CLEAR'})
//           history.push('/')
//         })
//         .catch(error => {
//           console.log('error on PUT', error)
//         })
//         };
//     }

// return (
//     <>
//     <h1>Edit Image</h1>
//     <form onSubmit={handleSubmit}>
//         <input onChange={(event) => handleChange(event)}
//         placeholder='Image'
//         value={editImage.image_url}
//         />
//      <input type='submit' value='Update Image' />
       
//     </form>

//     </>
// )
// }

// export default EditForm;