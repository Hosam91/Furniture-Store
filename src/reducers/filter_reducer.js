import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS)
  {
    return {
      ...state,
      filtered_products: [...action.payload],
      all_Products: [...action.payload],
    }
  }
  if (action.type === SET_GRIDVIEW)
  {
    return {
      ...state,
      grid_view: true,
      list_view: false,
    }
  }
    if (action.type === SET_LISTVIEW){
      return {
        ...state,
        grid_view: false,
        list_view : true,
      }
  }

  
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
