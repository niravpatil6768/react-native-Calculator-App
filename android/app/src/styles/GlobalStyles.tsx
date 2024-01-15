import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 80,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnDark: {
        width: 80,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnLight: {
        width: 80,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    btnGrey: {
        width: 80,
        height: 80,
        borderRadius: 24,
        backgroundColor: myColors.btnGrey,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    //keyboard
    row: {
        maxWidth:'100%',
        flexDirection: "row",
    },
    viewButton: {
        position: 'absolute',
        bottom: -820,
        marginLeft: 15
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.grey,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.grey,
        fontWeight: '200',
        alignSelf: 'flex-end',
    },
    


})