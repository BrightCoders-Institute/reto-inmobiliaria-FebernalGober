import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
import Propiedades from '../Propiedades.json'
import styles from "../styles/styles";

const Details = () => {
    const renderDetails = ({ item }) =>(
    <Card
    name= {item.Name}
    Address={item.Details[0].Address}
    bedrooms={item[0].bedrooms}
    bathrooms={item[0].bathrooms}
    surface={item[0].surface}
    rental={item[0].rental}
    grade={item[0].grade}
    />
    )


    return (
        <FlatList
        style={styles.containerPropertyList}
        data={Propiedades.Propiedades}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderDetails}
    />
    );
}

export default Details