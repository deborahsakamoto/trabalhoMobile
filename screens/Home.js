import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Deborah Sakamoto Echague</Text>
        <Text style={styles.subtitle}>RA: 2022102840</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Calculadora"
          onPress={() => navigation.navigate('Calculadora')}
          style={styles.button}
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Tabuada"
          onPress={() => navigation.navigate('Tabuada')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcbdb',
  },
  header: {
    alignItems: 'flex-start', // Alinhar no canto superior esquerdo
    paddingHorizontal: 20, // Adicionar espaçamento lateral
    paddingTop: 20, // Adicionar espaçamento superior
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff007f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#f079a1',
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1, // Ocupar o espaço restante verticalmente
    alignItems: 'center', // Centralizar horizontalmente os botões
    justifyContent: 'center', // Centralizar verticalmente os botões
  },
  button: {
    width: 250, // Aumentar a largura dos botões
    height: 60, // Aumentar a altura dos botões
    backgroundColor: '#ff007f',
    borderRadius: 30, // Aumentar o raio da borda para arredondar mais
    marginBottom: 20, // Adicionar espaçamento inferior
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonSpacing: {
    height: 10, // Adicionar espaçamento entre os botões
  },
});

export default Home;
