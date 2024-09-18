import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";


const ScrollBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "https://app.unios.in/productmaster/3y7YqjK9dMvvmtqSmV4y4-75.png",
    "https://app.unios.in/productmaster/EAad7sd5XYOQzIfs2pjpG28z.png",
    "https://app.unios.in/productmaster/3y7YqjK9dMvvmtqSmV4y4-75.png",
    "https://app.unios.in/productmaster/3y7YqjK9dMvvmtqSmV4y4-75.png",
    "https://app.unios.in/productmaster/EAad7sd5XYOQzIfs2pjpG28z.png",
    "https://app.unios.in/productmaster/3y7YqjK9dMvvmtqSmV4y4-75.png",
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (

    <Box sx={{
      background: "#f5f6f8", paddingX: "0px"
    }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",

            overflow: "hidden",
            whiteSpace: "nowrap",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "inline-block",
              animation: isPaused ? "none" : "scrollLeft 30s infinite",
              "@keyframes scrollLeft": {
                "0%": {
                  transform: "translateX(0%)",
                },
                "100%": {
                  transform: "translateX(-50%)",
                },
              },
            }}
          >
            {[...images, ...images].map((src, index) => (
              <Box
                component="img"
                key={index}
                src={src}
                alt={`Image ${index + 1}`}
                sx={{
                  width: "150px",
                  marginRight: "75px",
                  display: "inline-block",
                  padding: "50px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>


    </Box>);
};

export default ScrollBar;
