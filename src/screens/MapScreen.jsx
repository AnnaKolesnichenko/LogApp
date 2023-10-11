import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import IconButton from "../UI/IconButton";

const MapScreen = ({ navigation, route }) => {
  const [locationLat, setLocationLat] = useState();
  const [locationLng, setLocationLng] = useState();

  const { latitude, longitude } = route.params;

  useEffect(() => {
    setLocationLat(latitude);
    setLocationLng(longitude);
  }, [latitude, longitude]);

  const region = {
    latitude: locationLat,
    longitude: locationLng,
    latitudeDelta: 0.0001,
    longitudeDelta: 0.0001,
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
    <MapView initialRegion={region} style={styles.map}>
      {locationLat !== null && locationLng !== null && (
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
    marginTop: 0,
  },
});

export default MapScreen;
