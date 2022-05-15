import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ selectedNumber }) {
  const init = generateRandomBetween(minBoundary, maxBoundary, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(init);

  function nextGuessHandler(direction) {
    if (
      (direction && currentGuess < selectedNumber) ||
      (!direction && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie", "You know this is wrong..,", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction) {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuessNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newGuessNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        <View style={styles.buttons}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, true)}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, false)}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <View> Log Rounds</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  buttons: {
    flexDirection: "row",
  },
});

export default GameScreen;
