import { Image, View, StyleSheet } from "react-native";

export const Principal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.logo} source={require("../../assets/foto.jpg")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.3,
    backgroundColor: "#c7f6e8"
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    marginLeft: 40,
    marginTop: 100,
  },
});
