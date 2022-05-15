import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import NumberContainer from "../components/Game/NumberContainer";
import Title from "../components/UI/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ selectedNumber }) {
  const init = generateRandomBetween(1, 100, selectedNumber);
  const [currentGuess, setCurrentGuess] = useState(init);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower</Text>
        {/* + - */}
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
});

export default GameScreen;
