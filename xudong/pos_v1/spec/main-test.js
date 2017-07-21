'use strict'
describe('unit', () => {
    describe('buildItem-test', () => {
        let inputs = [
            'ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000001',
            'ITEM000001',
            'ITEM000004-4'
        ];
        let testData = [
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
        it('test1', () => {
            expect(buildItem(inputs)).toEqual(testData);
        });
    });
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
            expect(getSubtotal(inputs)).toEqual(testData);
        });
    });
    describe('getTotal', () => {
        let inputs = [
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
        let testData = [
            {
                receiptItem: {
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
                allsave: 5.00,
                total: 18.00,
            },
            {
                receiptItem: {
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
                allsave: 5.00,
                total: 18.00,
            },
            {
                receiptItem: {
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
                },
                allsave: 5.00,
                total: 18.00,
            }
        ];
        it('test_3',()=>{
            expect(getTotal(inputs)).toEqual(testData);
        });
    });
    describe('getTotal',()=>{
       let inputs= [
           {
               receiptItem: {
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
               allsave: 5.00,
               total: 18.00,
           },
           {
               receiptItem: {
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
               allsave: 5.00,
               total: 18.00,
           },
           {
               receiptItem: {
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
               },
               allsave: 5.00,
               total: 18.00,
           }
       ];
       let testData=`
***<没钱赚商店>收据***
名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：6.00(元)
名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)
名称：电池，数量：4个，单价：2.00(元)，小计：6.00(元)
----------------------
总计：18.00(元)
节省：5.00(元)
**********************`.trim();
        it('test_4',()=>{
            expect(getString(inputs)).toEqual(testData);
        })
    });
});