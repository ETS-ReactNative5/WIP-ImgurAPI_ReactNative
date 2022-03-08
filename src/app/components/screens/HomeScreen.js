import React, { Component } from "react";
import {SafeAreaView, FlatList } from "react-native";
import Styles from "../styles/Styles";
import ImageView from "../views/ImageView";
import { getGallery } from "../services/ImgurApi";
import * as SecureStore from "expo-secure-store";


export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gallery: [],
			search: " ",
			sort: "viral",
			name: "",
			user: "",
		};
	}

	async componentDidMount() {
		this.getGalleryItems();
		SecureStore.getItemAsync("user_name").then((usr) => {
			this.state.user = usr;
		});
	}

	getGalleryItems = () => {
		getGallery().then(response => {
			let array = response.data.map(elem => {
				if (elem.images && (
					elem.images[0].type === "image/jpeg" ||
					elem.images[0].type === "image/png")) {
					return {
						id: elem.id,
						image: elem.images[0].link,
						favorite: elem.favorite,
						ups: elem.ups,
						downs: elem.downs,
						title: elem.title,
						vote: elem.vote,
						username: elem.account_url,
						description: elem.images[0].description
					}
				}
			});
			let arrayFiltered = array.filter(function (isUndef) {
				return isUndef !== undefined;
			});
			this.setState({ gallery: arrayFiltered });
		}).catch(error => {
			console.debug(error);
		});
	};

	render() {
		return (
			<SafeAreaView style={Styles.container}>
				{/* <Text>{"Connected as: " + this.state.user}</Text> */}
				<FlatList
					data={this.state.gallery}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => <ImageView image={item} />}
				/>
			</SafeAreaView>
		);
	}
}
