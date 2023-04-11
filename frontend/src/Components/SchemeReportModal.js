import "./Modal.css";

function SchemaReportModal({ closeModal }) {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={() => closeModal(false)}> X </button>
				</div>
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
				</div>
			</div>
		</div>
	);
}
export default SchemaReportModal;
