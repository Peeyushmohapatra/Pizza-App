export const reducer = (state={allproduct:[],singleProduct:[],userData:[]},action) => {
    if(action.type === "items"){
        return {
            ...state,
            allproduct:action.payload
        }
    }

    else if(action.type === "singleData"){
        return {
            ...state,
            singleProduct:action.data
        }
    }
    else if(action.type === "userData"){
        return {
            ...state,
            userData:action.data
        }
    }
    return state
}