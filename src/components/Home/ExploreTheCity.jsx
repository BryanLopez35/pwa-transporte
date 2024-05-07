import React from "react";
import { Typography, Container, Card, CardContent, Grid, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const gridStyles = {
  maxWidth: "100%",
  borderRadius: "13px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.7)",
  height: "250px",
  backgroundColor: "#303b4a",
  color: "#fff",

};

const cardsData = [
  {
    id: 1,
    title: "Card Title 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Card Title 2",
    content: "Pellentesque nec justo vel ante finibus vestibulum.",
  },
  {
    id: 3,
    title: "Card Title 3",
    content: "Fusce ullamcorper ligula at urna ultrices, nec vehicula nisi.",
  },
  {
    id: 4,
    title: "Card Title 4",
    content: "Suspendisse auctor magna ut ex vehicula gravida.",
  },
  {
    id: 5,
    title: "Card Title 5",
    content:
      "Quisque ullamcorper dolor eget mi ultrices, eu tempor sapien mollis.",
  },
  {
    id: 6,
    title: "Card Title 6",
    content:
      "Quisque ullamcorper dolor eget mi ultrices, eu tempor sapien mollis.",
  },
];

const ExploreTheCity = () => {
  // Agrupar las tarjetas en matrices de 3 elementos cada una
  const groupedItems = cardsData.reduce((acc, curr, idx) => {
    if (idx % 3 === 0) acc.push([curr]);
    else acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  const CardItem = ({ item }) => (
    <Card style={gridStyles}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="body2" color="white">
          {item.content}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <div
      style={{
        width: "100%",
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container component="main" maxWidth="lg" style={{ margin: "45px auto" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          style={{
            color: "#fff",
            width: "100%",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Opciones de Transporte</span>
        </Typography>
        <Carousel
          autoPlay={true}
          animation="slide"
          timeout={500}
          indicators={true}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              borderRadius: "50%",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              color: "#fff",
            },
          }}
          navButtonsAlwaysVisible={true}
          infiniteLoop={true} // Desplazamiento infinito
          PrevComponent={(props) => (
            <IconButton {...props}>
              <NavigateBefore />
            </IconButton>
          )}
          NextComponent={(props) => (
            <IconButton {...props}>
              <NavigateNext />
            </IconButton>
          )}
          responsive={{
            0: { slidesToShow: 1 },
            600: { slidesToShow: 2 },
            1000: { slidesToShow: 3 },
          }}
        >
          {groupedItems.map((itemsArray) => (
            <Grid container spacing={2} key={itemsArray[0].id}>
              {itemsArray.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <CardItem item={item} />
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default ExploreTheCity;
