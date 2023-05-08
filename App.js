import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreens from "./screens/StartGameScreens";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading'
export default function App() {
  const [usernumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver]=useState(true)
  const [guessRounds,setGuessRounds]=useState(0)
  const[fontsLoaded]= useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    <AppLoading/>
  }

  const startNewGameHandler=()=>{
    setUserNumber(null)
    setGuessRounds(0)
    //setGameIsOver(true)
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  };

  const gameHoverHandler=(numberOfRounds)=>{
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  let screen = <StartGameScreens onPickedNumber={pickedNumberHandler} />;

  if (usernumber) {
    screen = <GameScreen userNumber={usernumber}  gameHover={gameHoverHandler}/>;
  }

  if(gameIsOver && usernumber){
    screen =<GameOver userNumber={usernumber} roundsNumber={guessRounds}  onStartNewGame={startNewGameHandler} />
  }

 

  return (
    <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImageStyle}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageStyle: {
    opacity: 0.15,
  },
});
