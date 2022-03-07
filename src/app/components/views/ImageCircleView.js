import React, { Component } from "react";
import {TouchableOpacity, Image} from 'react-native';
import Styles from "../styles/Styles";

export default class ImageCircleView extends Component {
    constructor(props) {
        super(props);

      }
    render() {
        return (
            <TouchableOpacity style={Styles.imageCircleContainer}>
                <Image
                    source={{uri: this.props.url}}
                    style={[Styles.imageCircleContainer, {width: this.props.width, height: this.props.height}]}
                    resizeMode="cover"
                />
            </TouchableOpacity>
        )
    }

}