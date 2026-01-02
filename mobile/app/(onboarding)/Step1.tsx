import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import bg from "../../assets/images/bg.png"
import vr1 from "../../assets/images/v1r.png"
const Step1 = () => {
    return (
        <View style={styles.container}>

            <View style={styles.imageWrapper}>
                <Image source={bg} style={styles.bg} />
                <Image source={vr1} style={styles.image} />
            </View>

            <View style={styles.view2}>
                <Text style={styles.text2}>Grap all events now only </Text>
                <Text style={styles.text2}>in your hands</Text>
                <Text style={styles.text3}>Lorem ipsum dolor sit amet, consectetur </Text>
                <Text style={styles.text3}>adipiscing elit, sed do eiusmod tempor.</Text>

            </View>

            <View>

            </View>

            <View style={styles.view3}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Click Me</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        paddingVertical: 60

    },
    imageWrapper: {
        width: 300,
        height: 305,
        position: "relative",

    },
    bg: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    image: {
        position: "absolute",
        top: -50,
        left: -100,
        width: 500,
        height: 500,
        resizeMode: "contain",
    },

    view2: {
        flexDirection: "column",
        gap: 5
    },
    text2: {
        color: "#73138C",
        fontSize: 24,
        letterSpacing: 1,
        fontWeight: "bold",
        textAlign: "center"
    },
    text3: {
        textAlign: "center"
    },

    view3: {
        width: "100%",
        paddingHorizontal: 20
    }, 

    button: {
        backgroundColor: "#73138C",   // your purple color
        paddingVertical: 20,          // vertical padding
        paddingHorizontal: 25,        // horizontal padding
        borderRadius: 25,             // rounded corners
        alignItems: "center",         // center text horizontally
        justifyContent: "center",     // center text vertically
        shadowColor: "#000",          // optional shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,    
                   // shadow for Android
    },
    text: {
        color: "#fff",                // white text
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default Step1;
