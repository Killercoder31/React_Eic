import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  return(
    <View style={styles.container}>
      <Text>hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;