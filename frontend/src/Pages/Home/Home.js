import "./Home.css";

function Home() {
	return (
		<div>
			{/* <div className="column" style={{ paddingBottom: "20px" }}>
				<p style={{ fontSize: "2rem", fontWeight: "800" }}>SchemeGen</p>
				<p
					style={{
						fontSize: "0.8rem",
						fontWeight: "500",
					}}
				>
					THRISSUR CITY POLICE
				</p>
			</div> */}
			<h1>Home</h1>
			<button>New scheme</button>
			<div className="scheme-list">
				<div className="scheme-thumbnail">
					<img src="https://placehold.it/200x200" alt="Scheme 1" />
					<h2>Thrissur Pooram</h2>
				</div>
				<div className="scheme-thumbnail">
					<img src="https://placehold.it/200x200" alt="Scheme 2" />
					<h2>GECT Dyuthi</h2>
				</div>
				<div className="scheme-thumbnail">
					<img src="https://placehold.it/200x200" alt="Scheme 3" />
					<h2>CM Visit</h2>
				</div>
			</div>
		</div>
	);
}

export default Home;
