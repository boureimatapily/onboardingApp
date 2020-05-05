import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Entypo} from '@expo/vector-icons'

export class AddToCartScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text  style={styles.title}> ADD TO CART </Text>
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
                    <Image source={require('../../assets/add.png')} style={styles.image} />
                </View>

                <TouchableOpacity style={styles.NextButtonContainer}>
                    <Text style={styles.NextButton}>Next</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Entypo name="progress-two" size={40} style={styles.ProgressIcon} />
                    <Text style={styles.Skip}>Skip</Text>
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
        alignSelf:"center",
        marginTop:20

    },
    NextButton:{
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:40
        
    },
    ProgressIcon:{
        marginLeft:100,
        color:"#b978eb",
        
    },
    Skip:{
        position:"absolute",
        right:0,
        color:"#c6becc",
    },
    Previous:{
        color:"#c6becc",
        position:"absolute",
       left:0,
    },
})

export default AddToCartScreen
