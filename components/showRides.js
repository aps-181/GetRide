import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const showRides = () => {
    const getData = () => {
        //const rideId = auth.currentUser ? auth.currentUser.uid : "";
        db.ref("createRides/").on("value", function (snapshot) {
            console.log(snapshot.val());
        });
    };

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 1000);
    }, []);
    return (
        <View>
            <Text>showRides</Text>
            {/* <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
                }}
                renderItem={({ item: { id, title, regNo, totalSeats, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => (setSelected(item)

                        )}
                        style={tw`flex-row justify-between items-center px-5 pb-1  ${id === selected?.id && "bg-yellow-100"}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: "contain",
                            }}
                            source={{ uri: image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        </View>
                        <View>
                            <Text style={tw`text`}>{regNo}</Text>
                            <Text style={tw`text-sm`}>Capacity:{totalSeats}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            /> */}
        </View>
    )
}

export default showRides

const styles = StyleSheet.create({})