import { useMemo } from "react";
import "./EventTable.css";

const tableData = [
	{ id: 1, sector: 1, si: 16, ish: 13, cpo: 7, icpo: 4 },
	{ id: 2, sector: 2, si: 20, ish: 10, cpo: 19, icpo: 5 },
	{ id: 3, sector: 3, si: 1, ish: 2, cpo: 17, icpo: 6 },
	{ id: 4, sector: 4, si: 7, ish: 5, cpo: 20, icpo: 7 },
	{ id: 5, sector: 5, si: 14, ish: 19, cpo: 14, icpo: 12 },
	{ id: 6, sector: 6, si: 19, ish: 7, cpo: 6, icpo: 5 },
	{ id: 7, sector: 7, si: 8, ish: 6, cpo: 4, icpo: 19 },
	{ id: 8, sector: 8, si: 18, ish: 11, cpo: 7, icpo: 14 },
	{ id: 9, sector: 9, si: 19, ish: 10, cpo: 7, icpo: 10 },
	{ id: 10, sector: 10, si: 18, ish: 19, cpo: 4, icpo: 16 },
];

const EventTable = () => {
	const data = useMemo(() => tableData, []);

	return (
		<div className="table-container">
			<table className="custom-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Sector</th>
						<th>SI</th>
						<th>ISH</th>
						<th>CPO</th>
						<th>ICPO</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.sector}</td>
							<td>{item.si}</td>
							<td>{item.ish}</td>
							<td>{item.cpo}</td>
							<td>{item.icpo}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EventTable;
