import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import { normalize, vh, vw } from '../../utils/dimensions';
import Strings from '../../utils/strings';

interface Props {
    route: any;
    navigation: any;
}

const memberList = [
    { eventName: 'Trip to Dharmashala', date: '6-7 Jan', totalParticipant: 8, imageUri: images.dharmashala_icon },
    { eventName: 'Trip to Bali', date: '12-15 May', totalParticipant: 200, imageUri: images.vacation_bali_ic },
    { eventName: 'Trip to Manli', date: '5-7 Jun', totalParticipant: 100, imageUri: images.heaven },
    { eventName: 'Three Ediot', date: '15 August', totalParticipant: 20, imageUri: images.movie_ticket },
]

const ScheduleScreen = (props: Props) => {
    const renderListContainer = ({ index, item }: any) => {
        return (
            <TouchableOpacity activeOpacity = {0.5} style={styles.listContainer}>
                <Image resizeMode={'contain'} style={styles.profileImage} source={item.imageUri} />
                <View style={styles.nameContainer}>
                    <Text numberOfLines = {1} style={styles.nameStyle}>{item.eventName}</Text>
                    <View style={styles.dateMainContainer}>
                        <View style={styles.timerContainer}>
                            <Image resizeMode={'contain'} style={styles.timerImage} source={images.timer_icon} />
                            <Text style={styles.positionStyle}>{item.date}</Text>
                        </View>
                        <View style={[styles.timerContainer, {marginStart: vw(12)}]}>
                            <Image resizeMode={'contain'} style={styles.timerImage} source={images.placeholder_timer_icon} />
                            <Text style={styles.positionStyle}>{item.totalParticipant} {Strings.people}</Text>
                        </View>
                    </View>
                </View>
                <Image resizeMode = {'contain'} style = {styles.rightArrow} source = {images.arrow_right_gray_icon} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={memberList}
                renderItem={renderListContainer}
                keyExtractor={(item: any, index: any) => index.toString()}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle = {styles.contentContainerStyle}
            />
        </View>
    )
}

export default ScheduleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(10)
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.cloudBlue,
        marginBottom: vh(20),
        paddingHorizontal: vw(16),
        paddingVertical: vh(12),
        borderRadius: vw(8)
    },
    profileImage: {
        width: vw(50),
        height: vw(50)
    },
    nameContainer: {
        marginStart: vw(10)
    },
    nameStyle: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        color: color.black,
    },
    positionStyle: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliRegular,
        color: 'gray',
        marginStart: vw(10)
    },
    dateMainContainer: {
        flexDirection: 'row',
        marginTop: vh(6)
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timerImage: {
        width: vw(15),
        height: vw(15)
    },
    rightArrow:{
        width: vw(10),
        height: vw(20),
        position: 'absolute',
        zIndex: 1,
        end: vw(16)
    },
    contentContainerStyle:{
        paddingTop: vh(10)
    }
})