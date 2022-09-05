import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements';
import tw from 'twrnc'
import OutlineInput from 'react-native-outline-input';
import { useEffect, useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/core';
import { AntDesign } from '@expo/vector-icons';
// import { setNewVehicle } from '../slices/navSlice';
import { setVehicle } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { setTrip } from '../slices/navSlice';

const AddVehicle = () => {

    const [title, setTitle] = useState('')
    const [regNo, setRegNo] = useState('')
    const [totalSeats, setTotalSeats] = useState(2)
    const [image, setImage] = useState('https://links.papareact.com/7pf')
    const [selected, setSelected] = useState(true)
    const navigation = useNavigation()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setVehicle({
            title,
            regNo,
            image
        }))
    }, [title, regNo, image]);

    useEffect(() => {
        dispatch(setTrip({
            seats: totalSeats
        }))
    }, [totalSeats]);
    return (
        <View style={tw`bg-white h-full`}>
            <View style={tw`flex-row mt-2`}>
                <TouchableOpacity style={tw`mt-1 ml-2`} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <View style={tw`mx-auto`}>
                    <Text style={tw`text-xl items-center`}>Add New Vehicle</Text>
                </View>
            </View>
            <View style={tw`h-3/4`}>
                <View style={tw`flex flex-row justify-between m-3 mt-7 mb-4 items-center`}>
                    <Text style={tw`text-lg my-auto`}>Vehicle Type:</Text>
                    <TouchableOpacity onPress={() => { setImage('https://links.papareact.com/7pf'), setSelected(true) }} style={[tw`mt-5 items-center my-auto ${selected && "bg-yellow-100"}`, { height: 45, width: 110, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-center my-auto`}>Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setImage('https://res.cloudinary.com/djsyh5syl/image/upload/v1659076334/mini/scooter2edit-removebg-preview_biwusi.png'), setSelected(false) }} style={[tw`mt-5 items-center my-auto  ${!selected && "bg-yellow-100"}`, { height: 45, width: 110, borderColor: "#000", borderWidth: 1 }]}>
                        <Text style={tw`text-center my-auto`}>Bike/Scooter</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={tw`mx-3 mr-2 mt-3 mb-3`}>
                        <OutlineInput
                            value={title}
                            onChangeText={(e) => setTitle(e)}
                            label="Vehicle Name"
                            activeValueColor="#000000"
                            activeBorderColor="#000000"
                            activeLabelColor="#000000"
                            passiveBorderColor="#808080"
                            passiveLabelColor="#000000"
                            passiveValueColor="#808080"
                        />
                    </View>
                </View>

                <View>
                    <View style={tw`mx-3 mr-2 mt-3 mb-3`}>
                        <OutlineInput
                            value={regNo}
                            onChangeText={(e) => setRegNo(e)}
                            label="Registration Number"
                            activeValueColor="#000000"
                            activeBorderColor="#000000"
                            activeLabelColor="#000000"
                            passiveBorderColor="#808080"
                            passiveLabelColor="#000000"
                            passiveValueColor="#808080"
                        />
                    </View>
                </View>
                <View style={tw`m-3 flex flex-row justify-start`}>
                    <Text style={tw`text-lg mr-2`}>Available Seats:</Text>
                    <View style={tw`flex flex-row`}>
                        <TouchableOpacity
                            onPress={() => {
                                setTotalSeats(totalSeats - 1)
                            }
                            }
                            disabled={(totalSeats < 2)}
                            style={[tw`bg-white border border-black`, { height: 35, width: 35 }]}>
                            <FontAwesome name="minus" color="black" size={20} style={[tw`text-center`, { paddingTop: 7 }]} />
                        </TouchableOpacity>
                        <Text style={tw`text-xl mx-2 mt-1`}>{totalSeats}</Text>
                        <TouchableOpacity
                            onPress={() => setTotalSeats(totalSeats + 1)}
                            disabled={(totalSeats > 7)}
                            style={[tw`bg-white border border-black`, { height: 35, width: 35 }]}>
                            <FontAwesome name="plus" color="black" size={20} style={[tw`text-center`, { paddingTop: 7 }]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <KeyboardAvoidingView>
                <View style={tw`bg-white border-t border-gray-200 mt-auto`}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Review")}
                        disabled={!title || !regNo}
                        style={tw`bg-green-500 py-3 m-3 rounded-md items-center ${(!title || !regNo) && "bg-green-100"}`}>
                        <Text style={tw`text-center text-white text-xl pb-5 top-2`}>Add Vehicle</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default AddVehicle

// const styles = StyleSheet.create({
//     next: {
//         position: fixed,
//         bottom: 0
//     }
// })