import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Invitation = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box
        className="text-content"
        sx={{
          maxWidth: { md: "50%", xs: "100%" },
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            color: "#2e3a59",
            marginBottom: "20px",
          }}
        >
          “Your Health, Our Mission
          <br />
          Leading the Way in Healthcare, <br />
          Caring Beyond Medicine.”
        </Typography>
        <Box
          className="buttons"
          sx={{
            display: "flex",
            gap: "15px",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00a6eb",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#008bbd",
              },
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#7a7a7a",
              "&:hover": {
                color: "#4d4d4d",
              },
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Watch Video
          </Button>
        </Box>
      </Box>
      <Box
        className="image-content"
        sx={{
          maxWidth: { md: "45%", xs: "100%" },
          position: "relative",
          padding: { md: "120px 0 60px 0", xs: "0" },
          animation: "upDown 4s infinite",
          "@keyframes upDown": {
            "0%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-20px)" },
            "100%": { transform: "translateY(0)" },
          },
        }}
      >
        <img
          src="https://app.unios.in/productmaster/rTOcuJJquUrbJGT7HGs49BW_.jpeg"
          alt="Membership Certificate"
          style={{
            maxWidth: "100%",
            height: "auto",
            transform: { md: "translateY(-20px)", xs: "translateY(0)" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Invitation;
