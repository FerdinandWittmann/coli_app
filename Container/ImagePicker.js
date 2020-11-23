import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import Carousel from 'react-native-snap-carousel'
const ImagePicker = ({
}) => {

    function handleRemovePhoto() {
        console.log("Remove Photo")
    }
    function handleAddPhoto() {
        console.log("Add Photo")
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: "orange"
        }}>
        </View>
    )
}
export default ImagePicker
/*
            <SliderBox
                images={images}
                parentWidth={height}
                sliderBoxHeight={height}
            />
            <View style={[{
                width: width,
                height: height,
            }]}>
                <TouchableOpacity onPress={() => handleRemovePhoto()}>
                    <MIcon name='delete' ></MIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAddPhoto()}>

                    <MIcon name='add-a-photo' ></MIcon>
                </TouchableOpacity>
            </View>
            */