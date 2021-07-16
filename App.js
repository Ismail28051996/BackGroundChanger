import React, {useState} from 'react';

import {
  Text, View, StyleSheet, TouchableOpacity, StatusBar,
} from 'react-native';

const App = ()=>{
  const [randomColor, setRandomColor] = useState('rgb(32, 10, 126)');
  //const [randomColor2, setRandomColor2] = useState('rgb(32, 10, 126)');

  const changeBG = () => {
    let color= "rgb("+
   Math.floor(Math.random()*256) +
      "," +
      Math.floor(Math.random()*256) +
      "," +
      Math.floor(Math.random()*256) + 
      ")";

      setRandomColor(color);
  }
 

  return (
    <>
    <View style={[styles.container, {backgroundColor: randomColor}]}>
      <TouchableOpacity onPress={changeBG}> 
        <Text style={styles.text}>Tap Me</Text>
      </TouchableOpacity>
     </View>
    </>
  );
};

export default App;

const styles= StyleSheet.create({
  container:{
    flex: 1, 
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    fontSize: 40,
    fontStyle: 'normal',
    backgroundColor: "white",
    marginTop: 5,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "black",
    borderRadius: 10,
    textTransform: "uppercase",
  }
});





