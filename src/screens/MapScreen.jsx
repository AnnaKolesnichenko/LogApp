import React, { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import IconButton from "../UI/IconButton";

const MapScreen = ({ navigation }) => {
  const [locationLat, setLocationLat] = useState();
  const [locationLng, setLocationLng] = useState();

  const location = {
    locationLat,
    locationLng,
  };

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setLocationLat(lat);
    setLocationLng(lng);
  };

  // const saveLocation = useCallback(() => {
  //   if (!locationLat && !locationLng) {
  //     Alert.alert("No location picked", "Choose a location");
  //     return;
  //   }
  //   navigation.navigate("AddPlace", {
  //     pickedLat: locationLat,
  //     pickedLng: locationLng,
  //   });
  // }, [navigation, location]);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: ({ tintColor }) => (
  //       <IconButton
  //         name="save"
  //         size={24}
  //         color={tintColor}
  //         onPress={saveLocation}
  //       />
  //     ),
  //   });
  // }, [navigation, saveLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {locationLat && locationLng && (
        <Marker
          title="Picked Location"
          coordinate={{ latitude: locationLat, longitude: locationLng }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapScreen;
