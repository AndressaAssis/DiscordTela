import { View, Text, Button, StyleSheet } from "react-native";

export const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Andressa Jandre</Text>
      <Text style={styles.text2}>andressaassisj</Text>

      <View style={styles.button}>
        <Button title="Adicionar status" onPress={() => {}} />
        <Button title="Editar Perfil" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#333",
    borderRadius: 15,
    marginBottom: 25,
    justifyContent: "space-around",
    flexDirection: "row",
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
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,  
    marginBottom: 5,  
  },
});
