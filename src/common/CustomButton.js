import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import React from 'react';

const CustomButton = ({title, bg, color, onclick}) =>{
    return(
        <TouchableOpacity activeOpacity={1} style={[styles.btn, {backgroundColor:bg}]} onPress={()=>{onclick()}}>
            <Text style={{color:color, fontSize:18, fontWeight:700}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width: Dimensions.get('window').width - 40,
        height:53,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:10
    }
})
export default CustomButton;