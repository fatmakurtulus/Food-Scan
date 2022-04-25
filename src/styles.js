import{StyleSheet, TextInput,Dimensions} from 'react-native';

const {width,height}= Dimensions.get('window');
export const styles= StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontSize:36,
        marginBottom:16
    },
    textInput:{
        marginTop:10,
        padding:15,
        width:width - 40,
        fontSize:12,
        backgroundColor:'white'
    },
    buton:{
        color:'#fff',
        fontSize:12,
        backgroundColor:'#ff655b',
        width:width - 40,
        padding:15,
        borderRadius:4,
        marginTop:10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        color: 'blue',
        fontSize: 20,
        
    },
    buttonSignup: {
        fontSize: 12
    },
    scan: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },

      food_title:{
        width: width,
        color:'black',
        marginHorizontal:width*0.05,
        marginVertical:width*0.03,
        fontSize:20,
        fontWeight:'bold'
    },
    image:{
        width:145,
        height:200,
        marginLeft:width*0.01,
        marginRight:width*0.05,
        marginVertical:height*0.02
 
    },
    labelTags:{
        marginHorizontal:width*0.05,
        marginBottom: width*0.0,
        fontSize:18,
        color:'green'
 
 
    },
    icerik:{
     marginVertical:width*0.05,
     marginHorizontal:width*0.02,
     color:'gray',
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