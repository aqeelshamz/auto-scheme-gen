import {
  DrawingManagerF,
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import React, { useMemo } from "react";
import "./App.css";

const libraries = ["drawing"];

const App = () => {
  const [map, setMap] = React.useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBFrn8O362KFIOQWHGmcuiwjpfZsUXig-k",
    libraries,
  });

  const onMapLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const center = useMemo(() => ({ lat: 10.5115487, lng: 76.1882293 }), []);

  const options = {
    drawingControl: true,
    drawingControlOptions: {
      position: map && window.google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ["polygon"],
    },
    polygonOptions: {
      fillColor: "#ff0000",
      fillOpacity: 0.5,
      strokeWeight: 2,
      clickable: true,
      editable: true,
      zIndex: 100,
    },
  };

  return (
    <div className="App">
      {!isLoaded ? (
        <div className="column expand"></div>
      ) : (
        <div className="column expand">
          <div className="row" style={{ padding: "20px " }}>
            <p style={{ fontSize: "1.2rem", fontWeight: "800" }}>
              THRISSUR POLICE
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "500",
                marginLeft: "20px",
              }}
            >
              Automatic Scheme Generation
            </p>
          </div>
          <div className="expand">
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={13}
            >
              {<DrawingManagerF
                options={options}
              />}
            </GoogleMap>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
