import { StyleSheet, View } from 'react-native';
import { Principal } from './src/components/Principal';
import { Perfil } from './src/components/Perfil';
import { Music } from './src/components/Music';
import { Sobre } from './src/components/Sobre';
import { Conexao } from './src/components/Conexao';

export default function App() {
  return (

    <View style={styles.containerPrincipal}>
      <Principal />
      <Perfil />
      <Music />
      <Sobre />
      <Conexao />
    </View>

  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: "#23272A",
  }
});
