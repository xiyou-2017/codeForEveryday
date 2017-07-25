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