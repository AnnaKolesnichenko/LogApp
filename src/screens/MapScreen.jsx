import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { getAddress } from "../data/location";
// import IconButton from "../UI/IconButton";

const MapScreen = ({ navigation, route }) => {
  const [locationLat, setLocationLat] = useState();
  const [locationLng, setLocationLng] = useState();

  const { latitude, longitude } = route.params;

  // useEffect(() => {
  //   setLocationLat(Number(latitude));
  //   setLocationLng(Number(longitude));
  // }, [latitude, longitude]);
  // console.log(locationLat, locationLng);

  // useEffect(() => {
  //   const fetchAddress = async () => {
  //     try {
  //       const where = await getAddress(locationLat, locationLng);
  //       console.log(where);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchAddress();
  // }, [locationLat, locationLng]);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.002,
    longitudeDelta: 0.002,
  };
  console.log(region);

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
      {latitude && longitude && (
        <Marker
          title="Picked Location"
          coordinate={{ latitude: latitude, longitude: longitude }}
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
