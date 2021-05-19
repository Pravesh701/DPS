import React from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';

//Custom Imports
import color from '../../utils/color';
import images from '../../utils/images';
import fontFamily from '../../utils/fonts';
import { normalize, vh, vw } from '../../utils/dimensions';
import ImageBackgroundBlank from '../../components/imageBackgroundBlank';

interface Props {
    route: any;
    navigation: any;
}

const newsFeed = [
    { title: 'Our Pradhan Mantri Rashtriya Bal Puraskar 2020 Awardees', image_uri: images.list1 },
    { title: 'National Youth Icon Award 2020', image_uri: images.list3 },
    { title: 'Delhi Public School R K Puram Secures Top Rank', image_uri: images.list4 },
    { title: 'Asia Pacific Linguistics Olympiad', image_uri: images.list2 },
]

const WinsScreen = (props: Props) => {
    const renderNewsFeed = ({ item, index }: any) => {
        return (
            <View style={styles.renderNewsFeedContainer}>
                <Image style={styles.newsImage} resizeMode={'contain'} source={item.image_uri} />
                <Text style={styles.newsTitle}>{item.title}</Text>
            </View>
        )
    }

    return (
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
        </View>
    )
}

export default WinsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: vw(16)
    },
    listContainer: {
        paddingBottom: vh(50)
    },
    renderNewsFeedContainer: {
        justifyContent: 'center',
        marginBottom: vh(20)
    },
    newsImage: {
        width: '100%',
        height: vh(300),
        backgroundColor: color.lightGreen,
        borderRadius: vw(10)
    },
    newsTitle: {
        fontSize: normalize(16),
        fontFamily: fontFamily.muliSemiBold,
        color: color.endGradientBtn,
        marginTop: vh(10)
    },
})