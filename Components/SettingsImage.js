import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'
import Notification from '../Container/Notification'
import ImageNotification from '../Components/ImageNotification'
SettingsImage = ({
    dimensions
}) => {
    const [images, setImages] = useState(['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png'])
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
        <View style={[styles.containerImageSettings, { width: dimensions.width, height: dimensions.height / 2 }]}
        >
            <SliderBox
                //dim * 2/3 image size in Cards. (dim)*(3/4) resize for buttons
                parentWidth={dimensions.width * (3 / 4)}
                sliderBoxHeight={(dimensions.height * (3 / 4)) * (2 / 3)}
                images={images}
                ImageComponentStyle={styles.imageComponent}
            />
            <View style={[styles.containerButtons, {
                height: (dimensions.height * (3 / 4)) * (2 / 3),
                width: dimensions.width * (1 / 4)
            }]}>
                <TouchableOpacity style={styles.buttons} onPress={() => removeImage()}>
                    <MIcon style={styles.button} name='delete' ></MIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => addImage()}>
                    <MIcon style={styles.button} name='add-a-photo' ></MIcon>
                </TouchableOpacity>

            </View>
        </View>
    )
}

var styles = StyleSheet.create({
    containerImageSettings: {
        flexDirection: 'row',
        backgroundColor: 'white',
        transform: [{
            rotateY: '180deg'
        }]
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