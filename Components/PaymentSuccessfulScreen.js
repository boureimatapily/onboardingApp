import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Entypo} from '@expo/vector-icons'

export class PaymentSuccessfulScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text  style={styles.title}> PAYMENT SUCCESSFUL </Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.contentText}>
                        Velit ex est velit aute reprehenderit proident irure duis sunt minim sit et.
                        Reprehenderit cupidatat id proident fugiat aliquip. Enim aute officia officia 
                        ex.Non est sunt pariatur excepteur dolore in esse proident. Non consectetur 
                        ad nulla ut incididunt non anim. Adipisicing nulla reprehenderit excepteur ullamco voluptate.
                     </Text>
                </View>

                <View style={styles.ImageContainer}>
                    <Image source={require('../assets/successfull.png')} style={styles.image} />
                </View>

                <TouchableOpacity style={styles.NextButtonContainer}>
                    <Text style={styles.NextButton}>Get Started</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Entypo name="progress-full" size={40} style={styles.ProgressIcon} />
                    <Text style={styles.Previous}>Previous</Text>
                </View>
                
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 50,
    },
    titleContainer:{
        marginVertical:10
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
        
    },
    content:{
        marginBottom:10
    },
    contentText:{
        textAlign:"justify"
    },
    ImageContainer:{},
    image:{
        width:250,
        height:250
    },
    NextButtonContainer:{
        backgroundColor:"#b978eb",
        width:150,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        alignSelf:"center"

    },
    NextButton:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:50, 
    },
    ProgressIcon:{
        marginLeft:100,
        color:"#b978eb",
        
    },

    Previous:{
        color:"#c6becc",
        position:"absolute",
       left:0,
    },
})

export default PaymentSuccessfulScreen
