import { Box, Typography, Paper } from "@mui/material";
import { keyframes } from "@emotion/react";

const flow = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(76,175,80,0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(76,175,80,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76,175,80,0);
  }
`;

const stages = [
  { name: "Checkout", status: "done" },
  { name: "Build", status: "done" },
  { name: "Test", status: "done" },
  { name: "Docker", status: "running" },
  { name: "Deploy", status: "pending" },
];

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 4,
        fontFamily: "'Noto Sans', sans-serif",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 8,
          letterSpacing: 1,
          fontWeight: 700,
          color: "#1d63ed",
        }}
      >
        Jenkins2Docker
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {stages.map((stage, index) => (
          <Box
            key={stage.name}
            sx={{
              display: "flex",
              alignItems: "center",
              animation: `${flow} 0.6s ease forwards`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: 140,
                height: 80,
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
                backdropFilter: "blur(12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "all .3s ease",
                animation:
                  stage.status === "running" ? `${pulse} 2s infinite` : "none",

                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>{stage.name}</Typography>

              <Box
                sx={{
                  mt: 1,
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  bgcolor:
                    stage.status === "done"
                      ? "#22c55e"
                      : stage.status === "running"
                        ? "#f59e0b"
                        : "#d1d5db",
                }}
              />
            </Paper>

            {index !== stages.length - 1 && (
              <Box
                sx={{
                  width: 80,
                  height: 4,
                  mx: 1,
                  borderRadius: 5,
                  background: "linear-gradient(90deg,#22c55e,#84cc16)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "30%",
                    height: "100%",
                    background: "#fff",
                    opacity: 0.8,
                    animation: "move 2s linear infinite",
                    "@keyframes move": {
                      from: { left: "-30%" },
                      to: { left: "130%" },
                    },
                  }}
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
