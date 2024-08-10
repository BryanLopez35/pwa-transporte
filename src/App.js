import {
  Layout,
  Home,
  About,
  Gallery,
  PointsOfInterest,
  CityRoutes,
  MapView,
  Login,
  Dashboard
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="acerca" element={<About />} />
        <Route path="puntos-de-interes" element={<PointsOfInterest />} />
        <Route path="rutas" element={<CityRoutes />} />
        <Route path="/mapa/:routeId" element={<MapView />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;
