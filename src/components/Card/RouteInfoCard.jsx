import * as React from "react";
import "./RouteInfoCard.css";
import Rating from "@mui/material/Rating";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

export default function RouteInfoCard({ routeDetails, totalDistance }) {
  const [value, setValue] = React.useState(2);
  const [averageRating, setAverageRating] = React.useState(0);
  const [isRatingUpdated, setIsRatingUpdated] = React.useState(false);
  const [hasRated, setHasRated] = React.useState(false);
  const [userRating, setUserRating] = React.useState(null); // Estado para almacenar la calificación del usuario

  console.error = () => {};
  React.useEffect(() => {
    const routeId = routeDetails.routeNumber;

    const fetchAverageRating = async () => {
      const routeRatingsRef = collection(firestore, "routeRatings");
      const q = query(routeRatingsRef, where("routeId", "==", routeId));
      const querySnapshot = await getDocs(q);

      let totalRating = 0;
      let numRatings = 0;

      querySnapshot.forEach((doc) => {
        totalRating += doc.data().rating;
        numRatings++;
        if (doc.data().userId === getUserId()) {
          // Verificar si el usuario ya calificó la ruta
          setHasRated(true);
          setUserRating(doc.data().rating); // Almacenar la calificación del usuario
        }
      });

      if (numRatings > 0) {
        const avgRating = totalRating / numRatings;
        setAverageRating(avgRating);
      }
    };

    fetchAverageRating();
  }, [routeDetails.routeNumber, isRatingUpdated]);

  const handleRateRoute = async (newValue) => {
    if (!hasRated) {
      const routeId = routeDetails.routeNumber;

      try {
        await addDoc(collection(firestore, "routeRatings"), {
          routeId: routeId,
          userId: getUserId(), // Almacenar el ID de usuario para verificar la calificación única
          rating: newValue,
        });
        console.log("Calificación agregada exitosamente");
        setIsRatingUpdated(true);
        setHasRated(true);
        setUserRating(newValue);
      } catch (error) {
        console.error("Error al calificar la ruta:", error);
      }
    } else {
      console.log("Ya has calificado esta ruta desde este dispositivo.");
    }
  };

  console.log("RouteInfoCard renderizado");

  const getUserId = () => {
    // Implementa una función para obtener un ID de usuario único, por ejemplo, desde localStorage
    return "user123";
  };

  return (
    <article className="job-card">
      <div className="tittle-container">
        <p className="text-title">{routeDetails.origin}</p>
        <p className="text-title">
          <ArrowForwardIcon sx={{ fontSize: 45 }} />
        </p>
        <p className="text-title">{routeDetails.destination}</p>
      </div>

      <div className="budget-exp">
        <div>
          <p className="value">${routeDetails.normalPrice}</p>
          <p className="label">Precio Normal</p>
        </div>
        <div>
          <p className="value">${routeDetails.preferredPrice}</p>
          <p className="label">Precio Preferencial</p>
        </div>
        <div>
          <p className="value">{totalDistance} KM</p>
          <p className="label">Distancia</p>
        </div>
      </div>

      <p className="text-body">Horario: {routeDetails.schedule}</p>
      <div className="rating-container">
        <div>
          <p className="value">
            <Rating
              name="route-rating"
              value={hasRated ? userRating : value} // Mostrar la calificación del usuario si ya ha calificado
              onChange={(event, newValue) => {
                setValue(newValue);
                handleRateRoute(newValue);
              }}
              size="large"
              readOnly={hasRated} // Hacer que el Rating sea de solo lectura si el usuario ya calificó
            />
          </p>
          <p className="label">Tu calificación</p>
        </div>
        <div>
          <p className="value">
            <Rating
              name="route-ratingAvg"
              value={averageRating}
              readOnly
              size="large"
            />
          </p>
          <p className="label">Promedio</p>
        </div>
      </div>
    </article>
  );
}
