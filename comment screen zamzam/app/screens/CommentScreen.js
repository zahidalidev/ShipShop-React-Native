import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from "@expo/vector-icons"

// components
import Screen from "../components/common/Screen";
import Comment from '../components/Comment';

// config
import Colors from '../theme/Colors';

// images
import headerImage from "../../assets/images/headerImage.jpg";
import userIcon from "../../assets/images/user.png";
import authorIcon from "../../assets/images/authorIcon.png";

function CommentScreen(props) {
    const [commentData, setCommentData] = useState({
        mainImage: headerImage,
        authorName: "reactnative",
        authorIcon: authorIcon,
        authorDecsription: "posted by u/ok",
        postTitle: "What I am doing wrong?",
        comments: [
            {
                id: 0,
                authorIcon: userIcon,
                author: "Emiction",
                time: "15h",
                text: "01Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lacus",
                children: [
                    {
                        id: 0,
                        authorIcon: userIcon,
                        author: "Emiction",
                        time: "15h",
                        text: "02Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lacus",
                        children: [

                        ]
                    }
                ]
            },
            {
                id: 1,
                authorIcon: userIcon,
                author: "Emiction",
                time: "15h",
                text: "03Lorem ipsum dolor sit amet, consectetur adipiscing el it. Aliquam velit lacus",
                children: [
                    {
                        id: 0,
                        authorIcon: userIcon,
                        author: "Emiction",
                        time: "15h",
                        text: "04Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lacus",
                        children: [
                            {
                                id: 0,
                                authorIcon: userIcon,
                                author: "Emiction",
                                time: "15h",
                                text: "05Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lacus",
                                children: [
                                    {
                                        id: 0,
                                        authorIcon: userIcon,
                                        author: "Emiction",
                                        time: "15h",
                                        text: "06Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lacus",
                                        children: [

                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })



    return (
        <Screen style={{ backgroundColor: Colors.dark }} >
            <Appbar style={{ backgroundColor: Colors.primary, elevation: 10 }}  >
                <Appbar.BackAction color={Colors.white} />
            </Appbar>
            <ScrollView >

                <View style={{}} >
                    <View style={{ backgroundColor: Colors.white }} >
                        <View style={{ margin: RFPercentage(2.5), marginBottom: RFPercentage(2), width: "90%", justifyContent: "flex-start", alignItems: "flex-start", flexDirection: "row" }} >
                            <Image source={commentData.authorIcon} style={{ width: RFPercentage(6), height: RFPercentage(6), borderRadius: RFPercentage(100) }} />
                            <View style={{ marginLeft: RFPercentage(2), width: "70%", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }} >
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2.3) }} >{commentData.authorName}</Text>
                                <Text style={{ color: Colors.lightGrey, fontSize: RFPercentage(2.1) }} >{commentData.authorDecsription}</Text>
                            </View>
                        </View>

                        <View style={{ marginBottom: RFPercentage(1.5), marginLeft: RFPercentage(2.5), width: "90%", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start" }} >
                            <Text style={{ color: Colors.black, fontWeight: "bold", fontSize: RFPercentage(2.5) }} >{commentData.postTitle}</Text>
                        </View>
                    </View>


                    <Image source={commentData.mainImage} style={{ width: "100%", height: RFPercentage(30), borderBottomLeftRadius: RFPercentage(1), borderBottomRightRadius: RFPercentage(1) }} />
                </View>

                {/* comments */}
                <View style={{ alignItems: "center", width: "100%", marginBottom: RFPercentage(2) }} >

                    {
                        commentData.comments.map((comment) => {
                            return (
                                <Comment key={comment.id} comment={comment} />
                            )
                        })
                    }
                </View>
            </ScrollView>

            {/* add comment */}
            <View style={{ backgroundColor: Colors.white, flexDirection: "row", alignItems: "center" }} >
                <Image source={commentData.authorIcon} style={{ marginLeft: "2%", width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(100) }} />

                <TextInput style={{ width: "64%", marginLeft: "2%", marginRight: "7%", height: RFPercentage(7), fontSize: RFPercentage(2.2) }} placeholder="Add a commment" />

                <TouchableOpacity activeOpacity={0.5} style={{ justifyContent: "center", alignItems: 'center', height: RFPercentage(6), width: RFPercentage(6), backgroundColor: "#ededed", borderRadius: RFPercentage(10) }} >
                    <FontAwesome name="angle-double-down" color={Colors.black} size={RFPercentage(3)} />
                </TouchableOpacity>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default CommentScreen;