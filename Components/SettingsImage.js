import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'
import Notification from '../Container/Notification'
import ImageNotification from '../Components/ImageNotification'
SettingsImage = ({
}) => {
    const [images, setImages] = useState(['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png'])
    const [dimensions, setDimensions] = useState({ width: '100%', height: global.dimensions.height * 2 / 3 * 5 / 7, set: false })
    function removeImage() {
        console.log("remove image")
    }

    /*function takeImage() {
        if (setShowImageNotification == true) {
            setShowImageNotification(false)
        } else {
            setShowImageNotification(true)
        }

    }
    function showImagePicker() {
        if (setShowImageNotification) {
            return (
                <Notification
                    setShow={setShowImageNotification}
                >
                </Notification>
            )
        }
    }*/
    function takePhoto() {
        let options = {
            mediaType: 'photo',
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.uri) {

            }
        })
    }
    function chooseImage() {
        let options = {
            mediaType: 'photo'
        }
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.uri) {
            }
        })
    }

    function addImage() {
        //style property for iOs possible
        Alert.alert(
            "Image Picker",
            "Select Image",
            [{
                text: "CANCEL",
            }, {
                text: "Choose Image...",
                onPress: () => { chooseImage() },
            }, {
                text: "Take Photo...",
                onPress: () => { takePhoto() },
            }
            ]

        )
    }
    return (
        <View onLayout={(dim) => setDimensions({ ...dim.nativeEvent.layout, set: true })} style={{ width: dimensions.width, height: dimensions.height }}
        >
            {dimensions.set ? <View style={styles.containerImageSettings}>
                <SliderBox
                    //dim * 2/3 image size in Cards. (dim)*(3/4) resize for buttons
                    parentWidth={dimensions.width * 3 / 4}
                    sliderBoxHeight={dimensions.height}
                    images={images}
                    ImageComponentStyle={styles.imageComponent}
                />
                <View style={[styles.containerButtons, {
                    height: dimensions.height,
                }]}>
                    <TouchableOpacity style={styles.buttons} onPress={() => removeImage()}>
                        <MIcon style={styles.button} name='delete' ></MIcon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => addImage()}>
                        <MIcon style={styles.button} name='add-a-photo' ></MIcon>
                    </TouchableOpacity>

                </View>
            </View> : null}
        </View>
    )
}

var styles = StyleSheet.create({
    containerImageSettings: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    containerSliderBox: {
        flex: 3,
    },
    containerButtons: {
        flex: 1,
        backgroundColor: 'white'
    },
    buttons: {
        flex: 1,
        margin: 10,
        backgroundColor: 'grey',
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        fontSize: 30,
    },
    imageComponent: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }

})
export default SettingsImage 