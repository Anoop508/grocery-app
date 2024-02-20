import {View, Text, StyleSheet, Image, TextInput, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';


const Search = ()=>{
    const products = useSelector(state => state);
    // console.log(JSON.stringify(product.product.data))
    const navigation = useNavigation()
    const [search, setSearch] = useState('');
    const [oldData, setOldData] = useState(products.product.data)
    const [searchList, setSearchList] = useState(oldData);

    const filterData = (txt) =>{
        let newData = oldData.filter(item=>{
            return item.title.toLowerCase().match(txt.toLowerCase())
        })
        // console.log(newData)
        setSearchList(newData)
    }

    return(
        <View style={styles.container}>
            <Header title="Search Item"/>
            <View style={styles.searchView}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity>
                <Image source={require('../../images/search.png')} style= {styles.icon} />
            </TouchableOpacity>
            <TextInput value={search} style={styles.searchText} placeholder='search item here ...' onChangeText={txt =>{setSearch(txt)
                filterData(txt)
            }}/>
            </View>
            {
                search !== '' &&(
                <TouchableOpacity
                    onPress={()=>{
                        filterData('')
                        setSearch('')
                    }}
                >
                    <Image source={require('../../images/clear.png')} style= {[styles.icon,  {width: 16, height: 16}]} />
                </TouchableOpacity>)
            }
            </View>
            <View style={{marginTop:10}}>       
            <FlatList 
            data={searchList}
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


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    searchView:{
        width:"90%",
        height:53,
        borderRadius:25,
        borderWidth:.5,
        alignSelf:'center',
        marginTop:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20
    },
    icon:{
        width:24,
        height:24,
        resizeMode:'center'
    },
    searchText:{
        width:"80%",
        marginLeft:10
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

export default Search;