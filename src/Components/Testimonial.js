// TestimonialSection.js
import React from "react";
import { Container, Typography, Avatar, Box, Grid } from "@mui/material";
import { Star } from "@mui/icons-material";

const TestimonialSection = () => {
  return (
    <section id="testimonials">
      <Container maxWidth="md" sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" gutterBottom>
          TESTIMONIALS
        </Typography>
        <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
          Effective treatments that deliver results, backed by patient trust and medical expertise.
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center" flexDirection={"column"}>
          <Grid item xs={12} md={3}>
            <Avatar src="/path/to/image.png" alt="Vinayak Medical Agency" sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Vinayak Medical Agency
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Bhopal, Madhya Pradesh
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {[...Array(5)].map((_, index) => (
                <Star key={index} sx={{ color: "#FFD700" }} />
              ))}
            </Box>
            <Typography variant="body1" sx={{ color: "#666", fontStyle: "italic" }}>
              "Vinayak Medical Agency values its successful collaboration with PlusGen India Pvt. Ltd. Their pharmaceutical offerings, notably in anti-diabetic
              and anti-cancer treatments, have been vital for meeting our customers' healthcare demands. We admire their dedication to quality and innovation,
              with their responsive team ensuring a smooth and beneficial partnership."
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialSection;
