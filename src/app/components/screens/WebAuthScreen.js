import React, { Component } from "react";
import { WebView } from "react-native-webview";
import { Modal } from "react-native";
import { API_URL, API_CLIENT_ID } from "@env";
import * as SecureStore from "expo-secure-store";

export default class WebAuthScreen extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		modalVisible: true,
		authentificated: false
	};

	hide() {
		this.setState({ modalVisible: false });
	}

	async onNavigationStateChange(webViewState) {
		if (this.state.authentificated === true) {
			this.hide();
			navigate("Home");
			return;
		}
		const { navigate } = this.props.navigation;
		if (webViewState.url !== undefined) {
			url = webViewState.url.replace("#", "&");
			let params = {};
			const regex = /([^&=]+)=([^&]*)/g;
			let m;

			while ((m = regex.exec(url))) {
				params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}
			if (
				params.access_token !== undefined &&
				params.account_username !== undefined
			) {
				this.setState({ authentificated: true });
				await SecureStore.setItemAsync("bearer_token", params.access_token);
				await SecureStore.setItemAsync("user_name", params.account_username);
				this.hide();
				navigate("Home");
			}
		}
	}

	render() {
		return (
			<Modal
				animationType={"slide"}
				visible={this.state.modalVisible}
				onRequestClose={this.hide.bind(this)}
				transparent
			>
				<WebView
					ref="webview"
					source={{
						uri:
							API_URL +
							"oauth2/authorize?client_id=" +
							API_CLIENT_ID +
							"&response_type=token"
					}}
					onNavigationStateChange={this.onNavigationStateChange.bind(this)}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={false}
				/>
			</Modal>
		);
	}
}
