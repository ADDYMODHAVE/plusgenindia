// TestimonialSection.js
import React from "react";
import { Container, Typography, Avatar, Box, Grid } from "@mui/material";
import { Star } from "@mui/icons-material";
import Slider from "react-slick";

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,

  };

  const testimonials = [
    {
      name: "Vinayak Medical Agency",
      location: "Bhopal, Madhya Pradesh",
      image: "https://plusgenindia.com/assets/img/testimonials/testimonials-3.jpg",
      rating: 5,
      feedback: `"Vinayak Medical Agency values its successful collaboration with PlusGen India Pvt. Ltd. Their pharmaceutical offerings, notably in anti-diabetic
        and anti-cancer treatments, have been vital for meeting our customers' healthcare demands. We admire their dedication to quality and innovation,
        with their responsive team ensuring a smooth and beneficial partnership."`,
    },
    {
      name: "HealthCare Partners",
      location: "Mumbai, Maharashtra",
      image: "https://plusgenindia.com/assets/img/testimonials/testimonials-2.jpg",
      rating: 5,
      feedback: `"Working with PlusGen India Pvt. Ltd. has been a positive experience. Their medicines, especially in the cardiovascular space, are top-notch, and their customer support is excellent. We look forward to a continued relationship."`,
    },
    // Add more testimonials here...
  ];

  return (
    <section id="testimonials">
      <Container maxWidth="lg" sx={{ textAlign: "center", py: 5 }}>
        <h1
          className="about_line"
          style={{
            color: "#37517e",
            textAlign: "center",
            fontSize: "32px",
            font: "bold",
            paddingBottom: "20px",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          TESTIMONIALS
        </h1>
        <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
          Effective treatments that deliver results, backed by patient trust and medical expertise.
        </Typography>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} >

              <Grid sx={{ padding: "40px" }}>
                <Grid item xs={12} md={3}>
                  <Avatar
                    src={testimonial.image}
                    alt={testimonial.name}
                    sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                  />
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#37517e" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {testimonial.location}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: "#FFD700" }} />
                    ))}
                  </Box>
                  <Typography variant="body1" sx={{ color: "#666", fontStyle: "italic" }}>
                    {testimonial.feedback}
                  </Typography>
                </Grid>
              </Grid>

            </Box>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default TestimonialSection;
