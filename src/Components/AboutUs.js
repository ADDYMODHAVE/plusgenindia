import React from "react";
import { Box, Typography, Button } from "@mui/material";

const AboutUs = () => {
  return (
    <section id="about">
      <h1 style={{ textAlign: "center" }}>About us</h1>
      <Box sx={{ padding: "40px", backgroundColor: "white", borderRadius: "8px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: 1, minWidth: "300px", margin: "10px" }}>
            <Typography variant="h4" sx={{ color: "#2d3748", marginBottom: "10px" }}>
              PlusGen India Private Limited
            </Typography>
            <Typography variant="h5" sx={{ color: "#4a5568", marginBottom: "20px" }}>
              Empowering Partnerships in Healthcare Distribution
            </Typography>
            <Typography sx={{ marginBottom: "15px", textAlign: "justify" }}>
              Founded in 2023, M/s PlusGen India Private Limited (PlusGen) is a dynamic pharmaceutical company that emerged as a part of the esteemed Plus
              Distribution Private Limited Group. Under the visionary guidance of pharmaceutical industry stalwart Mr. Anil Kumar Bhatia, PlusGen is committed
              to revolutionising healthcare distributors in India.
            </Typography>
            <Typography sx={{ marginBottom: "15px", textAlign: "justify" }}>
              PlusGen is currently India’s sole selling agent for Gufic Biosciences Limited’s affordable medicine division named - <strong>GUFIC PURE</strong>.
              With a comprehensive portfolio boasting 800 distinct medical products, the company has launched its operations with an initial inventory of 300
              SKUs.
            </Typography>
          </Box>

          <Box sx={{ flex: 1, minWidth: "300px", margin: "10px" }}>
            <Typography sx={{ marginBottom: "15px", textAlign: "justify" }}>
              In a strategic move, the company has meticulously selected a network of C&F partners, as well as pharmaceutical distribution collaborators
              spanning nationwide locals, to facilitate its medicine distribution activities effectively.
            </Typography>
            <Typography sx={{ marginBottom: "15px", textAlign: "justify" }}>
              Initiating a proactive approach, the company has commenced its marketing and sales campaigns, having diligently enlisted skilled professionals
              dedicated to these objectives. The company's target demographic encompasses a diverse array of stakeholders, including Retailers, Open Pharmacies,
              Nursing Homes, Hospitals, and Medical agencies.
            </Typography>
            <Typography sx={{ marginBottom: "15px", textAlign: "justify" }}>
              The pharma distribution strategy is finely tuned to reflect a nuanced balance, with an anticipated medicine distribution ratio of approximately
              70:30 between Retail and Institutional channels, respectively. This discerning approach not only underscores the pharma company's commitment to
              comprehensive market outreach but also signifies its responsiveness to the varied needs of stakeholders within the healthcare sector.
            </Typography>
            <Button
              href="#"
              variant="outlined"
              sx={{
                color: "#2b6cb0",
                borderColor: "#2b6cb0",
                padding: "10px 20px",
                borderRadius: "4px",
                fontWeight: "bold",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#2b6cb0",
                  color: "white",
                },
              }}
            >
              Read More →
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default AboutUs;
