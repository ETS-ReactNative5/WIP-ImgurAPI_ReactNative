import React, { Component } from "react";
import { Text, View, SafeAreaView, Image, Pressable } from "react-native";
import Styles from "../styles/Styles";

export default class ConnectScreen extends Component {

	constructor(props) {
		super(props);
	}

	onSubmitCredentials(navigate) {
		navigate("WebAuth");
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<SafeAreaView style={Styles.container}>
				<View style={Styles.containerLogo}>
					<Image
						source={require("../../../../assets/imgur_logo_trans.png")}
						style={Styles.tinyLogo}
					/>
				</View>
				<View style={Styles.containerButtonConnect}>
					<Pressable
						style={Styles.appButtonContainer}
						onPress={() => this.onSubmitCredentials(navigate)}
					>
						<Text style={Styles.appButtonText}>Connect</Text>
					</Pressable>
				</View>
			</SafeAreaView>
		);
	}
}
