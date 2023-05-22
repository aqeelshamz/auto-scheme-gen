import {
  DrawingManagerF,
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import { useState, useMemo, useCallback, useEffect } from "react";
import "./Event.css";
import { googleApiKey } from "../../utils/utils";
import { policeIcon, transparentIcon } from "../../utils/icons";
import CreateSectorModal from "../../components/Modal/CreateSectorModal";
import FinishEventModal from "../../components/Modal/FinishEventModal";
import Navbar from "../../components/Navbar/Navbar";

// react icons
import { BsExclamationCircle } from "react-icons/bs";
import { IoReturnUpBack } from "react-icons/io5";
import { GoCheck } from "react-icons/go";
import { useParams } from "react-router-dom";
import { api } from "../../utils/utils";

const libraries = ["drawing"];

const Event = () => {
  const { eventId } = useParams();
  const [map, setMap] = useState(null);
  const [sectorModal, setSectorModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const [eventData, setEventData] = useState({});

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
    libraries,
  });

  const onMapLoad = useCallback((map) => {
    setMap(map);
    const icon = {
      url: transparentIcon,
      size: new window.google.maps.Size(1, 1),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(0, 0),
    };
    // // Define the LatLng coordinates for the polygon's path.
    // const triangleCoords = [
    //   { lat: 10.52724489503287, lng: 76.19269249580081 },
    //   { lat: 10.545978017231691, lng: 76.20024559638675 },
    //   { lat: 10.545809255451871, lng: 76.2253081574219 },
    //   { lat: 10.528088753862352, lng: 76.23732445380863 },
    //   { lat: 10.508341852283532, lng: 76.22856972358402 },
    //   { lat: 10.508679416769048, lng: 76.20196221015628 },
    // ];
    // // Construct the polygon.
    // const bermudaTriangle = new window.google.maps.Polygon({
    //   paths: triangleCoords,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    // });

    // bermudaTriangle.setMap(map);

    // const rectangle = new window.google.maps.Rectangle({
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.1,
    //   map,
    //   clickable: true,
    //   bounds: {
    //     south: 10.511379919371432,
    //     west: 76.19887230537113,
    //     north: 10.544796682829698,
    //     east: 76.23097298286136,
    //   },
    // });

    // const rectangle2 = new window.google.maps.Rectangle({
    //   strokeColor: "#169100",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#169100",
    //   fillOpacity: 0.1,
    //   map,
    //   clickable: true,
    //   bounds: {
    //     south: 10.531970474725403,
    //     west: 76.20015976569827,
    //     north: 10.543615343893695,
    //     east: 76.22968552253421,
    //   },
    // });

    // const rectangle3 = new window.google.maps.Rectangle({
    //   strokeColor: "#095ab0",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#095ab0",
    //   fillOpacity: 0.1,
    //   map,
    //   clickable: true,
    //   bounds: {
    //     south: 10.512013806076538,
    //     west: 76.20024674486626,
    //     north: 10.531422933419412,
    //     east: 76.21024602007378,
    //   },
    // });

    // rectangle.setMap(map);
    // rectangle2.setMap(map);
    // rectangle3.setMap(map);

    // const rectangleCenter2 = rectangle2.getBounds().getCenter();
    // const marker1 = new window.google.maps.Marker({
    //   position: rectangleCenter2,
    //   label: {
    //     text: "SECTOR 1",
    //     color: "#169100",
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //   },
    //   icon: icon,
    //   optimized: false,
    // });

    // marker1.setMap(map);

    // const rectangleCenter3 = rectangle3.getBounds().getCenter();
    // const marker2 = new window.google.maps.Marker({
    //   position: rectangleCenter3,
    //   label: {
    //     text: "SECTOR 2",
    //     color: "#095ab0",
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //   },
    //   icon: icon,
    //   optimized: false,
    // });

    // marker2.setMap(map);
  }, []);

  const center = useMemo(() => ({ lat: 10.5115487, lng: 76.1882293 }), []);

  const options = {
    drawingControl: true,
    drawingControlOptions: {
      position: map && window.google.maps.ControlPosition.TOP_CENTER,
      drawingModes: ["polygon", "rectangle", "marker"],
      buttonSize: 40, // Set the size of the drawing control button
    },
  };

  const getEventData = () => {
    api
      .get(`/events/${eventId}`)
      .then((response) => {
        console.log(response.data);
        setEventData(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <Navbar eventData={eventData} />
        <div className=" mt-24 ">
          {!isLoaded ? (
            <div className=" h-full"></div>
          ) : (
            <div className=" h-full">
              <div className="h-screen">
                <GoogleMap
                  mapContainerClassName="map-container"
                  center={center}
                  zoom={13}
                  onLoad={onMapLoad}
                  onClick={(ev) => {
                    console.log("latitide = ", ev.latLng.lat());
                    console.log("longitude = ", ev.latLng.lng());
                  }}
                >
                  {
                    <DrawingManagerF
                      options={options}
                      onPolygonComplete={(e) => {
                        const polygonPath = e.getPath();
                        const polygonCoords = polygonPath.getArray();
                        var array = [];
                        polygonCoords.forEach((coord) => {
                          array.push({
                            lat: coord.lat(),
                            lng: coord.lng(),
                          });
                        });
                        console.log(JSON.stringify(array));
                        setSectorModal(true);
                      }}
                      onOverlayComplete={(e) => {
                        if (e.type === "rectangle") {
                          console.log(
                            JSON.stringify(e.overlay.getBounds().toJSON())
                          );
                          setSectorModal(true);
                        } else if (e.type === "marker") {
                          console.log(
                            JSON.stringify(e.overlay.getPosition().toJSON())
                          );
                          e.overlay.setMap(null);
                          const marker2 = new window.google.maps.Marker({
                            position: e.overlay.getPosition(),
                            icon: {
                              url: policeIcon,
                              scaledSize: new window.google.maps.Size(30, 30),
                            },
                            optimized: false,
                          });

                          marker2.setMap(map);
                        }
                      }}
                    />
                  }
                </GoogleMap>
              </div>
            </div>
          )}
        </div>
        <div className="fixed w-[550px] text-lg pb-16 bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex  justify-between items-center">
            <button className=" w-[50px] h-[50px] flex justify-center items-center left-434 top-752 bg-white border-2 border-black shadow-md rounded-full box-border">
              <IoReturnUpBack size={25} className="text-blue-950" />
            </button>

            <button className=" w-[267px] h-[45px] flex justify-center items-center bg-[#FFF0C9] text-[#C86000] left-507 top-754 border-2 border-[#C86000] shadow-md rounded-lg box-border font-semibold">
              <BsExclamationCircle size={25} className="mr-3" /> Draw Event
              Border
            </button>

            <div
              onClick={() => {
                setFinishModal(true);
              }}
              className="cursor-pointer w-[181px] h-[45px] flex justify-center items-center left-791 top-754 bg-blue-900 shadow-md rounded-lg text-white font-semibold "
            >
              <button className="mr-3 flex justify-center items-center">
                <GoCheck size={25} /> <span className="ml-3">Finish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CreateSectorModal
        open={sectorModal}
        onClose={() => setSectorModal(false)}
      />
      <FinishEventModal
        open={finishModal}
        onClose={() => setFinishModal(false)}
      />
    </>
  );
};

export default Event;
