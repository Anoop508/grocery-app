import {View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../redux/slices/ProductSlice';



const Home = ()=>{
    const navigation = useNavigation();
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>
                {
                    setProducts(json)
                    dispatch(addProducts(json))
                })
    }
    return(
        <View style={styles.container}>
             <Header
                leftIcon={require('../../images/menu.png')}
                rightIcon={require('../../images/cart.png')}
                title='Grocery App'
                onClickLeftIcon={() => {
                    navigation.openDrawer()
                  }}
            />
           <FlatList 
            data={products}
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

export default Home;