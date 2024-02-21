import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Dimensions } from "react-native"
import Header from "../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { addItemToCart, reduceItemToCart, removeItemToCart } from "../redux/slices/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const cartlist = useSelector(state => state.cartlist);
    const [cartData, setCartData] = useState([])

    useEffect(()=>{
        setCartData(cartlist.data)
    },[cartlist])

    return (
        <View style={styles.style}>
            <Header title={'Cart List'} rightIcon={require('../images/cart.png')} isCart={true} />
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity activeOpacity={1} style={styles.productItem} onPress={() => {
                            navigation.navigate('ProductDetails', { data: item })
                        }}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View>
                                <Text style={styles.title}>{item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}</Text>
                                <Text style={styles.description}>{item.description.length > 40 ? item.description.substring(0, 40) + '...' : item.description}</Text>
                                <View style={styles.qtyView}>
                                    <Text style={styles.price}>{`$ ${item.price}`}</Text>
                                    <TouchableOpacity style={styles.btn} onPress={()=>{
                                        if(item.qty>1){
                                            dispatch(reduceItemToCart(item))
                                        }else{
                                            dispatch(removeItemToCart(item))
                                        }
                                    }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }} >-</Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.qty}</Text>
                                    <TouchableOpacity style={styles.btn} onPress={() => { 
                                        dispatch(addItemToCart(item))
                                    }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>+</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productItem: {
        width: Dimensions.get('window').width,
        height: 100,
        marginTop: 10,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    description: {
        marginLeft: 22
    },
    price: {
        fontSize: 18,
        color: 'green',
        fontWeight: '900',
        marginLeft: 20
    },
    qtyView:{
        flex:1,
        flexDirection:'row',
        marginTop:10
    },  
    btn:{
        width:30,
        height:30,
        paddingHorizontal:10,
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:25
    }
})
export default Cart;