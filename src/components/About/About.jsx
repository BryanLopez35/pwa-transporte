import React from "react";
import { Grid, Typography, Avatar, Button, Badge } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";

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
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#161b22", py: 20, color: "#fff" }}
        maxWidth="lg"
        component="main"
        style={{
          height: "100vh",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            src="https://github.com/BryanLopez35.png"
            sx={{ width: 300, height: 300, mb: 4 }}
          ></Avatar>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems="center"
          justifyContent="center"
          sx={{ px: 2 }}
        >
          <Typography variant="h4" gutterBottom>
            Bryan López{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            Como desarrollador web apasionado, aporto una mezcla única de
            experiencia técnica y estilo creativo a cada proyecto en el que
            trabajo. Con 3 años de experiencia en React, Node.js y
            administración de bases de datos, me siento impulsado a ampliar los
            límites de lo que es posible en el ámbito digital.
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined" size="small" startIcon={<GitHub />}>
                GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small" startIcon={<LinkedIn />}>
                LinkedIn
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" size="small" startIcon={<Twitter />}>
                Twitter
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#161b22", py: 12, color: "#fff" }}
        maxWidth="lg"
        component="main"
        style={{
          height: "100vh",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Experiencia y Habilidades
          </Typography>
          <ul>
            <li>
              <Typography variant="subtitle1" gutterBottom>
                Web Developer
              </Typography>
              <Typography variant="body2" paragraph>
                He perfeccionado mis habilidades en el desarrollo web,
                trabajando con tecnologías de vanguardia como React, Node.js y
                varias bases de datos. Mi pasión por la resolución de problemas
                y la atención al detalle han sido fundamentales para ofrecer
                aplicaciones web de alta calidad y centradas en el usuario.
              </Typography>
              <div>
                <Badge
                  variant="outlined"
                  sx={{
                    mr: 2,
                    backgroundColor: "#5e7c99",
                    borderRadius: "7px",
                    padding: "6px 7px",
                  }}
                >
                  React
                </Badge>
                <Badge
                  variant="outlined"
                  sx={{
                    mr: 2,
                    backgroundColor: "#5e7c99",
                    borderRadius: "7px",
                    padding: "6px 7px",
                  }}
                >
                  Node.js
                </Badge>
                <Badge
                  variant="outlined"
                  sx={{
                    mr: 2,
                    backgroundColor: "#5e7c99",
                    borderRadius: "7px",
                    padding: "6px 7px",
                  }}
                >
                  SQL
                </Badge>
              </div>
            </li>
            <li>
              <Typography variant="subtitle1" gutterBottom>
                Habilidades Técnicas
              </Typography>
              <Typography variant="body2" paragraph>
                My technical toolkit includes JavaScript, TypeScript, React,
                Node.js, SQL, Git, and Figma. I'm constantly learning and
                exploring new technologies to stay ahead of the curve and
                deliver cutting-edge solutions.
              </Typography>
              <div>
                <Badge variant="outlined" color="primary" sx={{ mr: 1 }}>
                  JavaScript
                </Badge>
                <Badge variant="outlined" color="primary" sx={{ mr: 1 }}>
                  TypeScript
                </Badge>
                <Badge variant="outlined" color="primary">
                  Git
                </Badge>
              </div>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Interests and Hobbies
          </Typography>
          <ul>
            <li>
              <Typography variant="subtitle1" gutterBottom>
                Photography
              </Typography>
              <Typography variant="body2" paragraph>
                Photography is a true passion of mine. I love capturing the
                world around me, from breathtaking landscapes to candid moments
                that tell a story. It's a creative outlet that allows me to see
                the world through a different lens.
              </Typography>
              <div>{/* Add your photo components here */}</div>
            </li>
            <li>
              <Typography variant="subtitle1" gutterBottom>
                Reading
              </Typography>
              <Typography variant="body2" paragraph>
                I'm an avid reader, with a diverse taste in literature. From
                thought-provoking non-fiction to captivating works of fiction, I
                find immense joy in exploring new ideas and perspectives through
                the written word. It's a way for me to continuously learn and
                grow.
              </Typography>
              <div>{/* Add your book components here */}</div>
            </li>
            <li>
              <Typography variant="subtitle1" gutterBottom>
                Sports
              </Typography>
              <Typography variant="body2" paragraph>
                Staying active is important to me, and I enjoy challenging
                myself through running and cycling. These activities not only
                keep me physically fit, but also provide a mental reset,
                allowing me to recharge and approach my work with renewed energy
                and focus.
              </Typography>
              <div>{/* Add your sports components here */}</div>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
