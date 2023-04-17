import {
	DrawingManagerF,
	GoogleMap,
	useLoadScript,
} from "@react-google-maps/api";
import { useState, useMemo, useCallback } from "react";
import "./Scheme.css";
import { googleApiKey } from "../../utils/utils";
import { policeIcon, transparentIcon } from "../../utils/icons";
import SchemeModal from "./SchemeModal";

const libraries = ["drawing"];

const Scheme = () => {
	const [map, setMap] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
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

		const rectangle = new window.google.maps.Rectangle({
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#FF0000",
			fillOpacity: 0.1,
			map,
			clickable: true,
			bounds: {
				south: 10.511379919371432,
				west: 76.19887230537113,
				north: 10.544796682829698,
				east: 76.23097298286136,
			},
		});

		const rectangle2 = new window.google.maps.Rectangle({
			strokeColor: "#169100",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#169100",
			fillOpacity: 0.1,
			map,
			clickable: true,
			bounds: {
				south: 10.531970474725403,
				west: 76.20015976569827,
				north: 10.543615343893695,
				east: 76.22968552253421,
			},
		});

		const rectangle3 = new window.google.maps.Rectangle({
			strokeColor: "#095ab0",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#095ab0",
			fillOpacity: 0.1,
			map,
			clickable: true,
			bounds: {
				south: 10.512013806076538,
				west: 76.20024674486626,
				north: 10.531422933419412,
				east: 76.21024602007378,
			},
		});

		rectangle.setMap(map);
		rectangle2.setMap(map);
		rectangle3.setMap(map);

		const rectangleCenter2 = rectangle2.getBounds().getCenter();
		const marker1 = new window.google.maps.Marker({
			position: rectangleCenter2,
			label: {
				text: "SECTOR 1",
				color: "#169100",
				fontSize: "20px",
				fontWeight: "bold",
			},
			icon: icon,
			optimized: false,
		});

		marker1.setMap(map);

		const rectangleCenter3 = rectangle3.getBounds().getCenter();
		const marker2 = new window.google.maps.Marker({
			position: rectangleCenter3,
			label: {
				text: "SECTOR 2",
				color: "#095ab0",
				fontSize: "20px",
				fontWeight: "bold",
			},
			icon: icon,
			optimized: false,
		});

		marker2.setMap(map);
	}, []);

	const center = useMemo(() => ({ lat: 10.5115487, lng: 76.1882293 }), []);

	const options = {
		drawingControl: true,
		drawingControlOptions: {
			position: map && window.google.maps.ControlPosition.TOP_CENTER,
			drawingModes: ["polygon", "rectangle", "marker"],
		},
	};

	return (
		<div className="App mt-20">
			{!isLoaded ? (
				<div className="column expand"></div>
			) : (
				<div className="column expand">
					<div className="column" style={{ padding: "15px" }}>
						<p style={{ fontSize: "1.8rem", fontWeight: "800" }}>SchemeGen</p>
						<p
							style={{
								fontSize: "0.8rem",
								fontWeight: "500",
							}}
						>
							THRISSUR CITY POLICE
						</p>
					</div>
					<div className="expand">
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
											array.push({ lat: coord.lat(), lng: coord.lng() });
										});
										console.log(JSON.stringify(array));
									}}
									onOverlayComplete={(e) => {
										if (e.type === "rectangle") {
											console.log(
												JSON.stringify(e.overlay.getBounds().toJSON())
											);
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
					<div className="column" style={{ padding: "15px" }}>

						<SchemeModal />

						{/* Modal Content
							<div className="title">Event Scheme</div>
							<div className="eventDetails">
								<div>Thrissur Pooram</div>
								<div>1 May 2023 - 3 May 2023</div>
							</div>
							<br />
							<div className="title">
								Sectors & Members
								<div className="column">Sector A</div>
								<div className="column">Sector B</div>
								<div className="column">Sector C</div>
							</div>
							<div className="body"></div>
							<div className="footer">
								<button>Download in PDF</button>
								<button>Download in XLSX</button>
							</div> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default Scheme;
