import { Image, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Principal = () => {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Image style={styles.logo} source={require("../../assets/foto.jpg")} />
        <View style={styles.disponivel}>
          <Icon name="circle" size={20} color="green" />
        </View>
        </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.7,
    backgroundColor: "#7cafa0",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    backgroundColor: "#23272A",
    borderWidth: 6,
    borderColor: "#23272A",
    marginLeft: 33,
    marginTop: 96,
  },
  disponivel: {
    position: "absolute",
    bottom: -50,
    width: 50,
    left: 98,
    borderRadius: 50,
    padding: 5,
  }
});
