import { View,Text, StyleSheet } from "react-native";
import React from "react";
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

export default Icon = ( {property}) => {
    return (
        <view style={Styles.row}>
        <Text style={styles.iconStyle}><Icon3 name="bed-king-outline" size={20}/> {property.room }</Text>
            <Text style={styles.iconStyle}><Icon3 name="shower" size={20}/> {property.bathroom}</Text>
            <Text style={styles.iconStyle}><Icon3 name="vector-square" size={20}/> {property.area} ft²</Text>
        </view>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    
    iconStyle: {
        width: 70,
        color: '0, 0, 0',
        fontWeight: 'bold',
        marginBottom: 10,
    },
  });