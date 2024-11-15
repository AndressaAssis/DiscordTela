import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Music = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMusic}>
        <View style={styles.textContainerIcon}>
          <Icon name="spotify" size={20} color="#1DB954" style={styles.icon} />
          <Text style={styles.text1}>Ouvindo Spotify</Text>
        </View>

        <Image
          style={styles.music}
          source={require("../../assets/music.jpeg")}
        />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text2}>COWBELL WARRIOR!</Text>
        <Text style={styles.text2}>por SXMPRA</Text>
        <Text style={styles.text2}>do álbum COWBELL WARRIOR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#2C2F33",
    borderRadius: 15,
    marginBottom: 5,
    flexDirection: "row",
    borderWidth: 7,
    borderColor: "#23272A",
  },
  containerMusic: {
    flexDirection: "column",
    marginRight: 4,
  },
  textContainerIcon: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 10,
  },
  text1: {
    fontSize: 15,
    marginBottom: 5,
    color: "#ffffff",
  },
  icon: {
    marginLeft: 10,
  },
  music: {
    width: 90,
    height: 90,
  },
  containerText: {
    justifyContent: "center",
    marginTop: 20,
  },
  text2: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 2,
  },
});
