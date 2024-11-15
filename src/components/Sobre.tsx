import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Emoji from "react-native-emoji";

export const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mim</Text>
      <View style={styles.bandeiras}>
        <Emoji name="flag-br" style={styles.emoji} />
        <Emoji name="flag-us" style={styles.emoji} />
      </View>

      <View style={styles.descricao}>
        <Text style={styles.descricaoText}>Desenvolvedora de Software</Text>
        <Icon name="desktop" size={20} color="#f3f3f3" style={styles.icon} />
      </View>

      <Text style={styles.text1}>Membro Discord desde</Text>
      <Text style={styles.text2}>21 de out. de 2023</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#333",
    borderRadius: 15,
    marginBottom: 5,
    justifyContent: "space-around",
    borderWidth: 7,
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
    color: "#fff",
  },
  descricao: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  descricaoText: {
    fontSize: 16,
    color: "#fff",
    marginRight: 7,
    marginBottom: 8,
    
  },
  icon: {
    marginRight: 7,
  },
  text1: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  text2: {
    fontSize: 14,
    color: "#fff",
  },
  bandeiras: {
    flexDirection: "row",
    marginBottom: 10,
  },
  emoji: {
    fontSize: 16,
    marginRight: 5,
  },
});
