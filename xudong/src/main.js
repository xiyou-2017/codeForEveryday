'use strict';
let buildItem = (inputs) => {
    let allItems = loadAllItems();
    let cartItems = [];
    for (let barcode of inputs) {
        let splitInput = barcode.split('-');
        let itemCount = parseFloat(splitInput[1] || 1);
        let cartItem = cartItems.find((cartItem) => cartItem.item.barcode === splitInput[0]);
        if (cartItem) {
            cartItem.count += itemCount;
        }
        else {
            let item = allItems.find((item) => item.barcode === splitInput[0]);
            cartItems.push({item: item, count: itemCount});
        }
    }
    return cartItems;
}

let getSubtotal = (cartItems) => {
    let subtotalItems = cartItems.map((cartItem) => {
        let saveCount = parseInt(cartItem.count / 3);
        let save = saveCount * cartItem.item.price;
        let subtotal = (cartItem.count - saveCount) * cartItem.item.price;
        return {cartItem, save, subtotal};
    });
    return subtotalItems;
}

let getTotal = (receiptItems) => {
    let total = 0;
    let allsave = 0;
    for (let receiptItem of receiptItems) {
        total += receiptItem.subtotal;
        allsave += receiptItem.save;
    }
    let receipt = receiptItems.map((receiptItem) => {
        return {receiptItem, total, allsave};
    });
    return receipt;
}