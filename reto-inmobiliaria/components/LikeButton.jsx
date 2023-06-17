import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Like = () => {
    const [like, setlike] = useState(false);

    const togglelike = () => {
        setlike(!like);
    };
    const buttonStyle = like ? styles.buttonlike : styles.buttonNormal;

    return(
        <View style={styles.like}>
            <TouchableOpacity onPress={togglelike} style={buttonStyle}>
            <Text>{like ? <FontAwesomeIcon icon={faHeart} size={15} color="white"/> : <FontAwesomeIcon icon={faHeart} size={15} style={styles.icon}/>}</Text>
            </TouchableOpacity>
        </View>
);
}

const styles = StyleSheet.create({
    like: {
      backgroundColor: '#00B074',
      width: 30,
      height: 30,
      borderRadius: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
        color: '#fff',
    buttonNormal: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 60,
        width: 30,
        height: 30,
        alignItems: 'center',
        },
    buttonlike: {
        backgroundColor: '#00b074',
        padding: 10,
        borderRadius: 5,
        borderRadius: 60,
        width: 30,
        height: 30,
        alignItems: 'center',
        },
    }
})

export default Like;