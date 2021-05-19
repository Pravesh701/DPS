import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import { vh, vw, normalize } from '../../utils/dimensions';

interface Props {
    route: any;
    navigation: any;
}

const memberList = [
    {name: 'Sarthak Mangla', position: 'Lead'},
    {name: 'Shshwat Mudra', position: 'Student'},
    {name: 'Ramesh Mangla', position: 'Student'},
    {name: 'Kratika Singh', position: 'Student'},
    {name: 'Aditya Gupta', position: 'Teacher'},
    {name: 'Rohit Mangla', position: 'Student'},
    {name: 'Rakul Singh', position: 'Student'},
    {name: 'Preet Singh', position: 'Teacher'},
    {name: 'Mohan Singh', position: 'Student'},
    {name: 'Gauri Singh', position: 'Teacher'},
    {name: 'Akriti Singh', position: 'Student'},
]

const MembersList = (props: Props) => {

    const renderListContainer = ({ index, item }: any) => {
        return (
           <View style = {styles.listContainer}>
               <Image style = {styles.profileImage} source = {images.inactiveProfile} />
               <View style = {styles.nameContainer}>
                   <Text style = {styles.nameStyle}>{item.name}</Text>
                   <Text style = {styles.positionStyle}>{item.position}</Text>
               </View>
           </View>
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
            />
        </View>
    )
}

export default MembersList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: vw(16)
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
    profileImage:{
        width: vw(50),
        height: vw(50)
    },
    nameContainer:{
        marginStart: vw(10)
    },
    nameStyle:{
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        color: color.black,
    },
    positionStyle:{
        fontSize: normalize(16),
        fontFamily: fontFamily.muliRegular,
        color: 'gray',
        marginTop: vh(6)
    }
})
