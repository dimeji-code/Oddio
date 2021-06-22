export const INCREMENT = "INCREMENT"


export const addToCart=(product )=>{
    return{type:INCREMENT, product:product}
}