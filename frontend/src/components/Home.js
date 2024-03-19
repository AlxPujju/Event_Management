// import { Button, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Button
//           LinkComponent={Link}
//           to="/Events"
//           sx={{ marginTop: 15, background: "orangered" }}
//           variant="contained"
//         >
//           <Typography variant="h3">View All Events</Typography>
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" className="welcome-text">
          Welcome to Our Event Management System<br></br>
        </Typography><br></br><br></br><br></br>
        <Button
          component={Link}
          to="/events"
          className="view-events-button"
          variant="contained"
        >
          View All Events
        </Button>
      </Box>
    </div>
  );
};

export default Home;

