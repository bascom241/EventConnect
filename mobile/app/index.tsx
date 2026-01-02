import { Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Logo from "../assets/images/Logo.png"
import { ActivityIndicator } from "react-native";
export default function Index() {


  const router = useRouter();


  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/(onboarding)")
    }, 7000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>

      {/* Spacer */}
      <View />

      <Image source={Logo} />


      <ActivityIndicator size="large" color="#000" />


    </View>
  )


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical:40
  }
})
