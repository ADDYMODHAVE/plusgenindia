import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const BannerAndCatalogue = () => {
  return (
    <div id="portfolio" style={{ background: "#f5f6f8", }}>

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
        <Container maxWidth="xl" style={{ paddingTop: "50px" }}>
          <Box
            sx={{
              position: "relative",
              display: { md: "flex" },
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 2,
              color: "#fff",
              padding: "20px",

            }}
          >
            <Box sx={{
              width: { xs: "100%", md: "68%" }

            }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2em", md: "2.5em" },
                  marginBottom: "28px",
                  fontWeight: "bold",
                  textAlign: { xs: "center", md: "start" }

                }}
              >
                GET IN TOUCH WITH US!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  marginBottom: "30px",
                  textAlign: { xs: "center", md: "start" }
                }}
              >
                Reach out to us for effortless connectivity. We are here to ensure smooth collaboration and clear communication. Let's explore opportunities
                together in the pharmaceutical industry and beyond.
              </Typography>
            </Box>
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
        </Container>
      </Box>

      {/* Catalogue Section */}
      <Container
        sx={{
          textAlign: "center",
          padding: "60px",
          borderRadius: "8px",
        }}
      >
        <h1 className="about_line" style={{ color: "#37517e", textAlign: "center", fontSize: "32px", font: "bold", paddingBottom: "20px", position: "relative", marginBottom: "20px" }}>WANT TO SEE OUR CATALOGUE</h1>
        <Typography variant="body1" sx={{ color: "#666", fontSize: "18px", marginBottom: { xs: "30px", lg: "60px" }
 }}>
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
