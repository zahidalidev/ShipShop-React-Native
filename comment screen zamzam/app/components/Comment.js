import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { FontAwesome } from "@expo/vector-icons";

import Colors from '../theme/Colors';

function Comment({ comment }) {
    const nestedComments = (comment.children || []).map(comment => {
        return <Comment key={comment.id} comment={comment} type="child" />
    })

    return (
        <View style={{ width: "90%", marginTop: RFPercentage(4), marginLeft: "8%" }} >
            <View style={{ flexDirection: "row", alignItems: "center" }} >
                <Image source={comment.authorIcon} style={{ width: RFPercentage(5), height: RFPercentage(5), borderRadius: RFPercentage(100) }} />
                <Text style={{ marginLeft: RFPercentage(2), color: Colors.lightGrey, fontSize: RFPercentage(2.3) }} >{comment.author}</Text>
                <View style={{ margin: RFPercentage(1), width: 3, height: 3, borderRadius: 3, backgroundColor: Colors.lightGrey }} />
                <Text style={{ color: Colors.lightGrey, fontSize: RFPercentage(2.2) }} >{comment.time}</Text>
            </View>
            <Text style={{ marginLeft: RFPercentage(1), marginTop: RFPercentage(1), color: Colors.lightGrey2, fontSize: RFPercentage(2.1) }} >
                {comment.text}
            </Text>
            <View style={{ width: "90%", alignItems: "flex-end", marginTop: RFPercentage(1) }} >
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <TouchableOpacity activeOpacity={0.5} style={{ marginRight: RFPercentage(1.5) }} >
                        <FontAwesome name="reply" size={RFPercentage(2.3)} color={Colors.lightGrey} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: RFPercentage(2.3), color: Colors.lightGrey, marginRight: RFPercentage(1.5) }} >10</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <FontAwesome name="heart-o" size={RFPercentage(2.3)} color={Colors.lightGrey} />
                    </TouchableOpacity>
                </View>
            </View>

            {nestedComments}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Comment;