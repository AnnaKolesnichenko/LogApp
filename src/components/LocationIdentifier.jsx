import React from "react";
import { View, Image, Text, StyleSheet, Alert, Pressable } from "react-native";
import { useState } from "react";
import { Location } from "expo-location";
import { useNavigation } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const LocationIdentifier = ({ onLocationData }) => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [locationPermissions, requestPermission] = useForegroundPermissions();

  const getPermissions = async () => {
    if (locationPermissions.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (locationPermissions.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Not allowed!",
        "You need to get location permissions on your device"
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await getPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    const locationData = {
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    };
    onLocationData(locationData);
  };

  const getOnMapHandler = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      {/* {location ? (
        <View style={styles.mapPreview}>
          <Image
            source={{ uri: getMapPreview(location.lat, location.lng) }}
            style={styles.mapImg}
          />
        </View>
      ) : (
        <Text>No location found</Text>
      )} */}
      <View style={styles.actions}>
        <Pressable style={styles.content}>
          <EvilIcons
            name="location"
            size={24}
            color="#b7b0b0"
            onPress={getLocationHandler}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 300,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mapImg: {
    width: "100%",
    height: "100%",
  },
});

export default LocationIdentifier;
