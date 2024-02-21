import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';

const WishList = ()=>{
    const navigation = useNavigation();
    const wishListproduct = useSelector(state=>state.wishlist)
    // console.log(JSON.stringify(wishListproduct.wishlist))
    const [wishlist, setWishlist] = useState(wishListproduct.data);

    return(
        <View style={styles.container}>
            <Header title='WishList' rightIcon={require('../../images/cart.png')} isCart={true} />
            <FlatList 
            data={wishlist}
            renderItem={({item, index})=>{
                return(
                    <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={()=>{
                        navigation.navigate('ProductDetails',{data:item})
                    }}>
                        <Image source={{uri: item.image}} style={styles.itemImage} />
                        <View>
                            <Text style={styles.title}>{item.title.length>25 ? item.title.substring(0,25) + '...' : item.title}</Text>
                            <Text style={styles.description}>{item.description.length>40 ? item.description.substring(0,40) + '...' : item.description}</Text>
                            <Text style={styles.price}>{`$ ${item.price}`}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    productItem: {
        width: Dimensions.get('window').width,
        height: 100,
        marginTop: 10,
        backgroundColor: '#fff',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    itemImage:{
        width:100,
        height:100,
        resizeMode:'contain'
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20
    },
    description:{
        marginLeft:22
    },
    price:{
        fontSize:18,
        color:'green',
        fontWeight:'900',
        marginLeft:20
    }
})

export default WishList;