import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Header from '../common/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../common/CustomButton';
import { useDispatch } from 'react-redux';
import { addItemToWishList } from '../redux/slices/WishlistSlice';
import { addItemToCart } from '../redux/slices/CartSlice';


const ProductDetail = () =>{
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const [qty, setQty] = useState(0)

    return(
        <View style={styles.container}>
            <Header isCart={true} leftIcon={require('../images/back.png')} onClickLeftIcon={()=>{navigation.goBack()}} title="Product Details" rightIcon={require('../images/cart.png')}/>
            <Image source={{uri:  route.params.data.image}} style={styles.productBanner} />
            <Text style={[styles.title,{fontWeight:700}]}>{route.params.data.title}</Text>
            <Text style={styles.desc}>{route.params.data.description}</Text>
            <View style={{flexDirection:"row", marginHorizontal:20, marginTop:10}}>
                <Text style={{color:'#000', fontSize:20, fontWeight:700}}>Price:</Text>
                <Text style={{color:'green', fontSize:20, fontWeight:'700'}}>{` $${route.params.data.price}`}</Text>
                {/* <TouchableOpacity style={styles.btn} onPress={()=>{
                    if(qty>1){
                        setQty(qty - 1)
                    }
                }}>
                    <Text style={{fontWeight:'bold', fontSize:16}} >-</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:16}}>{qty}</Text>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                    setQty(qty + 1);
                }}>
                    <Text style={{fontWeight:'bold', fontSize:16}}>+</Text>
                </TouchableOpacity> */}
                
            </View>
            <TouchableOpacity style={styles.wishlistbtn} onPress={()=>{
                
                dispatch(addItemToWishList(route.params.data))
            }}>
                <Image style={{width:25, height:25}} source={require('../images/wishlist.png')} />
            </TouchableOpacity>
            <CustomButton bg="orange" title="Add Cart" color='#fff' onclick={()=>{
                console.log("hi",route.params.data)
                dispatch(addItemToCart(route.params.data))
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    productBanner:{
        width:"100%",
        height:300,
        resizeMode:'center'
    },
    title:{
        marginHorizontal:20,
        marginTop:20,
        fontSize:20,
        color:'black'
    },
    desc:{
        marginHorizontal:20,
        marginTop:10
    },
    wishlistbtn:{
        position: 'absolute',
        top:100,
        right:24,
        backgroundColor:'#E2DFDF',
        width:50,
        height:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    btn:{
        paddingHorizontal:18,
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:25
    }
})

export default ProductDetail;