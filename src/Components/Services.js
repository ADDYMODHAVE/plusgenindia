import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

const Services = () => {
  const services = [
    {
      title: "Strong Industry Legacy",
      description:
        "As a part of the renowned Plus Distribution Private Limited group and with the support of a demonstrated legacy of GUFIC Biosciences, Plusgen inherits a legacy of excellence and trust.",
      imgSrc:
        "https://imgs.search.brave.com/RjRqvDTDraS3C7sLHGreuroOOUOtyQYJLtA1kAS-Xaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3LzcxLzU0/LzM2MF9GXzE2Nzcx/NTQ2NF92dmpWYzNS/b2pydXFLU01QdnpY/NmN4QW1ZaXZGWlhq/TC5qcGc",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We are committed to excellence in everything we do. From product development to customer service, Plusgen upholds the highest standards of quality, integrity, and professionalism.",
      imgSrc:
        "https://imgs.search.brave.com/RjRqvDTDraS3C7sLHGreuroOOUOtyQYJLtA1kAS-Xaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3LzcxLzU0/LzM2MF9GXzE2Nzcx/NTQ2NF92dmpWYzNS/b2pydXFLU01QdnpY/NmN4QW1ZaXZGWlhq/TC5qcGc",
    },
    {
      title: "Competitive Advantage",
      description:
        "With an existing strong market presence and strategic alliances, Plusgen offers its partners a competitive edge in the healthcare distribution landscape.",
      imgSrc:
        "https://imgs.search.brave.com/RjRqvDTDraS3C7sLHGreuroOOUOtyQYJLtA1kAS-Xaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3LzcxLzU0/LzM2MF9GXzE2Nzcx/NTQ2NF92dmpWYzNS/b2pydXFLU01QdnpY/NmN4QW1ZaXZGWlhq/TC5qcGc",
    },
    {
      title: "High-Quality Products",
      description:
        "Our portfolio comprises a diverse range of high-quality pharmaceutical products meticulously developed and manufactured to the highest standards.",
      imgSrc:
        "https://imgs.search.brave.com/RjRqvDTDraS3C7sLHGreuroOOUOtyQYJLtA1kAS-Xaw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzY3LzcxLzU0/LzM2MF9GXzE2Nzcx/NTQ2NF92dmpWYzNS/b2pydXFLU01QdnpY/NmN4QW1ZaXZGWlhq/TC5qcGc",
    },
  ];

  return (
    <Box id="services" sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" sx={{ fontSize: "1.8em", color: "#2d3748", marginBottom: "40px", textAlign: "center" }}>
        We Offer Best Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#ffffff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={service.imgSrc}
                alt={service.title}
                sx={{
                  maxWidth: "40px",
                  marginBottom: "20px",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontSize: "1.2em", color: "#2d3748", marginBottom: "10px" }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: "1em", color: "#4a5568" }}>{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
