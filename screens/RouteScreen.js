import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import React from 'react'

import tw from 'twrnc';
// import { Icon, Image } from 'react-native-elements'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RouteScreenStack
    from '../components/RouteScreenStack';
import Map from '../components/Map';


const RouteScreen = () => {

    return (
        <SafeAreaView style={tw`bg-white h-full flex-grow`}>
            <View style={tw`h-1/3`}>
                {/* <View>
                    <View style={tw`border-b border-gray-500 p-1`}><Text style={[tw`text-center mt-10`, { fontSize: 30 }]}>Offer a Ride</Text></View>
                    <TouchableOpacity style={tw`absolute top-9 left-3 z-50 p-3`}>
                        <FontAwesome name="arrow-left" color="black" size={25} />
                    </TouchableOpacity>
                </View> */}
                <Map />
            </View>
            <View style={tw`h-2/3`}>
                <RouteScreenStack />
            </View>
        </SafeAreaView>
    )
}

export default RouteScreen

const styles = StyleSheet.create({})