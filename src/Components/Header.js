import React from "react";
import { AppBar, Toolbar, IconButton, Box, Container, List, ListItem, Link, Drawer, IconButton as MuiIconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const drawer = (
    <List className="nav-links" sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center", marginTop: "10px" }}>
      {["Home", "About", "Services", "Portfolio", "Testimonials", "Product", "Contact"].map((text) => (
        <ListItem key={text} sx={{ padding: "10px 0" }}>
          <Link href="#" sx={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", "&:hover": { color: "#0056b3" } }}>
            {text}
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none", paddingY: "15px" }}>
      <div>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box className="logo">
            <img src="https://plusgenindia.com/assets/img/logoss12.png" alt="PlusGen India Pvt. Ltd. Logo" style={{ maxHeight: "36px", marginRight: "8px" }} />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "24px" }}>
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Product", "Contact"].map((text) => (
              <Link
                key={text}
                href={`#${text.toLowerCase()}`}
                sx={{ textDecoration: "none", color: "#007bff", fontWeight: "bold", "&:hover": { color: "#0056b3" } }}
              >
                {text}
              </Link>
            ))}
          </Box>
          <MuiIconButton color="inherit" aria-label="open drawer" edge="end" sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </MuiIconButton>

          <IconButton className="whatsapp-icon" sx={{ padding: 0 }}>
            <img
              src="https://imgs.search.brave.com/RSOZmwO8xNdqAxucL1pQ-feaK34hv23rPf9o38qWW2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zNTM2LzM1MzY0/NDUucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
              alt="WhatsApp Icon"
              style={{ maxHeight: "40px", width: "auto", borderRadius: "50%", marginRight: "40px" }}
           
            />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
