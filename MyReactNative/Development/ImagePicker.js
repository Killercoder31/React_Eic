import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';


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

grantStorage = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
    title: "App Camera Permission",
    message:"App needs access to your camera ",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
});
grantCamera = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,{
    title: "App Camera Permission",
    message:"App needs access to your camera ",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
});

cameraLaunch = (setImageData) => {
    let options = {
        storageOptions: {
            skipBackup: true,
        path: 'images',
    },
        cameraType : 'front',
        maxWidth : 500,
        maxHeight : 500,
    };
    launchCamera(options).then((res) => {
        if(res.assets)
            setImageData(res.assets[0].uri)
    })

};
imageGalleryLaunch = (setImageData) => {
    let options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        maxHeight : 500,
        maxWidth : 500,

    };
    launchImageLibrary(options).then((res) => {
        if(res.assets)
            setImageData(res.assets[0].uri)
    })
        
}  

const HomePage = () => {
    const [imageData, setImageData] = useState('')
    
    const temp = require('./../Images/download.jpg')
    return (
        <View style={styles.container}>
          <View style={styles.container}>

            <Image
                // defaultSource={require('./../Images/download.jpg')}
                onError={(e) => console.log(e.nativeEvent.error)}
                // onLoad={()=> console.log(imageData)}
                source={imageData===''?temp:{uri : imageData}}
                style={{ width: 100, height: 100 }}
            />
            
            <TouchableOpacity onPress={()=>{
                cameraLaunch(setImageData)
            }} style={styles.button}  >
                <Text style={styles.buttonText}>Launch Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                imageGalleryLaunch(setImageData)
            }} style={styles.button}  >
                <Text style={styles.buttonText}>Launch Image Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

export default HomePage;