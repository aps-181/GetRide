import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, firestore, db } from "../firebase";
import { Image } from 'react-native-elements';
import tw from 'twrnc'

const showRides = () => {
    const [driver, setDriver] = useState('');
    const [fare, setFare] = useState('');
    const [mobNo, setMobile] = useState('');
    const [vehicleno, setVehicleno] = useState('');
    const [vehiclename, setVehicleName] = useState('')
    const [noOfPassengers, setNoOfPassengers] = useState('')
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('')
    const [image, setImage] = useState('https://links.papareact.com/7pf')
    const [info, setInfo] = useState([])
    //const container = [];


    const getData = () => {
        //const rideId = auth.currentUser ? auth.currentUser.uid : "";

        // db.ref("createRides/").on("value", function (snapshot) {
        //     console.log(snapshot.val());
        // });
        db.ref("createRides/").ref.on('child_added', (snapshot, prevChildKey) => {
            const container = snapshot.val();
            //console.log(container)
            console.log('Driver: ' + container.driver);
            setDriver(container.driver)
            console.log('Fare: ' + container.tripDetails.fare);
            setFare(container.tripDetails.fare)
            console.log('Mobno: ' + container.tripDetails.mobileNumber);
            setMobile(container.mobileNumber)
            console.log('VehicleNo: ' + container.vehicle.regNo);
            setVehicleno(container.vehicle.regNo)
            console.log('VehicleName: ' + container.vehicle.title);
            setNoOfPassengers(container.vehicle.id)
            console.log('NoofPas: ' + container.seatNo.seats);
            setNoOfPassengers(container.seatNo.seats)
            console.log('dest: ' + container.destination);
            setPickup(container.pickup)
            console.log('pickup ' + container.pickup);
            setDestination(container.destination)
            console.log('image: ' + container.vehicle.image);
            setImage(container.vehicle.image)


            //setDriver(container.driver);
            //console.log(': ' + container.title);
            //   console.log('Previous Post ID: ' + prevChildKey);
        });

        // db.ref("createRides/").on("value", function (snapshot) {
        //     snapshot.forEach((childSnapshot) => {
        //         //console.log(childSnapshot.key)
        //         setInfo(childSnapshot.val())
        //         container.push(childSnapshot.val())
        //         console.log(container.driver)
        //         //console.log('Driver: ' + container.driver);
        //         // setDriver(container.driver)
        //         // console.log('Fare: ' + container.tripDetails.fare);
        //         // setFare(container.tripDetails.fare)
        //         // console.log('Mobno: ' + container.tripDetails.mobileNumber);
        //         // setMobile(container.tripDetails.mobileNumber)
        //         // console.log('VehicleNo: ' + container.vehicle.regNo);
        //         // setVehicleno(container.vehicle.regNo)
        //         // console.log('VehicleName: ' + container.vehicle.id);
        //         // setNoOfPassengers(container.vehicle.id)
        //         // console.log('NoofPas: ' + container.seatNo.seats);
        //         // setNoOfPassengers(container.seatNo.seats)
        //         // console.log('dest: ' + container.destination);
        //         // setPickup(container.pickup)
        //         // console.log('pickup ' + container.pickup);
        //         // setDestination(container.destination)
        //         // console.log('image: ' + container.vehicle.image);
        //         // setImage(container.vehicle.image)
        //     })
        // });



    };

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1000);
    }, []);


    const data = [
        {
            id: 1,
            apickup: 'Model Engineering College',
            adestination: 'Lulu Mall',
            adriver: 'John',
            aimage: 'https://links.papareact.com/7pf',
            amobNo: '9988776632',
            afare: '30',
            aseats: '3',
            avehiclename: 'Alto 800',
            avehicleno: 'KL 34 A 9370'

        },
        {
            id: 2,
            apickup: "Lulu Mall",
            adestination: 'Model Engineering College',
            adriver: 'Joy',
            aimage: 'https://res.cloudinary.com/djsyh5syl/image/upload/v1659076334/mini/scooter2edit-removebg-preview_biwusi.png',
            amobNo: '879012678',
            afare: '25',
            aseats: 1,
            avehiclename: 'Activa',
            avehicleno: 'KL 66 AD 3535'

        },
        {
            id: 3,
            apickup: 'Model Engineering College',
            adestination: 'Lulu Mall',
            adriver: 'Abiram',
            aimage: 'https://links.papareact.com/7pf',
            amobNo: '1234567890',
            afare: '70',
            aseats: '3',
            avehiclename: 'Alto',
            avehicleno: 'KL 07 BK 5577'

        },
        // {
        //     id: 3,
        //     apickup: { pickup } || 'Model Engineering College',
        //     adestination: { destination } || 'Kalloor Stadium',
        //     adriver: { driver } || 'Akshay',
        //     aimage: { image } || 'https://links.papareact.com/7pf',
        //     amobNo: { mobNo } || '987625431',
        //     afare: { fare } || '22',
        //     avehiclename: { vehiclename } || 'Jazz',
        //     avehicleno: { vehicleno } || 'KL 07 CV 5625',
        //     aseats: { noOfPassengers } || '3'
        // }

    ];


    return (
        <SafeAreaView style={tw`h-full bg-white`}>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                }}
                renderItem={({ item: { aseats, amobNo, adriver, afare, aimage, apickup, adestination, avehicleno, avehiclename }, item }) => (
                    <View style={[tw`border border-zinc-800 border-2 p-2 shadown-md m-3`, { height: 200 }]}>
                        <View style={tw`flex-row justify-between`}>
                            <View>

                                <View>
                                    <Text style={tw`text-lg`}>{adriver}</Text>
                                    <Text>{amobNo}</Text>
                                </View>
                                <View>
                                    <Text style={tw`text-md`}>{apickup}</Text>
                                    <Text style={tw`text-md`}>{adestination}</Text>
                                    <Text>{aseats}</Text>
                                </View>

                            </View>
                            <View>
                                <View>
                                    {/* <Text style={tw`text-lg`}>{}</Text>
                            <Text style={tw`text-lg`}>Time: 6:30PM</Text> */}
                                </View>
                                <View style={tw`flex items-end`}>
                                    <Text>{avehiclename}</Text>
                                    <Text>{avehicleno}</Text>
                                </View>

                            </View>
                            <View>
                            </View>
                            <View style={tw`border-l-2 border-gray-200`}></View>
                            <View>
                                {/* <Text style={tw`text-lg`}>Fare:</Text> */}
                                <Text style={tw`text-lg`}>{afare}Rs</Text>
                                <View>
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            resizeMode: "contain",
                                        }}
                                        source={{ uri: aimage }}
                                    />
                                </View>
                            </View>

                        </View>
                        <View style={tw`mt-auto`}>
                            <Button
                                title="Join Ride"
                                // color="#841584"
                                onPress={() => { alert('You have been added to the trip. Please arrive on time.') }}
                            ></Button>
                        </View>
                    </View>
                )}
            />

        </SafeAreaView>

    )
}

export default showRides

const styles = StyleSheet.create({})