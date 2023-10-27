import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Tabuada() {
  const [inputValue, setInputValue] = useState("0");
  const [tabuada, setTabuada] = useState([]);
  const navigation = useNavigation();

  const calcularTabuada = (value) => {
    const numero = parseFloat(value.replace(",", "."));
    const tabuadaArray = [];

    for (let i = 1; i <= 9; i++) {
      const resultado = numero * i;
      const resultadoFormatado = Number.isInteger(resultado) ? resultado.toFixed(0) : resultado.toFixed(2);
      const resultadoComVirgula = resultadoFormatado.replace(".", ",");
      tabuadaArray.push(`${numero} x ${i} = ${resultadoComVirgula}`);
    }

    setTabuada(tabuadaArray);
  };

  useEffect(() => {
    // Ao iniciar, calcular e mostrar a tabuada do número 0
    calcularTabuada("0");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Tabuada</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um número decimal (use vírgula)"
        keyboardType="numeric"
        onChangeText={(text) => {
          setInputValue(text);
          calcularTabuada(text);
        }}
        value={inputValue}
      />
      <View>
        <Text style={styles.tabuadaTitle}>Tabuada de {inputValue}:</Text>
        {tabuada.map((item, index) => (
          <Text key={index} style={styles.tabuadaItem}>
            {item}
          </Text>
        ))}
      </View>
      <Button title="Ir para Calculadora" onPress={() => navigation.navigate("Calculadora")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    marginBottom: 10,
  },
  tabuadaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  tabuadaItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});
