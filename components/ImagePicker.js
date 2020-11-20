import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import SliderBox from 'react-native-image-slider-box'
const ImagePicker = ({
    images,
    height,
    width
}) => {

    function handleRemovePhoto() {
        console.log("Remove Photo")
    }
    function handleAddPhoto() {
        console.log("Add Photo")
    }
    return (
        <View style={[{
            height: height,
            width: width,
        }]
        }>
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
        </View>
    )
}
export default ImagePicker