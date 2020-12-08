import React, { useEffect, useContext, useRef, useState } from 'react'
import { KeyboardAvoidingView, TouchableOpacity, View, Text, ImageBackground, Button, Alert, ScrollView, Image } from 'react-native'
import { getMatchesApplicant } from '../../Api/matches'
import { TokenContext } from '../../GlobalState/TokenContext'
import LoadingScreen from '../../Components/LoadingScreen'
import globalStyles from '../../Styles/globalStyles'
import { GiftedChat } from 'react-native-gifted-chat'
import Avatar from '../../Components/Avatar'
import Chat from '../../Components/Chat'
import MIcon from 'react-native-vector-icons/MaterialIcons'
const AppChatScreen = ({
    navigation
}) => {
    const [chatOpen, setChatOpen] = useState({ open: false })
    const tokenRef = useContext(TokenContext)
    const socketRef = useRef(null)
    const [matches, setMatches] = useState([])
    const [dimensions, setDimensions] = useState()
    useEffect(() => {
        getMatchesApplicant(tokenRef.current.token)
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
                        let roomCard = cardSet.cardset[0]
                        return (
                            <TouchableOpacity
                                onPress={() => setChatOpen({ open: true, cardSet: cardSet.cardset })}
                                key={key}
                                style={{ padding: 10, width: '100%', height: avatarW + 20, flexDirection: 'row', borderBottomWidth: 2, borderColor: STYLES.backgroundColor }}>
                                <Avatar card={roomCard} _height={60} />
                                <View style={{ height: '100%', width: dimensions.width - avatarW, paddingLeft: 10 }}>
                                    {roomCard.address ? <Text style={globalStyles.descText}>{roomCard.address.streetname + " " + roomCard.address.streetnumber.$numberInt}</Text> : null}
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
export default AppChatScreen
/*
                    <View
                        behavior='padding'
                        style={{ overflow: 'hidden', marginTop: 10, marginLeft: 10, borderRadius: 15, height: dimensions.height, width: dimensions.width, position: 'absolute', backgroundColor: 'black' }}>
                        <View style={{ flexDirection: 'row', height: 60, width: '100%', backgroundColor: STYLES.backgroundColor, justifyContent: 'space-between' }}>
                            <TouchableOpacity onPress={() => setChatOpen({ open: false })} style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center' }}>
                                <MIcon name="arrow-back" style={{ fontSize: 30 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                {chatOpen.cardSet.map((card, key) => {
                                    return (
                                        <TouchableOpacity key={key} style={[{ paddingVertical: 5, paddingRight: 5, marginLeft: -10 }]}>
                                            {createAvatar(card, 50)}
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                        <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={60} style={{ height: dimensions.height - 80 }}>
                            <GiftedChat onSend={(messages) => {
                            }} />
                        </KeyboardAvoidingView>
                    </View> : null}
                    */