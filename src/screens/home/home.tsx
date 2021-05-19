import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert, BackHandler, FlatList } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import screens from '../../utils/screens';
import fontFamily from '../../utils/fonts';
import Loader from '../../components/loader';
import { signOutFirebaseUser } from './action';
import { ReducersModal } from '../../utils/modals';
import { vh, normalize, vw } from '../../utils/dimensions';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';
import FloatingAction from '../../components/floatingButton/FloatingAction';
interface Props {
    route: any;
    navigation: any;
}

const newsFeed = [
    { title: 'Our Pradhan Mantri Rashtriya Bal Puraskar 2020 Awardees', image_uri: images.list1 },
    { title: 'National Youth Icon Award 2020', image_uri: images.list3 },
    { title: 'Delhi Public School R K Puram Secures Top Rank', image_uri: images.list4 },
    { title: 'Asia Pacific Linguistics Olympiad', image_uri: images.list2 },
    { title: 'Our Pradhan Mantri Rashtriya Bal Puraskar 2020 Awardees', image_uri: images.list1 },
    { title: 'National Youth Icon Award 2020', image_uri: images.list3 },
    { title: 'Delhi Public School R K Puram Secures Top Rank', image_uri: images.list4 },
    { title: 'Asia Pacific Linguistics Olympiad', image_uri: images.list2 },
]

const HomeScreen = (props: Props) => {

    const dispatch = useDispatch();
    const { commonLoading } = useSelector((state: ReducersModal) => state.globalLoaderReducer);

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity activeOpacity={0.6} style={styles.logoutButton} onPress={handleLogout}>
                    <Image style={styles.rightImage} resizeMode="contain" source={images.exit_icon} />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backButtonClick);
        }
    }, [])

    const handleLogout = async () => {
        dispatch(signOutFirebaseUser(props.navigation));
    };

    const backButtonClick = () => {
        console.log('backButtonClick home')
        if (props.navigation && props.navigation.goBack) {
            Alert.alert("Exit", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "Exit", onPress: () => BackHandler.exitApp() }
            ], { cancelable: true });
            return true;
        }
        return false;
    }

    const createPost = () => {
        props.navigation.navigate(screens.WRITE_POST)
        console.log('createPost');
    }

    const renderNewsFeed = ({ item, index }: any) => {
        return (
            <View style={styles.renderNewsFeedContainer}>
                <Image style={styles.newsImage} resizeMode={'contain'} source={item.image_uri} />
                <Text style={styles.newsTitle}>{item.title}</Text>
            </View>
        )
    }

    return (
        <React.Fragment>
            {
                commonLoading && <Loader isVisible={commonLoading} />
            }
            <View style={styles.container}>
                <ImageBackgroundBlank />
                <FlatList
                    data={newsFeed}
                    keyExtractor={(item: any, index: number) => index.toString()}
                    renderItem={renderNewsFeed}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
                <FloatingAction
                    actions={actions}
                    onPressItem={(name: any) => createPost()}
                />
            </View>
        </React.Fragment>
    )
}

export default HomeScreen;

const actions = [
    {
        text: "",
        icon: images.writePostIcon,
        name: "writePost",
        position: 1,
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(7)
    },
    listContainer: {
        paddingBottom: vh(50),
        paddingTop: vh(10)
    },
    renderNewsFeedContainer: {
        justifyContent: 'center',
        marginBottom: vh(20),
    },
    newsImage: {
        width: '100%',
        height: vh(300),
        backgroundColor: color.lightGreen,
        borderRadius: vw(10),
    },
    newsTitle: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        color: color.endGradientBtn,
        marginTop: vh(10)
    },
    logoutButton: {
        marginEnd: vw(10)
    },
    rightImage: {
        width: vw(20),
        height: vh(20),
        tintColor: color.white
    }
})