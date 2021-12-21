import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import normalize from '../../constants/normalize';

import { Rating, RatingProps } from 'react-native-elements';


export default function ProfileButtons({role}) {
    
    if(role==="guest"){
        return(
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
                <TouchableOpacity>
                <AntDesign name="upload" size={35} color="#38486e" />
                </TouchableOpacity>
                
                <TouchableOpacity>
                <AntDesign name="message1" size={35} color="#38486e" />
                </TouchableOpacity>
                
                <TouchableOpacity>
                <AntDesign name="setting" size={35} color="#38486e" />
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return(
            <View style={{flex:1}}>
                
                <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20}}>
                    <TouchableOpacity>
                    <AntDesign name="message1" size={35} color="#38486e" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <AntDesign name="setting" size={35} color="#38486e"/>
                    </TouchableOpacity>
                    </View>
                    <View>
                <Rating style={Styles.ratedesign}
                imageSize={28}
                />
                </View>
            </View>
        )

    }
}
const Styles = StyleSheet.create({
  
    ratedesign:{
        paddingVertical: 10,
        marginTop: 10,
        alignSelf: 'center'
    }
})