import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
	body: {
		paddingTop: 35,
		paddingBottom: 65,
		paddingHorizontal: 35,
	},
	title: {
		fontSize: 24,
		textAlign: "center",
	},
	text: {
		margin: 12,
		fontSize: 14,
		textAlign: "justify",
		fontFamily: "Times-Roman",
	},
	image: {
		marginVertical: 15,
		marginHorizontal: 100,
	},
	header: {
		fontSize: 12,
		marginBottom: 20,
		textAlign: "center",
		color: "grey",
	},
	pageNumber: {
		position: "absolute",
		fontSize: 12,
		bottom: 30,
		left: 0,
		right: 0,
		textAlign: "center",
		color: "grey",
	},
});

const Report = ({ data }) => {
	<Document>
		<Page style={styles.body}>
			<Text style={styles.header}>
				SECURITY ARRANGEMENTS AT FUNCTION PLACE AT THEKKINKADU MAIDAN (STUDENTS
				CORNER), THRISSUR ON 16.12.2022
			</Text>
			<Text style={styles.Text}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, maxime
				repudiandae. A ipsa, quae aut magnam impedit nulla, obcaecati veniam
				quis dolores commodi architecto qui officiis recusandae eum modi
				ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
				ex, labore dignissimos illo repellat atque vero nisi laudantium quia
				iure error, magni amet animi voluptas suscipit fugit corrupti quis
				reprehenderit! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Cumque similique voluptates ex beatae quam consectetur asperiores iste
				quaerat aut hic accusamus fugit reprehenderit ducimus quibusdam
				repudiandae id, tempore nemo quidem!
			</Text>
			<Text style={styles.text}>{data}</Text>;
			<Text
				style={styles.pageNumber}
				render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
			/>
		</Page>
	</Document>;
};
export default Report;
