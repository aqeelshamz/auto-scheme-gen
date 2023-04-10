import { PDFDownloadLink } from "@react-pdf/renderer";
import Report from "./Report";

const PDFLink = ({ data }) => {
	return (
		<div>
			<PDFDownloadLink document={<Report data={data} />} fileName="FORM">
				{({ loading }) =>
					loading ? (
						<button>Loading document...</button>
					) : (
						<button>Download</button>
					)
				}
			</PDFDownloadLink>
		</div>
	);
};
export default PDFLink;
