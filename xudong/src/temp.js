describe('buildItem-test', () => {
    let inputs = [
        {
            item: {
                barcode: 'ITEM000000',
                name: '可口可乐',
                unit: '瓶',
                price: 3.00
            },
            count: 3
        },
        {
            item: {
                barcode: 'ITEM000001',
                name: '雪碧',
                unit: '瓶',
                price: 3.00
            },
            count: 2
        },
        {
            item: {
                barcode: 'ITEM000004',
                name: '电池',
                unit: '个',
                price: 2.00
            },
            count: 4
        }
    ];
    let testData = [
        {
            cartItem: {
                item: {
                    barcode: 'ITEM000000',
                    name: '可口可乐',
                    unit: '瓶',
                    price: 3.00
                },
                count: 3
            },
            subtotal: 6.00,
            save: 3.00,
        },
        {
            cartItem: {
                item: {
                    barcode: 'ITEM000001',
                    name: '雪碧',
                    unit: '瓶',
                    price: 3.00
                },
                count: 2
            },
            subtotal: 6.00,
            save: 0
        },
        {
            cartItem: {
                item: {
                    barcode: 'ITEM000004',
                    name: '电池',
                    unit: '个',
                    price: 2.00
                },
                count: 4
            },
            subtotal: 6.00,
            save: 2.00,
        }
    ];
    it('test_2', () => {
        expect(getsubtotal(inputs)).toEqual(testData);
    });
});

let getsubtotal = (cartItems) => {
    let subtotalItems=cartItems.map((cartItem)=>{
        let saveCount=parseInt(cartItem.count/3);
        let save=saveCount*cartItem.item.price;
        let subtotal=(cartItem.count-saveCount)*cartItem.item.price;
        return {cartItem,save,subtotal};
    });
    return subtotalItems;
}