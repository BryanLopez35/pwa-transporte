import Find from "./Home/Find";
import TransportationOptions from "./Home/Transportation";
import ExploreTheCity from "./Home/ExploreTheCity";

export default function Home() {
  return (
    <>
      <main>
        <Find />
        <TransportationOptions />
        <ExploreTheCity />
      </main>
    </>
  );
}
