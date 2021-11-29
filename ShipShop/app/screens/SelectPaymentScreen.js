import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons"

// components
import Screen from "../components/common/Screen";

// config
import Colors from "../config/Theme";

// images
import Logo from "../../assets/images/shipshoplogo.png"
import CreditCard from "../../assets/images/paymenticon.png"
import Amazon from "../../assets/images/amazon.png"
import CardImg from "../../assets/images/cardimg.png"

function SelectPaymentScreen(props) {
    return (
        <Screen>

            {/* top container */}
            <View style={styles.topContainer} >
                <Image source={Logo} resizeMode="contain" style={styles.logo} />
                <View style={styles.iconContainer} >
                    <TouchableOpacity activeOpacity={0.5} >
                        <MaterialCommunityIcons style={styles.backIcon} name="chevron-left" size={RFPercentage(3.5)} color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={styles.orderText} >Making an order</Text>
                </View>
            </View>

            {/* bottom container */}
            <ScrollView style={styles.bottomContainer} >
                <View style={styles.bottomView} >

                    <View style={styles.storeContainer} >
                        <View style={styles.amazonCard} >
                            <Image source={Amazon} resizeMode="contain" style={styles.amazonImage} />
                            <Text style={styles.amazonCardText} >Store</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.9} style={styles.card} >
                            <TouchableOpacity style={styles.close} >
                                <MaterialCommunityIcons name="close" size={RFPercentage(2)} color={Colors.black} />
                            </TouchableOpacity>

                            <Image source={CardImg} resizeMode="cover" style={styles.cardImage} />
                            <View style={styles.cardBody} >
                                <Text style={styles.cardTitle} >Lorem ipsum dolor sit amet</Text>
                                <Text style={styles.cardDescription} >Excepteur sint occaecat</Text>

                                <View style={styles.cardPriceBody} >
                                    <Text style={styles.cardPrice} >$256</Text>
                                    <View style={styles.cardPriceButtons} >
                                        <TouchableOpacity activeOpacity={0.8} style={styles.cardButton} >
                                            <MaterialCommunityIcons name="minus" size={RFPercentage(2)} color={Colors.white} />
                                        </TouchableOpacity>
                                        <Text style={styles.cardPriceText} >1</Text>
                                        <TouchableOpacity activeOpacity={0.8} style={styles.cardButton} >
                                            <MaterialCommunityIcons name="plus" size={RFPercentage(2)} color={Colors.white} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.9} style={styles.smallCard} >
                        <View style={styles.basicCard} >
                            <SimpleLineIcons name="location-pin" size={RFPercentage(3)} color={Colors.primary} />
                        </View>
                        <Text style={styles.carddeliverDescription} >Add delivery address</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} style={styles.smallCard} >
                        <View style={styles.basicCard} >
                            <Image source={CreditCard} resizeMode="contain" style={{ width: RFPercentage(3) }} />
                        </View>

                        <View style={styles.cardPayment} >
                            <Text style={styles.cardPaymentDescription} >Add card for payment</Text>
                            <TouchableOpacity activeOpacity={0.5} >
                                <MaterialCommunityIcons style={styles.nextIcon} name="chevron-right" size={RFPercentage(3.5)} color={Colors.black} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.cost} >
                        <Text style={styles.priceTitle} >Delivery cost</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.priceValueContainer} >
                            <Text style={styles.priceValue} >$5</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fee} >
                        <Text style={styles.priceTitle} >Transfer fee (5%)</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.priceValueContainer} >
                            <Text style={styles.priceValue} >$25.6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fee} >
                        <Text style={styles.priceTitle} >Subtotal</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.priceValueContainer} >
                            <Text style={styles.priceValue} >$512</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.border} />

                    <View style={styles.fee} >
                        <Text style={styles.priceTotal} >Total</Text>
                        <TouchableOpacity activeOpacity={0.5} style={styles.totalPriceContainer} >
                            <Text style={styles.totalPriceValue} >$542.6</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.butButton} >
                        <Text style={styles.buyButtonTitle} >Buy</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Screen >
    );
}

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: Colors.primary,
        height: RFPercentage(27),
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: RFPercentage(7)
    },
    backIcon: {
        marginRight: RFPercentage(1)
    },
    orderText: {
        fontSize: RFPercentage(3),
        color: Colors.white,
        fontWeight: "700"
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        marginTop: -RFPercentage(4),
        borderTopLeftRadius: RFPercentage(5),
        borderTopRightRadius: RFPercentage(5)
    },
    bottomView: {
        alignItems: "center",
        flex: 1
    },
    iconContainer: {
        flexDirection: "row",
        marginTop: RFPercentage(3.5),
        width: "90%",
        justifyContent: "flex-start"
    },
    storeContainer: {
        alignItems: "flex-start",
        borderRadius: RFPercentage(2),
        backgroundColor: Colors.white,
        width: "90%"
    },
    amazonCard: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    amazonImage: {
        width: RFPercentage(7)
    },
    amazonCardText: {
        marginLeft: RFPercentage(1.5),
        fontSize: RFPercentage(2.5),
        fontFamily: "sans-serif-medium"
    },
    card: {
        marginBottom: RFPercentage(5),
        borderRadius: RFPercentage(2),
        height: RFPercentage(8.8),
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.white,
        width: "90%",
        marginTop: -RFPercentage(1)
    },
    close: {
        position: "absolute",
        top: 0,
        right: 0
    },
    cardImage: {
        marginLeft: RFPercentage(3),
        borderRadius: RFPercentage(2),
        width: RFPercentage(8),
        height: RFPercentage(8)
    },
    cardBody: {
        justifyContent: "space-between",
        height: "90%",
        marginLeft: RFPercentage(2)
    },
    cardTitle: {
        fontSize: RFPercentage(2.2)
    },
    cardDescription: {
        fontSize: RFPercentage(2),
        color: Colors.grey
    },
    cardPriceBody: {
        justifyContent: "space-between",
        width: "70%",
        flexDirection: "row"
    },
    cardPrice: {
        fontSize: RFPercentage(2.2),
        fontWeight: "bold"
    },
    cardPriceButtons: {
        flexDirection: "row"
    },
    cardButton: {
        backgroundColor: Colors.greyDark,
        borderRadius: RFPercentage(5),
        padding: 3
    },
    cardPriceText: {
        fontSize: RFPercentage(2.2),
        marginLeft: RFPercentage(1),
        marginRight: RFPercentage(1)
    },
    cardPayment: {
        marginLeft: RFPercentage(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "70%"
    },
    smallCard: {
        borderRadius: RFPercentage(2),
        height: RFPercentage(8.8),
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: Colors.white,
        width: "90%",
        marginTop: RFPercentage(2)
    },
    basicCard: {
        marginLeft: RFPercentage(2),
        borderRadius: RFPercentage(1.2),
        backgroundColor: Colors.primaryLight,
        height: RFPercentage(5),
        width: RFPercentage(5),
        justifyContent: "center",
        alignItems: "center"
    },
    carddeliverDescription: {
        marginLeft: RFPercentage(3),
        fontSize: RFPercentage(2),
        fontFamily: "sans-serif-medium"
    },
    cardPaymentDescription: {
        fontSize: RFPercentage(2),
        fontFamily: "sans-serif-medium"
    },
    nextIcon: { marginRight: RFPercentage(1) },
    priceTitle: {
        fontSize: RFPercentage(2.2),
        color: "#ADADAD"
    },
    priceValueContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    priceValue: {
        fontSize: RFPercentage(2.6),
        color: "#ADADAD"
    },
    cost: {
        marginTop: RFPercentage(3),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%"
    },
    fee: {
        marginTop: RFPercentage(1),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%"
    },
    border: {
        marginTop: RFPercentage(1),
        borderBottomWidth: 1,
        borderBottomColor: "#E9E9E9",
        width: "84%"
    },
    butButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginTop: RFPercentage(4),
        marginBottom: RFPercentage(3),
        padding: RFPercentage(1.5),
        borderRadius: RFPercentage(1.5),
        justifyContent: "center",
        alignItems: 'center',
        width: "80%",
        backgroundColor: Colors.primary
    },
    buyButtonTitle: {
        color: Colors.white,
        fontSize: RFPercentage(2.6)
    },
    priceTotal: {
        fontSize: RFPercentage(2.2),
        color: Colors.black
    },
    totalPriceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    totalPriceValue: {
        fontSize: RFPercentage(2.6),
        color: Colors.black
    },
})

export default SelectPaymentScreen;