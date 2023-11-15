import "./App.css";

import { useLoadScript } from "@react-google-maps/api";
import Map from "./components/Map";
function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAesMJEFp4Har2z8F44gZEVgtwHY_zQidQ",
    libraries: ["places"],
  });

  if (!isLoaded)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="App">
      <header>
        <h1>Google Maps Platform</h1>
      </header>
      <body>
        <Map />
      </body>
    </div>
  );
}

export default App;
