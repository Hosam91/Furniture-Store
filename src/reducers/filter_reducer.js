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
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      filtered_products: [...action.payload],
      all_Products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    }
  }

  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
      list_view: false,
    }
  }

  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
      list_view: true,
    }
  }

  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let sortedProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
      // return {
      //   ...state,
      //   filtered_products:sortedProducts
      // }
    }
    if (sort === 'price-highest') {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }

    return { ...state, filtered_products: sortedProducts }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload

    return {
      ...state,
      filters: { ...state.filters, [name]: value },
    }
  }
  if (action.type === FILTER_PRODUCTS)
  {
    // console.log('filtering');
    
    return { ...state }
  }
  if(action.type === CLEAR_FILTERS)
  {
    return { 
      ...state, filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        color:'',
       price:state.filters.max_price,
        shipping: false,
        
      }
    }
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
