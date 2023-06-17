import react from "react";
import { View, Text, Image } from "react-native";
import proptypes from 'prop-types'
import { IconContext } from "react-icons";

function Card ({
    name,
    Address,
    bedrooms,
    surface,
    rental,

}) {
    return (
        <view style={Styles.cardContainer}>
            <view style={styles.infoContainer}>
                <view style={styles.imageContainer}>
                    
                </view>
            </view>
        </view>
    )
}