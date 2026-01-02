import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import bgImage from "../../assets/images/ScreenOne.jpg"
import { useRouter } from "expo-router";
export default function OnboardingScreen() {
  const router = useRouter()

  useEffect(() => {

    const timer = setTimeout(() => {
          router.push("/(onboarding)/Step1")
    }, 3000)


    return () => clearTimeout(timer)
  }, [])
  return (

    <ImageBackground
      source={bgImage}
      style={styles.image}


    >

      <View style={styles.contentWrapper}>
        <View />

        <View style={styles.content}>
          <Text style={styles.text}>Weclome to  </Text>
          <Text style={styles.text}>Ease event! 👋</Text>
          <Text style={styles.text2}>The best social event discovering and online ticketing application in this century.</Text>
        </View>
      </View>

    </ImageBackground>


  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  }
  ,
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: "center",
    paddingVertical: 60
  },
  content: {
    flexDirection: "column",
    gap: 5,
    color: "white",
    justifyContent: "center",
    alignItems: "center",

  },
  text2: {
    color: "white",
    textAlign: "center"
  }


});
