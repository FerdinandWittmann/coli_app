import { Dimensions } from 'react-native'
global.server = "http://192.168.1.170:8080/"
global.dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}
global.styles = {
    backgroundColor: '#024dc4',
    headerTextColor: '#FFFFFF',
    headerBackgroundColor: '#ffffff',
    textColor: '#2667ff',
    largeGap: 10,
    smallGap: 5,
    largeRadius: 20,
    smallRadius: 5,
    headerFontSize: 15,
    textFontSize: 8,
}