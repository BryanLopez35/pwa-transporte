import React from "react";
import { Card, CardHeader, CardContent } from "@mui/material";
import BusIcon from "@mui/icons-material/DirectionsBus";
import TrainTrackIcon from "@mui/icons-material/Train";
import SandwichIcon from "@mui/icons-material/Subway";

export default function TransportationOptions() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://api-transporte-tijuana.onrender.com/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl font-bold mb-6 sm:text-3xl md:text-4xl">
          {data} Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BusIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Buses</h3>
              <p className="text-gray-600">
                Explore the extensive bus network that covers the city.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrainTrackIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Trains</h3>
              <p className="text-gray-600">
                Ride the efficient train system to reach your destination.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <SandwichIcon className="w-8 h-8 text-primary" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold mb-2">Subway</h3>
              <p className="text-gray-600">
                Navigate the city's underground subway network.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
