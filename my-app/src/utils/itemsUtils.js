export const CategoryItems = ['Electronics', 'Furniture', 'Stationery', 'Food', 'Sports', 'Others']

export const validateItem = (itemDetails) => {
    const {name, category, quantity, price} = itemDetails;

    if(!name || !category || !quantity || !price){
        return false;
    }
    return true
}