import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import MenuIcon from '../images/menu.png'

const { width, height } = Dimensions.get('window')

const Header = ({title,
    imageName,
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon,
    isCart}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.btn}>
                <Image source={rightIcon} style={[styles.icon,{width:40, height:40}]} />
            </TouchableOpacity>

            

        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: width,
        height: 65,
        backgroundColor: '#0786DAFD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#fff',
      },
      title:{
        color:'#fff',
        fontSize:20
      }

})
