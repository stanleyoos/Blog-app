import { CategoryInterface } from "../initialState";

// selectors
export const getAllCategories = (state:any) => state.categories



const categoriesReducer = (statePart: CategoryInterface[] = [], action: any) : any => {
    switch(action.type) {
        default:
             return statePart
    }
}

export default categoriesReducer