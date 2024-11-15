import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Andressa Jandre</Text>
      <Text style={styles.text2}>andressaassisj</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="comment" size={18} color="#fff" style={styles.icon} />
          <Button color={"#fff"} title="Adicionar status" onPress={() => {}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="pencil" size={18} color="#fff" style={styles.icon} />
          <Button color={"#fff"} title="Editar Perfil" onPress={() => {}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#2C2F33",
    borderRadius: 20,
    marginBottom: 5,
    justifyContent: "space-around",
    borderWidth: 7,
    borderColor: "#23272A",
  },
  text1: {
    fontSize: 18,
    marginBottom: 5,
    color: "#ffffff",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    color: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#496ffa",
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginHorizontal: 3,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
