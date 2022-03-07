import React, {useState} from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import Styles from "../styles/Styles";
import ImageView from "../views/ImageView";
import {getGallerySearchResult } from "../services/ImgurApi";

export default function SearchScreen() {

	const [input, setInput] = useState("");
	const [gallery, setGallery] = useState([]);
	const [time, setTime] = useState("all");
	const [sort, setSort] = useState("time");
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");



	function searchGallery(input) {
		getGalleryItems(input);
	}

	async function getGalleryItems(input) {
		getGallerySearchResult(sort, time, 0, input).then(response => {
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
			setGallery(arrayFiltered);
		}).catch(error => {
			console.debug(error);
		});
	}
	return (
		<SafeAreaView style={Styles.container}>
			<SearchBar
				placeholder="Search Here..."
				value={input}
				onChangeText={(input) => setInput(input)}
				onSubmitEditing={() => searchGallery(input)}
				autoCorrect={false}
			/>
			<Text>{name}</Text>
			<FlatList
				maxToRenderPerBatch={50}
				data={gallery}
				keyExtractor={item => item.id.toString()}
				renderItem={({ item }) => <ImageView image={item} />}
			/>
		</SafeAreaView>
	);
}
