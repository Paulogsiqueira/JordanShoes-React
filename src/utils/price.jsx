export const calcPrice = (cart) => {
    let totalPrice = 0;
    let qtd = 0;

    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
        qtd += cart[i].quantity;
    }

    return {totalPrice , qtd};
};

export const calcPrice2 = (cart) => {
    let totalPrice = 0;
    let qtd = 0;

    if (cart && cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].payload && cart[i].payload.price && cart[i].quantity) {
                totalPrice += cart[i].payload.price * cart[i].quantity;
                qtd += cart[i].quantity;
            } else {
                console.error(`Erro: Informações de preço ou quantidade ausentes para o item no índice ${i}`);
            }
        }
    } else {
        console.warn('Aviso: O carrinho está vazio.');
    }

    return { totalPrice, qtd };
};