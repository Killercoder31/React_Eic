import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const SelectImageHandler = () => {
  setImageData('https://pixabay.com/images/search/nature/');
  alert("Changed!")
}

const App = () => {
  const [imageData, setImageData] = useState('');
  
  
  
  return(
    // <View style={styles.container}>
    //   <Text>hello World!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <Button 
        onPress={SelectImageHandler}
        title='Select Image' color="#f194ff"
      />
    
      {/* r{imageData === '' ? <View></View> : <Image source={imageData}></Image>} */}

      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'}}/>

    </View>
  );
}

export default App;