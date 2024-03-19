import {
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddEvent = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      description: "",
      date: "",
      club: "",
  
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("http://localhost:5000/events", {
          name: String(inputs.name),
          club: String(inputs.club),
          description: String(inputs.description),
          date: Date(inputs.date),
          image: String(inputs.image),
          available: Boolean(checked),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/events"));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
        >
          <FormLabel>Name</FormLabel>
          <TextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <FormLabel>Club</FormLabel>
          <TextField
            value={inputs.club}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="club"
          />
          <FormLabel>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <FormLabel>Date</FormLabel>
          <TextField
            value={inputs.date}
            onChange={handleChange}
            type="date"
            margin="normal"
            fullWidth
            variant="outlined"
            name="date"
          />
          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          />
  
          <Button variant="contained" type="submit">
            Add Event
          </Button>
        </Box>
      </form>
    );
  };
  
  export default AddEvent;
  

// import {
//   Button,
//   Checkbox,
//   FormControlLabel,
//   FormLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddEvent = () => {
//   const history = useNavigate();
//   const [inputs, setInputs] = useState({
//       name: "",
//       description: "",
//       date: "",
//       club: "",
//       image: null, // Store the selected image file
//   });
//   const [checked, setChecked] = useState(false);

//   const handleChange = (e) => {
//       if (e.target.name === "image") {
//           // If the change is in the image input field, store the selected file
//           setInputs((prevState) => ({
//               ...prevState,
//               image: e.target.files[0], // Use the selected file
//           }));
//       } else {
//           // For other input fields, update the state as usual
//           setInputs((prevState) => ({
//               ...prevState,
//               [e.target.name]: e.target.value,
//           }));
//       }
//   };

//   const sendRequest = async () => {
//       const formData = new FormData(); // Create a FormData object
//       formData.append("name", inputs.name);
//       formData.append("club", inputs.club);
//       formData.append("description", inputs.description);
//       formData.append("date", inputs.date);
//       formData.append("image", inputs.image); // Append the selected image file

//       await axios
//           .post("http://localhost:5000/events", formData, {
//               headers: {
//                   "Content-Type": "multipart/form-data", // Set appropriate headers for file upload
//               },
//           })
//           .then((res) => res.data);
//   };

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       sendRequest().then(() => history("/events"));
//   };

//   return (
//       <form onSubmit={handleSubmit}>
//           <Box
//               display="flex"
//               flexDirection="column"
//               justifyContent={"center"}
//               maxWidth={700}
//               alignContent={"center"}
//               alignSelf="center"
//               marginLeft={"auto"}
//               marginRight="auto"
//               marginTop={10}
//           >
//               <FormLabel>Name</FormLabel>
//               <TextField
//                   value={inputs.name}
//                   onChange={handleChange}
//                   margin="normal"
//                   fullWidth
//                   variant="outlined"
//                   name="name"
//               />
//               <FormLabel>Club</FormLabel>
//               <TextField
//                   value={inputs.club}
//                   onChange={handleChange}
//                   margin="normal"
//                   fullWidth
//                   variant="outlined"
//                   name="club"
//               />
//               <FormLabel>Description</FormLabel>
//               <TextField
//                   value={inputs.description}
//                   onChange={handleChange}
//                   margin="normal"
//                   fullWidth
//                   variant="outlined"
//                   name="description"
//               />
//               <FormLabel>Date</FormLabel>
//               <TextField
//                   value={inputs.date}
//                   onChange={handleChange}
//                 //   type="date"
//                   margin="normal"
//                   fullWidth
//                   variant="outlined"
//                   name="date"
//               />
//               <FormLabel>Image</FormLabel>
//               <input
//                   type="file"
//                   accept="image/*" // Limit file selection to image files
//                   onChange={handleChange}
//                   name="image"
//               />
//               <FormControlLabel
//                   control={
//                       <Checkbox
//                           checked={checked}
//                           onChange={() => setChecked(!checked)}
//                       />
//                   }
//                   label="Available"
//               />

//               <Button variant="contained" type="submit">
//                   Add Event
//               </Button>
//           </Box>
//       </form>
//   );
// };

// export default AddEvent;
