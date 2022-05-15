import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      {/* Guess */}
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
