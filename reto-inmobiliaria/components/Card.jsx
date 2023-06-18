// Importar las dependencias necesarias
import React from 'react';
import { View, Text, Image } from 'react-native';
import Proptypes from 'prop-types';
import image from '../Propiedades.json'
import styles from '../styles/styles';
import { faLocationDot, faBed, faBath, faMaximize } from '@fortawesome/free-solid-svg-icons';


// Definir el componente
function Card ({
    name,
    Address,
    bedrooms,
    bathrooms,
    surface,
    rental,
    grade,
  })
  {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
          style={styles.image}
          source={{uri: image }}/>
        </View>
        <View styles={styles.info}>
          <Text style={[styles.title, styles.bold]}>{name}</Text>
          <View style={styles.row}>
          <FontAwesomeIcon Viewstyle={[styles.icontex]} icon={faLocationDot} text={Address} textStyles={[styles]}/>
          <FontAwesomeIcon Viewstyle={[styles.icontex]} icon={faBed} text={bedrooms} textStyles={[styles]}/>
          <FontAwesomeIcon Viewstyle={[styles.icontex]} icon={faBath} text={bathrooms} textStyles={[styles]}/>
          <FontAwesomeIcon Viewstyle={[styles.icontex]} icon={faMaximize} text={surface} textStyles={[styles]}/>
          </View>

        </View>
      </View>
    </View>
  );
};

// Definir los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

// Exportar el componente
export default Card;
