// Footer.js
import React from "react";
import { Container, Grid, Box, Typography, TextField, Button, Link } from "@mui/material";
import { Facebook, Instagram, YouTube, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#f8f9fa", paddingY: "50px" }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "8px", paddingBottom: "12px", color: "#37517e", fontSize: "24px" }}>
              Join Our Newsletter
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "14px", color: "#444444", marginBottom: "30px", }}>
              Subscribe to the PlusGen India Pvt. Ltd. newsletter for exclusive insights into our latest pharmaceutical innovations.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              sx={{
                width: { xs: "100%", sm: "400px" },
                backgroundColor: "#fff",
                borderRadius: 2,
              }}
              InputProps={{
                endAdornment: (
                  <Button variant="contained" sx={{ borderRadius: 2, margin: "10px" }}>
                    Subscribe
                  </Button>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              M/s PlusGen India Private Limited (PlusGen)
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              M/s PlusGen India Private Limited (PlusGen) is a dynamic pharmaceutical company that emerged as a part of the esteemed Plus Distribution Private
              Limited group.
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
              K-21, Peera Garhi Relief Camp, Peera Garhi, Udyog Nagar, Mangolpuri, Delhi, 110041
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
              Phone: +91-9910224328, +91-9910228574
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
              Email: contact@plusgen.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              Useful Links
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: "block", mb: 1 }}>
              Home
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: "block", mb: 1 }}>
              About us
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: "block", mb: 1 }}>
              Services
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: "block", mb: 1 }}>
              Terms of service
            </Link>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              Our Services
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: "block", mb: 1 }}>
              Product
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body1" sx={{ fontWeight: "bold", mb: 2 }}>
              Follow Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
              Stay updated with PlusGen India Pvt. Ltd., your trusted partner in pharmaceutical excellence.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <YouTube />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            © Copyright <strong>PlusGen India</strong> All Rights Reserved
          </Typography>
        </Box>
      </Container></>

  );
};

export default Footer;
