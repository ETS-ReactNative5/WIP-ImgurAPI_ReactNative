import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export default StyleSheet.create({
	imageCircleContainer: {
		aspectRatio: 1,
		borderRadius: 50,
		width: 50,
		height: 50,
	},
	container: {
		flex: 1,
		margin: 5,
		backgroundColor: "seagreen",
		color: "dodgerblue",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	containerUploader: {
		flex: 1,
		margin: 5,
		backgroundColor: "seagreen",
		color: "dodgerblue",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		justifyContent: 'center',
	},
	containerConnect: {
		alignItems: "center",
		width: "100%",
		height: "100%",
		paddingTop: 50,
		backgroundColor: "seagreen",
	},
	tinyLogo: {
		width: 300,
		height: 70,
		resizeMode: "stretch",
	},
	appButtonContainer: {
		elevation: 8,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
		paddingTop: 20,
		paddingBottom: 20,
	},
	containerHeader: {
		paddingTop: 20,
		backgroundColor: "orange",
	},
	containerBottomImage: {
		flex: 1,
		margin: 10,
	},
});
