import React from 'react'
import { View, Text } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
const CardImageBox = ({
    width,
    height,
    images
}) => {
    return (
        <View>
            <SliderBox
                //dim * 2/3 image size in Cards. (dim)*(3/4) resize for buttons
                parentWidth={width}
                sliderBoxHeight={height}
                images={images.map((_image) => { return (imageServer + _image) })}
                ImageComponentStyle={styles.imageComponent}
            />
        </View>
    )
}
export default CardImageBox