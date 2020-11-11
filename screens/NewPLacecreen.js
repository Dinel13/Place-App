import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constants/Colors";
import { addPlace } from "../store/PlaceAction";

const NewPLacecreen = (props) => {
  const [titleValue, settitleValue] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    settitleValue(text);
  };

  const saveHandler = () => {
    dispatch(addPlace(titleValue));
    props.navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={style.form}>
        <Text style={style.label}>Title</Text>
        <TextInput
          style={style.textINput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={saveHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPLacecreen.navigationOptions = {
  headerTitle: "Tambah Lokasi",
};

const style = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textINput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPLacecreen;
