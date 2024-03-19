// import { Box, Typography } from "@mui/material";
// import React from "react";

// const About = () => {
//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Typography sx={{ fontFamily: "fantasy" }} variant="h2"><center>
//           This is a Program written by Anish Rahul Pujari, Harshini Prakasam and Deekshitha</center>
//         </Typography>
//         <br>
//         </br><br>
//         </br>
//         <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
//           By using MERN
//         </Typography>
//       </Box>
//     </div>
//   );
// };

// export default About;
import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Typography variant="h2" className="about-text">
        This is a program written by Anish Rahul Pujari, Harshini Prakasam, and Deekshitha
      </Typography>
      <Typography variant="h3" className="mern-text">
        By using MERN
      </Typography>
    </div>
  );
};

export default About;
