import React from "react";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  Badge,
  Box,
  Container,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckIcon from "@mui/icons-material/Check";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

export default function About() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#161b22",
      }}
    >
      <Box py={12}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                Sobre mi
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mt: 2, color: "#fff" }}
              >
                Bryan López
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, maxWidth: 600, color: "#fff" }}
              >
                Soy un desarrollador fullstack apasionado con un fuerte enfoque
                en creación de aplicaciones web de alta calidad y fáciles de
                usar. Con 4+ años de experiencia, he perfeccionado mis
                habilidades en JavaScript moderno marcos, diseño receptivo y
                prácticas de desarrollo ágil.
              </Typography>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Bryan Lopez"
                src="https://github.com/BryanLopez35.png"
                sx={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  objectFit: "cover",
                  width: 300,
                  height: 300,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={12}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                <Badge>Skills</Badge>
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mt: 2, color: "#fff" }}
              >
                Qué puedo hacer
              </Typography>
              <Box
                mt={6}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 4,
                }}
              >
                {skills.map((skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#303b4a",
                      p: 4,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      color: "#fff",
                    }}
                  >
                    {skill.icon}
                    <Typography variant="h6" mt={2}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body1" mt={2} color="#fff">
                      {skill.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={12}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              color: "#fff",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                Experiencia
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
                Experiencia laboral
              </Typography>
              <Box mt={6} sx={{ display: "grid", gap: 6 }}>
                {experience.map((job, index) => (
                  <Box key={index}>
                    <Typography variant="h6" fontWeight="bold">
                      {job.position}
                    </Typography>
                    <Typography variant="body1">
                      {job.company} | {job.date}
                    </Typography>
                    <ul>
                      {job.details.map((detail, idx) => (
                        <li key={idx}>
                          <CheckIcon sx={{ mr: 1 }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={12} sx={{ color: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                Educación
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
                Formación académica
              </Typography>
              <Box mt={6} sx={{ display: "grid", gap: 6 }}>
                {education.map((edu, index) => (
                  <Box key={index}>
                    <Typography variant="h6" fontWeight="bold">
                      {edu.degree}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {edu.institution} | {edu.date}
                    </Typography>
                    <ul>
                      {edu.details.map((detail, idx) => (
                        <li key={idx}>
                          <CheckIcon sx={{ mr: 1 }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={12} sx={{ color: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              color: "#fff",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                Certificaciones
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
                Certificaciones profesionales
              </Typography>
              <Box mt={6} sx={{ display: "grid", gap: 6 }}>
                {certifications.map((cert, index) => (
                  <Box key={index}>
                    <Typography variant="h6" fontWeight="bold">
                      {cert.title}
                    </Typography>
                    <Typography variant="body1">
                      {cert.organization} | Cursado {cert.date}
                    </Typography>
                    <Typography variant="body1" mt={2}>
                      {cert.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box py={12} sx={{ color: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle1"
                sx={{ bgcolor: "#f5f5f5", py: 1, px: 3, borderRadius: "10px" }}
              >
                Hobbies
              </Typography>
              <Typography variant="h3" fontWeight="bold" sx={{ mt: 2 }}>
                Me gusta
              </Typography>
              <Box
                mt={6}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 4,
                  color: "#ff",
                }}
              >
                {hobbies.map((hobby, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderRadius: "10px",
                      backgroundColor: "#303b4a",
                      p: 4,
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {hobby.icon}
                    <Typography variant="h6" mt={2}>
                      {hobby.title}
                    </Typography>
                    <Typography variant="body1" mt={2}>
                      {hobby.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
const skills = [
  {
    icon: <CodeIcon color="primary" fontSize="large" />,
    title: "Desarrollo Fullstack",
    description:
      "Experiencia en HTML, CSS, JavaScript, React.js, React Native, Bootstrap, PHP (CodeIgniter y Laravel), Node.js (Express), bases de datos SQL y APIs RESTful.",
  },
  {
    icon: <BrushIcon color="primary" fontSize="large" />,
    title: "Bases de Datos",
    description:
      "Especializado en el diseño, desarrollo, administración y mantenimiento de sistemas de bases de datos.",
  },
  {
    icon: <BoltIcon color="primary" fontSize="large" />,
    title: "Optimización de Rendiemiento",
    description:
      "Mejorar la velocidad del sitio web, optimizacón de assets e implementación las mejores prácticas.",
  },
  {
    icon: <BrushIcon color="primary" fontSize="large" />,
    title: "Administración de Servidores",
    description:
      "Experiencia en la administración de servidores, abarcando configuraciones, mantenimiento, y optimización para asegurar un rendimiento óptimo y una alta disponibilidad de servicios.",
  },
];

const experience = [
  {
    position: "Desarrollador Jr.",
    company: "Plaza Amistad",
    date: "2024 - Presente",
    details: [
      "Desarrollo de Aplicaciones Móviles con React Native",
      "Desarrollo Fullstack de Sistemas Web PHP y MySql",
      "Optimización de Sitios Web Wordpress",
    ],
  },
  {
    position: "Desarrollador / Consultor Externo",
    company: "Nakeji Dental Group",
    date: "2024 - Presente",
    details: [
      "Desarrollo de Paginas Web Responsivas",
      "Implementación de E-commerce",
      "Optimización de Sitios Web Wordpress",
    ],
  },
  {
    position: "Administrador de Sistemas",
    company: "Precision Plating SA de CV",
    date: "2020 - 2024",
    details: [
      "Desarrollo de Sistemas Web (ERP systems)",
      "Administración de Bases de Datos",
      "Administración de Servidores",
      "Ciberseguridad",
      "Gestion Departamental",
      "Optimización de Sitios Web",
    ],
  },
  // Add more job experiences as needed
];

const education = [
  {
    degree: "Ing. Técnologias de la Información y Comunicación",
    institution: "CUT Universidad de Tijuana",
    date: "2023 - 2026",
    details: [
      "Cursos de desarrollo web, algoritmos, ingeniería de software y administración de bases de datos.",
    ],
  },
  // Add more education details as needed
];

const certifications = [
  {
    title: "Ciberseguridad",
    organization: "SysAdmin México",
    date: "Agosto 2023",
    description:
      "Conocimiento de los principios fundamentales de ciberseguridad, incluyendo la norma ISO/IEC 27032, implementación, gestión de riesgos y fortalecimiento de un marco integral de ciberseguridad.",
  },
  // Add more certifications as needed
];

const hobbies = [
  {
    icon: <MusicNoteIcon color="#fff" fontSize="large" />,
    title: "Música",
    description:
      "La música no puede faltar en mi vida, desde pop hasta el metal, pasando por el rock y el rap",
  },
  {
    icon: <MyLocationIcon color="#fff" fontSize="large" />,
    title: "Airsoft",
    description: "Practicar este demorte me mantiene motivado y activo",
  },
  {
    icon: <VideogameAssetIcon color="#fff" fontSize="large" />,
    title: "Videojuegos",
    description: "Jugar videojuegos del genero shooter y táctico",
  },
];
