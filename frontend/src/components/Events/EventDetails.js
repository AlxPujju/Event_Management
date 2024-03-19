import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  
  const EventDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
    useEffect(() => {
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/events/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.event));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      await axios
        .put(`http://localhost:5000/events/${id}`, {
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
      sendRequest().then(() => history("/events"));
    };
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
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
                margin="normal"
                type="date"
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
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
              />
  
              <Button variant="contained" type="submit">
                Update Event
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default EventDetail;
  