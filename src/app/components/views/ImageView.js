import React from "react";
import { View, Image, Text } from 'react-native';
import ImageCircleView from "../views/ImageCircleView";
import Styles from "../styles/Styles";


const ImageView = (props) => {
    const { image } = props;

    return (
        <View style={Styles.container}>
            <View style={{ height: 400, padding: 15 }}>
                <Image
                    source={{ uri: image.image }}
                    resizeMode={'stretch'}
                    style={{ flex: 1 }}
                />
            </View>
            <View style={Styles.containerImageBottom}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                    <View style={{ width: 60, padding: 5 }}>
                        <ImageCircleView
                            size={60}
                            url={'https://i.imgur.com/mCHMpLT.png?3'}
                        />
                    </View>
                    <View style={{ flex: 1, height: '100%', padding: 5, }}>
                    </View>
                </View>
                <Text numberOfLines={2} style={{ color: 'grey', fontWeight: 'bold' }}>
                    {image.username}
                    <Text style={{ fontWeight: '200' }}>
                        {' \n'}
                        {image.description ? image.description : "No description"}
                    </Text>
                </Text>
            </View>
        </View>
    );
};
export default ImageView;