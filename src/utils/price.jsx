export const calcPrice = (cart) => {
    let totalPrice = 0;
    let qtd = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
        qtd += cart[i].quantity;
    }

    return {totalPrice , qtd};
};