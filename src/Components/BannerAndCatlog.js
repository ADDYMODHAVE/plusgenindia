import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const BannerAndCatalogue = () => {
  return (
    <div id="portfolio">
      {/* Banner Section */}
      <Box
        sx={{
          backgroundImage: `url('https://plusgenindia.com/assets/img/cta-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          backgroundAttachment: "fixed", // Fixes the background image only
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            padding: "20px",
            maxWidth: "80%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2em", md: "2.5em" },
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            GET IN TOUCH WITH US!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1em", md: "1.2em" },
              marginBottom: "30px",
            }}
          >
            Reach out to us for effortless connectivity. We are here to ensure smooth collaboration and clear communication. Let's explore opportunities
            together in the pharmaceutical industry and beyond.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              padding: { xs: "10px 20px", md: "12px 25px" },
              fontSize: "1em",
              color: "#fff",
              borderColor: "#fff",
              borderRadius: "30px",
              transition: "background-color 0.3s ease, color 0.3s ease",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#333",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>

      {/* Catalogue Section */}
      <Container
        sx={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          marginTop: "20px", // Adjust margin if needed
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: "32px",
            color: "#2e3a59",
            marginBottom: "10px",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "3px",
              backgroundColor: "#00a6eb",
              margin: "10px auto",
            },
          }}
        >
          WANT TO SEE OUR CATALOGUE
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", fontSize: "18px", marginBottom: "20px" }}>
          Explore our comprehensive range of medications, ensuring health and wellness for every patient.
        </Typography>
        <Button
          href="#"
          variant="outlined"
          sx={{
            padding: "10px 20px",
            borderColor: "#00a6eb",
            borderRadius: "4px",
            color: "#00a6eb",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "#00a6eb",
              color: "#ffffff",
            },
          }}
        >
          Check It Out
        </Button>
      </Container>
    </div>
  );
};

export default BannerAndCatalogue;
