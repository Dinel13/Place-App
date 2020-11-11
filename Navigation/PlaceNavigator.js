import {  createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import PlaceListSCreen from "../screens/PLaceListScreen";
import PlaceDetailSCreen from "../screens/PLaceDetailScreen";
import NewPLacecreen from "../screens/NewPLacecreen";
import MapScreen from "../screens/MapScreen";
import Color from "../constants/Colors";
import { Platform } from "react-native";

const PLaceNavigator = createStackNavigator(
  {
    Places: PlaceListSCreen,
    PlaceDetail: PlaceDetailSCreen,
    NewPlace: NewPLacecreen,
    MapScreen: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Color.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Color.primary,
    },
  }
);

export default createAppContainer(PLaceNavigator);
