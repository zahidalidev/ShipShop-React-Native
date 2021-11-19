import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons"

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
                <Image source={Logo} resizeMode="contain" style={{ height: RFPercentage(7) }} />
                <View style={{ flexDirection: "row", marginTop: RFPercentage(3.5), width: "90%", justifyContent: "flex-start" }} >
                    <TouchableOpacity activeOpacity={0.5} >
                        <MaterialCommunityIcons style={{ marginRight: RFPercentage(1) }} name="chevron-left" size={RFPercentage(3.5)} color={Colors.white} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: RFPercentage(3), color: Colors.white, fontWeight: "700" }} >Making an order</Text>
                </View>
            </View>

            {/* bottom container */}
            <ScrollView style={{ flex: 1, backgroundColor: Colors.lightGrey, marginTop: -RFPercentage(4), borderTopLeftRadius: RFPercentage(5), borderTopRightRadius: RFPercentage(5) }} >
                <View style={{ alignItems: "center", flex: 1 }} >

                    <View style={{ alignItems: "flex-start", borderRadius: RFPercentage(2), backgroundColor: Colors.white, width: "90%" }} >
                        <View style={{ flexDirection: "row", alignItems: "center", width: "100%" }} >
                            <Image source={Amazon} resizeMode="contain" style={{ width: RFPercentage(7) }} />
                            <Text style={{ marginLeft: RFPercentage(1.5), fontSize: RFPercentage(2.5), fontFamily: "sans-serif-medium" }} >Store</Text>
                        </View>

                        <TouchableOpacity activeOpacity={0.9} style={{ marginBottom: RFPercentage(5), borderRadius: RFPercentage(2), height: RFPercentage(8.8), alignItems: "center", flexDirection: "row", backgroundColor: Colors.white, width: "90%", marginTop: -RFPercentage(1) }} >
                            <TouchableOpacity style={{ position: "absolute", top: 0, right: 0 }} >
                                <MaterialCommunityIcons name="close" size={RFPercentage(2)} color={Colors.black} />
                            </TouchableOpacity>

                            <Image source={CardImg} resizeMode="cover" style={{ marginLeft: RFPercentage(3), borderRadius: RFPercentage(2), width: RFPercentage(8), height: RFPercentage(8) }} />
                            <View style={{ justifyContent: "space-between", height: "90%", marginLeft: RFPercentage(2) }} >
                                <Text style={{ fontSize: RFPercentage(2.2), }} >Lorem ipsum dolor sit amet</Text>
                                <Text style={{ fontSize: RFPercentage(2), color: Colors.grey }} >Excepteur sint occaecat</Text>

                                <View style={{ justifyContent: "space-between", width: "70%", flexDirection: "row" }} >
                                    <Text style={{ fontSize: RFPercentage(2.2), fontWeight: "bold" }} >$256</Text>
                                    <View style={{ flexDirection: "row", }} >
                                        <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: Colors.greyDark, borderRadius: RFPercentage(5), padding: 3 }} >
                                            <MaterialCommunityIcons name="minus" size={RFPercentage(2)} color={Colors.white} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: RFPercentage(2.2), marginLeft: RFPercentage(1), marginRight: RFPercentage(1) }} >1</Text>
                                        <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: Colors.greyDark, borderRadius: RFPercentage(5), padding: 3 }} >
                                            <MaterialCommunityIcons name="plus" size={RFPercentage(2)} color={Colors.white} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: RFPercentage(2), height: RFPercentage(8.8), alignItems: "center", flexDirection: "row", backgroundColor: Colors.white, width: "90%", marginTop: RFPercentage(2) }} >
                        <View style={{ marginLeft: RFPercentage(2), borderRadius: RFPercentage(1.2), backgroundColor: Colors.primaryLight, height: RFPercentage(5), width: RFPercentage(5), justifyContent: "center", alignItems: "center" }} >
                            <SimpleLineIcons name="location-pin" size={RFPercentage(3)} color={Colors.primary} />
                        </View>
                        <Text style={{ marginLeft: RFPercentage(3), fontSize: RFPercentage(2), fontFamily: "sans-serif-medium" }} >Add delivery address</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} style={{ borderRadius: RFPercentage(2), height: RFPercentage(8.8), alignItems: "center", flexDirection: "row", backgroundColor: Colors.white, width: "90%", marginTop: RFPercentage(2) }} >
                        <View style={{ marginLeft: RFPercentage(2), borderRadius: RFPercentage(1.2), backgroundColor: Colors.primaryLight, height: RFPercentage(5), width: RFPercentage(5), justifyContent: "center", alignItems: "center" }} >
                            <Image source={CreditCard} resizeMode="contain" style={{ width: RFPercentage(3) }} />
                        </View>

                        <View style={{ marginLeft: RFPercentage(3), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "70%" }} >
                            <Text style={{ fontSize: RFPercentage(2), fontFamily: "sans-serif-medium" }} >Add delivery address</Text>
                            <TouchableOpacity activeOpacity={0.5} >
                                <MaterialCommunityIcons style={{ marginRight: RFPercentage(1) }} name="chevron-right" size={RFPercentage(3.5)} color={Colors.black} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                    {/* <View style={{ marginTop: RFPercentage(4), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "90%", marginLeft: RFPercentage(2) }} >
                            <Text style={{ width: "55%", fontSize: RFPercentage(2), color: "#ADADAD" }} >Estimated delivery time 7-21 days from the date of payment</Text>
                            <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", alignItems: "center" }} >
                                <Text style={{ fontSize: RFPercentage(2.6), fontWeight: "bold" }} >Free delivery</Text>
                                <MaterialCommunityIcons style={{ marginRight: RFPercentage(1) }} name="chevron-right" size={RFPercentage(3.8)} color={Colors.black} />
                            </TouchableOpacity>
                        </View> */}
                    <View style={{ marginTop: RFPercentage(3), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%" }} >
                        <Text style={{ fontSize: RFPercentage(2.2), color: "#ADADAD" }} >Delivery cost</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.6), color: "#ADADAD" }} >$5</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%" }} >
                        <Text style={{ fontSize: RFPercentage(2.2), color: "#ADADAD" }} >Transfer fee (5%)</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.6), color: "#ADADAD" }} >$25.6</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%" }} >
                        <Text style={{ fontSize: RFPercentage(2.2), color: "#ADADAD" }} >Subtotal</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.6), color: "#ADADAD" }} >$512</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: RFPercentage(1), borderBottomWidth: 1, borderBottomColor: "#E9E9E9", width: "84%" }} />

                    <View style={{ marginTop: RFPercentage(1), flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "80%" }} >
                        <Text style={{ fontSize: RFPercentage(2.2), color: Colors.black }} >Total</Text>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: "row", alignItems: "center" }} >
                            <Text style={{ fontSize: RFPercentage(2.6), color: Colors.black }} >$542.6</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3, marginTop: RFPercentage(4), marginBottom: RFPercentage(3), padding: RFPercentage(1.5), borderRadius: RFPercentage(1.5), justifyContent: "center", alignItems: 'center', width: "80%", backgroundColor: Colors.primary
                    }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.6) }} >Buy</Text>
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
    }
})

export default SelectPaymentScreen;