import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PLaceItem";

const PlaceListSCreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      renderItem={(itemData) => (
        <PlaceItem
          image={null}
          title={itemData.item.title}
          address={null}
          onSelect ={() => {
            props.navigation.navigate('PlaceDetail',{
              placeTitel : itemData.item.title,
              placeId : itemData.item.id
            })
          }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const style = StyleSheet.create({});

PlaceListSCreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default PlaceListSCreen;
