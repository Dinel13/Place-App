import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return (dispatch) => {
    const fileName = image.split("/").pop(); //file name

    const newPath = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        form: image,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err
    }

    dispatch({ type: ADD_PLACE, placeData: { title: title, imageUri: newPath } });
  };
};
