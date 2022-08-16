// App.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }
  grantStorage = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
    title: "App Camera Permission",
    message:"App needs access to your camera ",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
    })
  grantCamera = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,{
    title: "App Camera Permission",
    message:"App needs access to your camera ",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
  })
  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }
  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>
          <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Image Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});