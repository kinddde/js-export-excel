const ExportJsonExcel = require('../')

var option = {};
option.datas = [{
        sheetData: [{
            one: '一行一列',
            two: '一行二列'
        }, {
            one: '二行一列',
            two: '二行二列'
        }],
        sheetName: 'sheet',
        sheetFilter: ['two', 'one'],
        sheetHeader: ['第一列', '第二列'],
    },
    {
        sheetData: [{
            one: '一行一列',
            two: '一行二列'
        }, {
            one: '二行一列',
            two: '二行二列'
        }]
    }
];
var toExcel = new ExportJsonExcel(option);
toExcel.saveExcel();
