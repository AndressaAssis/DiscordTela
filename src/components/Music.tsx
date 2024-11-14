import { View, Text, Image, StyleSheet } from "react-native";

export const Music = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Ouvindo Spotify</Text>  
      <Image style={styles.music} source={require("../../assets/music.jpeg")} />

      <Text style={styles.text2}>COWBELL WARRIOR!</Text>
      <Text style={styles.text2}>por SXMPRA</Text>
      <Text style={styles.text2}>por álbum COWBELL WARRIOR</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#333",
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: "row",
  },
  text1: {
    fontSize: 15,
    marginBottom: 5,
    color: "#ffffff",
  },
  music: {
    width: 90,
    height: 100,

    marginBottom: 15,
  },
  text2: {
    fontSize: 15,
    color: "#ffffff",
  }
});
