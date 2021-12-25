import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import normalize from '../../constants/normalize';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import styles from 'react-native-material-dropdown/src/components/dropdown/styles';

export default function ProfileButtons({role, authorisedUserDetails, isRatingVisible, setIsRatingVisible}) {
    const [img, setImg] = useState(null);
    const [ratingValue, setRatingValue] = useState(0);

    const chooseFile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(async image => {
            console.log(image);
            setImg(image.path)
            let imageName = image.path.substring(image.path.lastIndexOf('/')+1);
            try {
                await storage()
                        .ref('Images')
                        .child(imageName)
                        .putFile(image.path)
                        .then((res) => {
                            storage()
                            .ref('Images')
                            .child(imageName)
                            .getDownloadURL()
                            .then((imgUrl) => {
                                console.log('1')
                                firestore()
                                .collection('Photos')
                                .doc()
                                .set({
                                    img: imgUrl,
                                    uid: authorisedUserDetails.uid, 
                                });
                            })
                        })
            } catch(error) {
                console.log(error)
            }
        });
    }

<<<<<<< HEAD
    if(role === 'Photographer'){
=======
export default function ProfileButtons({role, navigation }) {
    
    if(role==="Photographer"){
>>>>>>> a8d435e4a9e4ef6432807bd8a7ad371fb0207983
        return(
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                <TouchableOpacity onPress={chooseFile}>
                <AntDesign name="upload" size={35} color="#38486e" />
                </TouchableOpacity>
                
                {/* <TouchableOpacity>
                <AntDesign name="message1" size={35} color="#38486e" />
                </TouchableOpacity> */}
                
<<<<<<< HEAD
                <TouchableOpacity>
                    <AntDesign name="setting" size={35} color="#38486e" />
=======
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <AntDesign name="setting" size={35} color="#38486e" />
>>>>>>> a8d435e4a9e4ef6432807bd8a7ad371fb0207983
                </TouchableOpacity>
            </View>
        )
    } else if(role === "Guest" ) {
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20}}>
                    <TouchableOpacity>
                        <AntDesign name="message1" size={35} color="#38486e" />
                    </TouchableOpacity>
<<<<<<< HEAD
                    <TouchableOpacity onPress={() => setIsRatingVisible(!isRatingVisible)}>
                        <AntDesign name="star" size={35} color="#38486e"/>
=======
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <AntDesign name="setting" size={35} color="#38486e"/>
>>>>>>> a8d435e4a9e4ef6432807bd8a7ad371fb0207983
                    </TouchableOpacity>
                </View>
            </View>
        )
    } 
}
const Styles = StyleSheet.create({
  
    
})