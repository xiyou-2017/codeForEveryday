let buildItem=(inputs)=>{
    let allItem=loadAllItems();
    let cartItems=[];
    for(let barcode of inputs){
        let splitinputs=barcode.split('-');
        let countItem=parseFloat(splitinputs[1] || 1);
        let cartItem=cartItems.find((cartitem)=>cartitem.item.barcode===splitinputs[0]);
        if(cartItem){
            cartItem.count+=countItem;
        }
        else {
            let item=allItem.find((item)=>item.barcode===splitinputs[0]);
            cartItems.push({item:item,count:countItem});
        }
    }
    return cartItems;
}