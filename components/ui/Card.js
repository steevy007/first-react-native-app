import { StyleSheet , View} from "react-native"
import Colors from "../../constants/colors"
const  Card=({children})=> {
  return (
    <View style={styles.inputContainer}>
        {children}
    </View>
  )
}

export default Card
const styles=StyleSheet.create({
    
  inputContainer: {
    width:'90%',
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
})