import { StyleSheet, NativeModules, Platform } from "react-native";

const {statusBarManager} = NativeModules;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        flex: 1,
        padding: 11,
        margin: 4,
        width: 340,
        marginTop: 30,
        marginBotton: -10,
        backgroundColor: '#F5FDFF',
    },
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? statusBarManager.HEIGHT : 0,

    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      image: {
        width: 105,
        height: 100,
        borderRadius: 10
      },
      infoContainer: {
        flex: 1,
        marginLeft: 16
      },
      name: {
        fontFamily: 'poppins-regular',
        fontWeight: '500',
        fontSize: 17,
        color: "black"
      },
      AddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16
      },
      infoText: {
        marginBottom: 5,
        marginLeft: 6,
        fontWeight: 'bold',
        fontFamily: 'poppins-regular',
        color: "black",
        fontSize: 15
      },
      rental: {
        left: 0,
        color: "black",
        fontSize: 17,
        fontFamily: 'poppins-regular',
        fontWeight: 'bold',
        marginBottom: 8
      },
      ubi: {
        fontFamily: 'poppins-regular',
        fontSize: 13,
        marginLeft: 4,
        fontWeight: '400',
        color: "#737373"
      },
      mirrorIcon: {
        transform: [{ scaleX: -1 }],
        marginBottom: 4
      },
      mirrorIconDos: {
        transform: [{ scaleY: -1 }],
        marginBottom: 4
      },
      iconHeartContainer: {
        flexDirection: 'row',
        marginTop: 85
      },
      circle: {
        width: 28,
        height: 28,
        borderRadius: 15,
        backgroundColor: "#00B074",
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2
      },
      button: {
        padding: 0
      },
      containerPropertyLis: {
        flex: 1,
        padding: 16
      },
      starContainer: {
        position: 'absolute',
        top: '60%',
        right: '25%',
        backgroundColor: '#F5FDFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 35,
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 8
      },
    
      StarText: {
        fontSize: 13,
        marginLeft: 3,
        color: '#7e6901',
        fontFamily: 'poppins-regular',
        fontWeight: 'bold'
      },
});

export default styles;

