import { useMemo } from "react";
import mData from "../../utils/MOCK_DATA.json";
import {
	useReactTable,
	flexRender,
	getCoreRowModel,
} from "@tanstack/react-table";

const EventTable = () => {
	const data = useMemo(() => mData, []);

	/** @type import ('@tanstack/react-table').ColumnDef<any> */
	const columns = [
		{
			header: "ID",
			accessorKey: "id",
		},
		{
			header: "Sector",
			accessorKey: "sector",
		},
		{
			header: "SI",
			accessorKey: "si",
		},
		{
			header: "ISH",
			accessorKey: "ish",
		},
		{
			header: "CPO",
			accessorKey: "cpo",
		},
		{
			header: "ICPO",
			accessorKey: "icpo",
		},
	];

	const table = useReactTable({ data, columns, getCoreRowModel });

	return (
		<div>
			<table>
				<thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<th key={header.id}>
									{flexRender(
										header.column.columnDef.header,
										header.getContext()
									)}
								</th>
							))}
						</tr>
					))}
				</thead>

				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCell().map((cell) => (
								<td key={cell.id}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext()
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default EventTable;
