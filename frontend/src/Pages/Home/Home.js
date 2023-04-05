import "./Home.css";

function Home() {
	return (
		<div>
			<button id="button" onClick={() => (window.location.href = "/Scheme")}>
				New Scheme
			</button>
		</div>
	);
}

export default Home;
