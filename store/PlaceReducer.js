import { ADD_PLACE } from "./PlaceAction";
import Places from "../models/Place";

const initState = {
  places: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPLace =  new Places( new Date().toString(), action.placeData.title)
      return {
        places : state.places.concat(newPLace)
      }
    default:
      return state;
  }
  return state;
};
