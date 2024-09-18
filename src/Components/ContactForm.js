import React from "react";
import { Box, Container, Grid, TextField, Typography, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactForm = () => {
  return (
    <section id="contact">
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          CONTACT
        </Typography>
        <Typography align="center" gutterBottom>
          Please contact us on the below information or Want a call back? Simply leave your details, and we’ll get in touch ASAP.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ mr: 2 }} />
                <Typography>
                  <strong>Address:</strong> PlusGen India Pvt. Ltd K-21, Peera Garhi Relief Camp, Peera Garhi, Udyog Nagar, Mangolpuri, Delhi, 110041
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon sx={{ mr: 2 }} />
                <Typography>
                  <strong>Call Us:</strong> +91-9910224328, +91-9910228574
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon sx={{ mr: 2 }} />
                <Typography>
                  <strong>Email Us:</strong> contact@plusgen.com
                </Typography>
              </Box>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.37412964716!2d77.06889983815726!3d28.459496516110146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034512f41265%3A0xe344d6a7560de0d6!2sPeera%20Garhi%20Relief%20Camp!5e0!3m2!1sen!2sin!4v1695385656729!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Peera Garhi Relief Camp"
              ></iframe>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }} noValidate autoComplete="off">
              <TextField required label="Your Name" variant="outlined" />
              <TextField required label="Your Contact No." variant="outlined" />
              <TextField required label="Your Email" variant="outlined" />
              <TextField required label="Subject" variant="outlined" />
              <TextField required label="Message" variant="outlined" multiline rows={4} />
              <Button variant="contained" color="primary">
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactForm;
