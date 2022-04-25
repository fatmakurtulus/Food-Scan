import React from 'react';
import { View, Text, Image,Dimensions ,StyleSheet} from 'react-native';

const {width,height}= Dimensions.get('window');

const DetailsCard=({})=>{
    return(
        <View style={styles.cardView}>
            <Image style={styles.image} />
            <Text style={styles.food_title}>title</Text>
            <Text style={styles.labelTags}>gluten-free</Text>
            <Text style={styles.icerik}>ingredients:
            "Noodle: rice, water. seasoning packet: peanut, sugar, hydrolyzed soy protein, green onion, corn maltodextrin, spice (including paprika), citric acid, sea salt, extractives of paprika (color), silicon dioxide (added to make free flowing), yeast extract."
</Text>
        </View>
    );
}
export default DetailsCard


export const styles= StyleSheet.create({
    food_title:{
        width: width,
        color:'black',
        marginHorizontal:width*0.05,
        marginVertical:width*0.03,
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        width:width,
        height:height/6,
        marginLeft:width*0.05,
        marginRight:width*0.05,
        marginVertical:height*0.02
 
    },
    labelTags:{
        marginHorizontal:width*0.05,
        marginBottom: width*0.0,
        fontSize:15,
        color:'red'
 
 
    },
    icerik:{
     marginVertical:width*0.05,
     marginHorizontal:width*0.02,
     color:'pink',
     fontSize:18
 
 
    },
    cardView:{
        backgroundColor:'white',
        margin:10,
        borderRadius:width*0.05,
        shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:1
    }

});