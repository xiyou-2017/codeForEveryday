'yse strict'
describe('unit-test', () => {
    describe('buildItem', () => {
        let inputs = ['ITEM000000',
            'ITEM000000',
            'ITEM000000',
            'ITEM000002',
            'ITEM000002',
            'ITEM000003-4',
        ];
        let testData = [
            {
                item: {
                    barcode: 'ITEM000000',
                    name: '可口可乐',
                    unit: '瓶',
                    price: 3.00
                },
                count: 3,
            },
            {
                item: {
                    barcode: 'ITEM000002',
                    name: '苹果',
                    unit: '斤',
                    price: 5.50
                },
                count: 2
            },
            {
                item: {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    unit: '斤',
                    price: 15.00
                },
                count: 4
            }

        ]
        it('test-1', () => {
            expect(buildItem(inputs)).toEqual(testData);
        });
    });
})
