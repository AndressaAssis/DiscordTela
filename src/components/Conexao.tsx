import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Para o ícone do GitHub
import Icon2 from "react-native-vector-icons/FontAwesome5";

export const Conexao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Conexões</Text>

      <View style={styles.containerText2}>
        <Icon name="github" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.text2}>AndressaAssis</Text>
        <Icon2
          name="check-circle"
          size={20}
          color="#757975"
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#2C2F33",
    borderRadius: 15,
    marginBottom: 5,
    justifyContent: "space-around",
    borderWidth: 7,
    borderColor: "#23272A",
  },
  text1: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 15,
  },
  text2: {
    color: "#fff",
    fontSize: 18,
    marginRight: 5,
  },
  containerText2: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});
