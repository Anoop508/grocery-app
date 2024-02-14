import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')

const Header = (title, leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn}>

            </TouchableOpacity>

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 60,
        backgroundColor: '#0786DAFD',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btn:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
})
