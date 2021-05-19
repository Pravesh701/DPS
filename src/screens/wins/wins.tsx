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
    { title: 'National Inter DPS Swimming Open Girls Championship 2019', image_uri: images.list5 },
    { title: 'Junior National Taekwondo Championship 2019', image_uri: images.list6 },
    { title: 'Toronto Open Taekwondo Championships', image_uri: images.list7 },
    { title: 'CBSE Table Tennis Championship 2019', image_uri: images.list8 },
    { title: 'National Inter DPS Swimming Open Girls Championship 2019', image_uri: images.list5 },
    { title: 'Junior National Taekwondo Championship 2019', image_uri: images.list6 },
    { title: 'Toronto Open Taekwondo Championships', image_uri: images.list7 },
    { title: 'CBSE Table Tennis Championship 2019', image_uri: images.list8 },
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
        paddingHorizontal: vw(10)
    },
    listContainer: {
        paddingBottom: vh(50),
        paddingTop: vh(10)
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