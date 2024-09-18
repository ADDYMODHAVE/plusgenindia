import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const MedicalProducts = () => {
  return (
    <Box
      id="product"
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flex: 2,
          minWidth: "300px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#2d3748", marginBottom: "10px" }}>
          We Provide You Best Medical Products Our Area Of Focus
        </Typography>
        <Typography sx={{ marginBottom: "20px", color: "#4a5568" }}>
          At PlusGen India Pvt Ltd., we specialise in several key therapeutic areas to ensure we provide the best medicine and medical products that meet the
          diverse healthcare needs of patients:
        </Typography>
        <List sx={{ padding: 0 }}>
          {[
            "Antibiotics",
            "Anti Histamine/ Anti Allergic",
            "Anti Diabetes",
            "Cardiovascular",
            "Anti Cancer",
            "Erectile Dysfunction",
            "Analgesic & NSAID’s",
            "Anti Coagulants",
            "Diuretic",
            "Ointments/Creams & Gels",
            "Anti Platelets",
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#ffffff",
                margin: "5px 0",
                padding: "10px",
                borderRadius: "5px",
                marginLeft: "20px",
                alignItems: "center",
                fontSize: "1em",
                color: "#2b6cb0",
                cursor: "pointer",
                textAlign: "left",
                "&:hover": {
                  backgroundColor: "#f1f5f9",
                },
              }}
            >
              <ListItemText primary={`${index + 1} ${item}`} sx={{ fontWeight: "bold" }} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "300px",
        }}
      >
        <img
          src="https://app.unios.in/productmaster/tMMvERp1PLbz8Z1giHik0iBr.png"
          alt="DentoGard Sensitive"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>
    </Box>
  );
};

export default MedicalProducts;
