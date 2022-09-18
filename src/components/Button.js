import { StyleSheet, TouchableOpacity, Text } from "react-native";


export default function AppButton (props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 10,
        backgroundColor: "#040404",
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    appButtonText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});