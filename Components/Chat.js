import React, { useState } from 'react'
import { View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import Avatar from '../Components/Avatar'
import { GiftedChat, Time } from 'react-native-gifted-chat'
import ProfileCard from '../Container/ProfileCard'
import FlatmatesCard from '../Container/FlatmatesCard'
import RoomCard from '../Container/RoomCard'
const Chat = ({
    socket,
    cardSet,
    setChatOpen,
    dimensions

}) => {
    const [activeCard, setActiveCard] = useState()


    const renderCard = (card) => {
        if (card.type == "profile") {
            return (
                <ProfileCard cardItem={{ card: card }} />
            )
        } else if (card.type == "flatmates") {
            return (
                <FlatmatesCard cardItem={{ card: card }} />
            )
        } else if (card.type == "room") {
            return (
                <RoomCard cardItem={{ card: card }} />
            )
        } else {
            Alert.alert("Type not specified")
        }
    }

    return (
        <View
            behavior='padding'
            style={{ overflow: 'hidden', marginTop: 10, marginLeft: 10, borderRadius: 15, height: dimensions.height, width: dimensions.width, position: 'absolute', backgroundColor: STYLES.smallBackgroundColor }}>
            <View style={{ flexDirection: 'row', height: 60, width: '100%', backgroundColor: STYLES.backgroundColor, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => {
                    !activeCard ? setChatOpen({ open: false }) : setActiveCard(null)
                }} style={{ height: 60, width: 60, alignItems: 'center', justifyContent: 'center' }}>
                    <MIcon name={!activeCard ? "arrow-back" : "cancel"} style={{ fontSize: 30 }} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    {cardSet.map((card, key) => {
                        return (
                            <TouchableOpacity onPress={() => setActiveCard(card)} key={key} style={[{ paddingVertical: 5, paddingRight: 5, marginLeft: -10 }]}>
                                <Avatar card={card} _height={50} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={60} style={{ height: dimensions.height - 60 }}>
                {!activeCard ?
                    <GiftedChat onSend={(messages) => {
                        messages[0].to = cardSet[0]._id
                        socket.send(JSON.stringify(messages[0]))
                    }} /> :
                    renderCard(activeCard)
                }
            </KeyboardAvoidingView>
        </View>
    )
}
export default Chat