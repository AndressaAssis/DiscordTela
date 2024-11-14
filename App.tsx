import { StyleSheet, View } from 'react-native';
import { Principal } from './src/components/Principal';
import { Perfil } from './src/components/Perfil';
import { Music } from './src/components/Music';

export default function App() {
  return (

    <View style={styles.container}>
      <Principal />
      <Perfil />
      <Music />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
