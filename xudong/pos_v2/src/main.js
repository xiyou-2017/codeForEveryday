'use strict'

let printReceipt=(inputs)=>{
    let cartItems=buildItem(inputs);
    let receiptItems=getSubtotal(cartItems);
    let receipt=getTotal(receiptItems);
    let receiptText=getString(receipt);
    console.log(receiptText);
}

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

let getTime = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear().toString();
    let month = (currentDate.getMonth() + 1).toString();
    let date = currentDate.getDate().toString();
    let hour = currentDate.getHours().toString();
    let minute = currentDate.getMinutes().toString();
    let second = currentDate.getSeconds().toString();
    let dateTimeString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return dateTimeString;
    //getTime
}

let getString = (receipt) => {
    let receiptString = "***<没钱赚商店>收据***\n";
    receiptString += '打印时间：'+getTime();
    for (let itemArray of receipt) {
        receiptString += '\n名称：' + itemArray.receiptItem.cartItem.item.name + '，数量：'
            + itemArray.receiptItem.cartItem.count + itemArray.receiptItem.cartItem.item.unit + '，单价：'
            + itemArray.receiptItem.cartItem.item.price.toFixed(2) + '(元)，小计：'
            + itemArray.receiptItem.subtotal.toFixed(2) + '(元)';
    }
    receiptString += '\n----------------------' +
        '\n总计：' + receipt[0].total.toFixed(2) + '(元)' +
        '\n节省：' + receipt[0].allsave.toFixed(2) + '(元)' +
        '\n**********************';
    return receiptString;
}