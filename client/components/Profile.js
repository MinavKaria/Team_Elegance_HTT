import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const Profile = () => {
    const [messages, setMessages] = useState([]);

    // Function to handle sending messages
    const onSend = (newMessages = []) => {
        setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
            <View style={styles.chatContainer}>
                <GiftedChat
                    messages={messages}
                    onSend={(newMessages) => onSend(newMessages)}
                    user={{
                        _id: 1, // User's ID
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    chatContainer: {
        flex: 1,
        width: '100%',
    },
});

export default Profile;
