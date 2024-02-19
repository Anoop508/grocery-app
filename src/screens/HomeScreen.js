import { View, Text, StyleSheet, Image, Touchable } from 'react-native';
import React, { useState } from 'react';
import Header from '../common/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Home from './tabs/Home';
import Search from './tabs/Search';
import Notification from './tabs/Notification';
import User from './tabs/User';
import Wishlist from './tabs/Wishlist';



const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <View style={styles.container}>
            {selectedTab == 0 ? (
                <Home />
            ) : selectedTab == 1 ? (
                <Search />
            ) : selectedTab == 2 ? (
                <Wishlist />
            ) : selectedTab == 3 ? (
                <Notification />
            ) : (
                <User />
            )}
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.buttomTab} onPress={() => setSelectedTab(0)}>
                    <Image style={styles.bottomTabIcon} source={selectedTab==0?require('../images/home_fill.png'):require('../images/home.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomTab} onPress={() => setSelectedTab(1)}>
                    <Image style={styles.bottomTabIcon} source={require('../images/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomTab} onPress={() => setSelectedTab(2)}>
                    <Image style={styles.bottomTabIcon} source={selectedTab==2?require('../images/wishlist_fill.png'):require('../images/wishlist.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomTab} onPress={() => setSelectedTab(3)}>
                    <Image style={styles.bottomTabIcon} source={selectedTab==3?require('../images/noti_fill.png'):require('../images/noti.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttomTab} onPress={() => setSelectedTab(4)}>
                    <Image style={styles.bottomTabIcon} source={selectedTab==4?require('../images/user.png'):require('../images/user.png')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor:'red'
    },
    buttomTab: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    bottomTabIcon: {
        height: 24,
        width: 24,
    }
})