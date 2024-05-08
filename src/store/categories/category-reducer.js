import { CATEGORY_ACTION_TYPES } from "./category.types"; 

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isLoadingCategories: false,
    error: null
  };

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoadingCategories: true};
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:    
            return {...state, isLoadingCategories: false, categories: payload };
        case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:    
            return {...state, isLoadingCategories: false, error: payload, };
        default:
            return state;
    }
}