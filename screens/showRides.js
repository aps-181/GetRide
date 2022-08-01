import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'
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
    const [image, setImage] = useState('')
    const [info, setInfo] = useState([])


    const getData = () => {
        //const rideId = auth.currentUser ? auth.currentUser.uid : "";

        // db.ref("createRides/").on("value", function (snapshot) {
        //     console.log(snapshot.val());
        // });
        // db.ref("createRides/").ref.on('child_added', (snapshot, prevChildKey) => {
        //     const newPost = snapshot.val();
        //     console.log(newPost)
        //     console.log('Driver: ' + newPost.driver);
        //     setDriver(newPost.driver)
        //     console.log('Fare: ' + newPost.tripDetails.fare);
        //     setFare(newPost.tripDetails.fare)
        //     console.log('Mobno: ' + newPost.tripDetails.mobileNumber);
        //     setMobile(newPost.tripDetails.mobileNumber)
        //     console.log('VehicleNo: ' + newPost.vehicle.regNo);
        //     setVehicleno(newPost.vehicle.regNo)
        //     console.log('VehicleName: ' + newPost.vehicle.id);
        //     setNoOfPassengers(newPost.vehicle.id)
        //     console.log('NoofPas: ' + newPost.seatNo.seats);
        //     setNoOfPassengers(newPost.seatNo.seats)
        //     console.log('dest: ' + newPost.destination);
        //     setPickup(newPost.pickup)
        //     console.log('pickup ' + newPost.pickup);
        //     setDestination(newPost.destination)
        //     console.log('image: ' + newPost.vehicle.image);
        //     setImage(newPost.vehicle.image)


        //     //setDriver(newPost.driver);
        //     //console.log(': ' + newPost.title);
        //     //   console.log('Previous Post ID: ' + prevChildKey);
        // });

        db.ref("createRides/").on("value", function (snapshot) {
            var container = [];
            snapshot.forEach((childSnapshot) => {
                console.log(childSnapshot.key)
                setInfo(childSnapshot.val())
                container.push(childSnapshot.val())
                console.log(container)
            })
        });



    };

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1000);
    }, []);


    const data = [
        {
            id: "123",
            title: "Ciaz",
            multiplier: 1,
            image: "https://links.papareact.com/7pf",
            regNo: "KL 07 CG 9808",
            totalSeats: 5
        },
        // {
        //     id: "Uber-XL-456",
        //     title: "Uber XL",
        //     multiplier: 1.2,
        //     image: "https://links.papareact.com/5w8",
        //     regNo: "KL 64 6464",
        //     totalSeats: 5

        // },
        {
            id: "Bike",
            title: "Activa",
            multiplier: 1.2,
            // image: "https://ih1.redbubble.net/image.3253725746.3421/st,small,107x107-pad,100x100,f8f8f8.jpg",
            // image: "https://res.cloudinary.com/djsyh5syl/image/upload/c_scale,h_106/v1659076440/mini/sticker-vespa-gs-motif_70066940-removebg-preview_v7ccsu.png",
            // image: "https://cdn5.vectorstock.com/i/thumb-large/53/69/isolated-vintage-motorcycle-design-vector-31955369.jpg",
            image: "https://res.cloudinary.com/djsyh5syl/image/upload/v1659076334/mini/scooter2edit-removebg-preview_biwusi.png",
            regNo: "KL 07 CA 3547",
            totalSeats: 2

        },
    ];


    return (
        <View>
            <Text>showRides</Text>
            {/* <FlatList
                data={getData}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                }}
                renderItem={({ item: { id, title, regNo, totalSeats, image }, item }) => (
                    <TouchableOpacity
                        // onPress={() => (setSelected(item)

                        // )}
                        style={tw`flex-row justify-between items-center px-5 pb-1`}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{ }</Text>
                        </View>
                        <View>
                            <Text style={tw`text`}>{regNo}</Text>
                            <Text style={tw`text-sm`}>Capacity:{totalSeats}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            /> */}


            <View style={[tw`border border-zinc-800 border-2 p-2 shadown-md m-3`, { height: 200 }]}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <View>
                            <Text style={tw`text-lg`}>{pickup}</Text>
                            <Text style={tw`text-lg`}>{destination}</Text>
                        </View>
                        <View>
                            <Text style={tw`text-lg`}>{driver}</Text>
                            <Text>{mobNo}</Text>
                        </View>

                    </View>
                    <View>
                        <View>
                            {/* <Text style={tw`text-lg`}>{}</Text>
                            <Text style={tw`text-lg`}>Time: 6:30PM</Text> */}
                        </View>
                        <View>
                            <Text>{vehiclename}</Text>
                            <Text>{vehicleno}</Text>
                        </View>

                    </View>
                    <View>
                    </View>
                    <View style={tw`border-l-2 border-gray-200`}></View>
                    <View>
                        <Text style={tw`text-lg`}>Fare:</Text>
                        <Text>{fare}</Text>
                        <View>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: "contain",
                                }}
                                source={{ uri: "https://links.papareact.com/7pf" }}
                            />
                        </View>
                    </View>

                </View>
                <Button
                    title="Join Ride"
                // color="#841584"
                ></Button>
            </View>
        </View>
    )
}

export default showRides

const styles = StyleSheet.create({})