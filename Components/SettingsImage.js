import React, { useEffect, useState, useContext } from 'react'
import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker'
import { uploadImage } from '../Api/images'
import { TokenContext } from '../GlobalState/TokenContext'
SettingsImage = ({
    dimensions,
    images,
    addImage,
    removeImage,
    cardItem
}) => {
    const tokenRef = useContext(TokenContext)
    function removeImage() {
        console.log("remove image")
    }

    function _uploadImage(uri, type) {
        let image = {
            uri: uri,
            type: type,
            name: cardItem.name + "/" + cardItem.number.$numberInt,
        }
        uploadImage(tokenRef.current.token, image)
            .then((url) => {

                addImage(url)
            })
    }
    function takePhoto() {
        let options = {
            mediaType: 'photo',
        }
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                return
            }
            if (response.error) {
                Alert.alert("Failed to add the Image")
                return
            }
            if (response.uri) {
                _uploadImage(response.uri)
            }
        })
    }
    function chooseImage() {
        let options = {
            mediaType: 'photo'
        }
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                return
            }
            if (response.error) {
                Alert.alert("Failed to add the Image")
                return
            }
            if (response.uri) {
                _uploadImage(response.uri, response.type)
            }
        })
    }

    function openImagePicker() {
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
                images={images.map((_image) => { return (imageServer + _image) })}
                ImageComponentStyle={styles.imageComponent}
            />
            <View style={[styles.containerButtons, {
                height: (dimensions.height * (3 / 4)) * (2 / 3),
                width: dimensions.width * (1 / 4)
            }]}>
                <TouchableOpacity style={styles.buttons} onPress={() => removeImage()}>
                    <MIcon style={styles.button} name='delete' ></MIcon>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => openImagePicker()}>
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