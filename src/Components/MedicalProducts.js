import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MedicalProducts = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const products = [
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
  ];

  return (
    <Box
      id="product"
      sx={{
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        background: "#f5f6f8",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flex: 2,
          maxWidth: { md: "100%", lg: "55%" },
          minWidth: { xs: "300px", lg: "900px" }
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#37517e", marginBottom: "10px" }}
        >
          We Provide You Best Medical Products <strong> Our Area Of Focus</strong>
        </Typography>
        <Typography sx={{ marginBottom: "20px", color: "#4a5568" }}>
          At PlusGen India Pvt Ltd., we specialise in several key therapeutic
          areas to ensure we provide the best medicine and medical products that
          meet the diverse healthcare needs of patients:
        </Typography>

        {products.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            sx={{ marginBottom: "20px" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography sx={{ fontWeight: "bold", color: "#37517e" }}>
                {`${index + 1}. ${item}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Details about {item}. This section can provide more information
                about each product.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "300px",
          maxWidth: { md: "100%", lg: "55%" },
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
