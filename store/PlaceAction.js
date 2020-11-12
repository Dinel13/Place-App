import * as FileSystem from "expo-file-system";
import { insertPlace, fetchPlaces } from "../helpers/db";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop(); //file name

    const newPath = FileSystem.documentDirectory + fileName;

    try {
      FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(title, newPath, "alamat palsu", 111.23, 89.4)
      console.log(dbResult);
      dispatch({ type: ADD_PLACE, placeData: {id:dbResult.isertId, title: title, imageUri: newPath } });
    } catch (err) {
      console.log(err);
      throw err
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
      try {
          const dbResult = await fetchPlaces();
          console.log(dbResult);
          dispatch({ type: SET_PLACES, places: dbResult.rows._array });
      } catch (err) {
          throw err;
      }
  };
};