import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const LikeDislikeButton = ({ onPress, iconName, iconColor, initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handlePress = () => {
        setCount(count + 1);
        onPress();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <FontAwesome5 name={iconName} size={20} color={iconColor} />
            <Text>{count}</Text>
        </TouchableOpacity>
    );
};

export default LikeDislikeButton;
