import React from "react";
import { StyleSheet, View } from "react-native";

const PlaceDetailSCreen = (props) => {
  return <View></View>;
};

PlaceDetailSCreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("placeTitle")
  };
};

const style = StyleSheet.create({});

export default PlaceDetailSCreen;
