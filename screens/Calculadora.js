import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Calculadora({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [secondInputValue, setSecondInputValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleInputValue = (value) => {
    setInputValue(inputValue + value);
  };

  const handleComma = (value) => {
    const comma = inputValue.split("");
    const hasComma = comma.filter((char) => char === ".");
    hasComma[0] === "." ? null : setInputValue(inputValue + value);
  };

  const handleEraseDigit = () => {
    const value = inputValue.split("");
    value.pop();
    const correctedValue = value.join("");
    setInputValue(correctedValue);
  };

  const handleMathOperation = (value) => {
    setOperation(value);
    setSecondInputValue(inputValue);
    setInputValue("");
  };

  const handleReset = () => {
    setInputValue("");
    setSecondInputValue("");
    setOperation("");
  };

  const handleResult = () => {
    const firstValue = parseFloat(secondInputValue);
    const secondValue = parseFloat(inputValue);
    let result;

    switch (operation) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "x":
        result = firstValue * secondValue;
        break;
      case "/":
        result = firstValue / secondValue;
        break;
      case "%":
        result = (firstValue / 100) * secondValue;
        break;
      case "^":
        result = Math.pow(firstValue, secondValue);
        break;
      default:
        result = "Erro";
    }

    setInputValue(result.toString());
    setSecondInputValue("");
    setOperation("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{secondInputValue}</Text>
        <View style={styles.inputRow}>
          <Text style={styles.inputText}>{inputValue}</Text>
          <Text style={styles.operationText}>{operation}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleReset()}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("%")}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("^")}
          >
            <Text style={styles.buttonText}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("x")}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleMathOperation("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleInputValue("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleComma(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEraseDigit()}
          >
            <Text style={styles.buttonText}>&lt;&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleResult()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => navigation.navigate("Tabuada")}
      >
        <Text style={styles.linkText}>Ir para a Tabuada</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  operationText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "flex-end",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  linkButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  linkText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
