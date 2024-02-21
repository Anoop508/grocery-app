import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import MenuIcon from '../images/menu.png'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window')

const Header = ({ title,
    imageName,
    leftIcon,
    rightIcon,
    onClickLeftIcon,
    onClickRightIcon,
    isCart }) => {
    const navigation = useNavigation()
    const cartData = useSelector(state => state.cartlist)
    // console.log(cartData.data.length)

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                onClickLeftIcon();
            }}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            {!isCart && (<View></View>)}
            {
                isCart && (<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Cart')}>
                    <Image source={rightIcon} style={[styles.icon, { width: 40, height: 40 }]} />

                    <View
                        style={{
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: '#000' }}>{cartData.data.length}</Text>
                    </View>
                </TouchableOpacity>)
            }



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
        alignItems: 'center',
        paddingHorizontal: 10
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
    title: {
        color: '#fff',
        fontSize: 20
    }

})
