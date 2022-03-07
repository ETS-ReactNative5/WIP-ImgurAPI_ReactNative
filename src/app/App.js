import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConnectScreen from "./components/screens/ConnectScreen";
import WebAuthScreen from "./components/screens/WebAuthScreen";
import HomeScreen from "./components/screens/HomeScreen";
import SearchScreen from "./components/screens/SearchScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createBottomTabNavigator();

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							if (route.name === 'Home') {
								iconName = focused
									? 'ios-home-sharp'
									: 'ios-home';
							} else if (route.name === 'Connect') {
								iconName = focused
									? 'ios-list-sharp'
									: 'ios-list';
							} else if (route.name === 'Search') {
								iconName = focused
									? 'ios-search-sharp'
									: 'ios-search';
							}
							return <Ionicons name={iconName} size={size} color={color} />;
						},
					})}
					tabBarOptions={{
						activeTintColor: 'seagreen',
						inactiveTintColor: 'gray',
					}}
				>
					<Stack.Screen
						name="Connect"
						component={ConnectScreen}
						options={{ title: "Connect" }} />
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ title: "Home" }} />
					<Stack.Screen
						name="Search"
						component={SearchScreen}
						options={{ title: "Search" }} />
					<Stack.Screen
						name="WebAuth"
						component={WebAuthScreen}
						options={{ title: "" }}
						listeners={{ tabPress: e => { e.preventDefault(); } }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
