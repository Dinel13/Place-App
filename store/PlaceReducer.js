import { ADD_PLACE, SET_PLACES } from "./PlaceAction";
import Places from "../models/Place";

const initState = {
  places: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(
          pl => new Places(pl.id.toString(), pl.title, pl.imageUri)
        )
      };
    case ADD_PLACE:
      const newPLace = new Places(
        action.placeData.id,
        action.placeData.title,
        action.placeData.imageUri
      );
      return {
        places: state.places.concat(newPLace),
      };
    default:
      return state;
  }
  return state;
};
