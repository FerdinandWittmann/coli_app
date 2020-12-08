import React, { useState, useContext, useRef, useEffect } from 'react'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { getMatchesAdvertiser } from '../../Api/matches'
import { TokenContext } from '../../GlobalState/TokenContext'
import LoadingScreen from '../../Components/LoadingScreen'
import globalStyles from '../../Styles/globalStyles'
import Avatar from '../../Components/Avatar'
import Chat from '../../Components/Chat'

const AdvChatScreen = ({
    navigation
}) => {
    const [chatOpen, setChatOpen] = useState({ open: false })
    const tokenRef = useContext(TokenContext)
    const socketRef = useRef(null)
    const [matches, setMatches] = useState([])
    const [dimensions, setDimensions] = useState()
    useEffect(() => {
        getMatchesAdvertiser(tokenRef.current.token)
            .then((body) => {
                setMatches(body.cardsets)
            })
        socketRef.current = new WebSocket(socket, tokenRef.current.token)
        socketRef.current.onmessage = (message) => {
            console.log(message)
        };

        return () => socketRef.current.close();
    }, [])

    const _setChatOpen = (value) => {
        setChatOpen(value)
    }

    const avatarW = 60
    if (!dimensions) {
        return (
            <View style={{ padding: 10, flex: 1 }}>
                <View
                    onLayout={(dim) => {
                        setDimensions(dim.nativeEvent.layout)
                    }}
                    style={{ flex: 1 }}>
                    <LoadingScreen></LoadingScreen>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1, resizeMode: 'stretch', padding: 10 }} source={require('../../Resources/BackgroundImages/2.jpg')}>
                <ScrollView style={{ height: dimensions.height, width: dimensions.width, flex: 1, borderRadius: 15, backgroundColor: STYLES.smallBackgroundColor }}>
                    {matches.map((cardSet, key) => {
                        let profileCard = cardSet.cardset[0]
                        return (
                            <TouchableOpacity
                                onPress={() => setChatOpen({ open: true, cardSet: cardSet.cardset })}
                                key={key}
                                style={{ padding: 10, width: '100%', height: avatarW + 20, flexDirection: 'row', borderBottomWidth: 2, borderColor: STYLES.backgroundColor }}>
                                <Avatar card={profileCard} _height={60} />
                                <View style={{ height: '100%', width: dimensions.width - avatarW, paddingLeft: 10 }}>
                                    {profileCard.name ? <Text style={globalStyles.descText}>{profileCard.name}</Text> : null}
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                </ScrollView>
                {chatOpen.open ?
                    <Chat dimensions={dimensions} socket={socketRef.current} setChatOpen={_setChatOpen} cardSet={chatOpen.cardSet} /> : null}
            </ImageBackground>
        </View>
    )
}
export default AdvChatScreen