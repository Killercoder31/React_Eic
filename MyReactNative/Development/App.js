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


const App = () => {
  const [imageData, setImageData] = useState(require('./../Images/download.jpg'));
  
  
  
  return(
    // <View style={styles.container}>
    //   <Text>hello World!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      
        <Button 
          onPress={()=>{setImageData(require('./../Images/download1.jpg'))}}
          title='Select Image' color="#f194ff"
        />
      
        <Image
          source={imageData}
          onError={(e) => {
            console.log(e.nativeEvent.error);
          }}
          // onLoad={() => {
          //   console.log('load');
          // }}
          // onLoadEnd={() => {
          //   console.log('load-end');
          // }}
          // onLoadStart={() => {
          //   console.log('load-start');
          // }}
          />
      
        <Button
          onPress={()=>{setImageData(require('./../Images/download.jpg'))}}
          title='Measure' color="#f194ff"
        />
      
    </View>
  );
}

export default App;