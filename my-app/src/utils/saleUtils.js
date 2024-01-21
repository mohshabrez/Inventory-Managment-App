export const Validatesale = (saleDetails) => {
    const {item, description, quantity, price} = saleDetails
    if( !item || item === "-1" || !description || !quantity || !price){
        return false;
    }
    return true;
}