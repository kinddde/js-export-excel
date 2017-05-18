# js-export-excel

> 纯js导出excel

> CommonJS引入

> 适用于webpack打包

## 下载

```
npm install js-export-excel
```

## 使用

```
const ExportJsonExcel = require('js-export-excel')

var option={};

option.fileName = 'excel'
option.datas=[
  {
    sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}],
    sheetName:'sheet',
    sheetFilter:['two','one'],
    sheetHeader:['第一列','第二列']
  },
  {
    sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
  }
];

var toExcel = new ExportJsonExcel(option); //new
toExcel.saveExcel(); //保存
```

## option配置

[查看](https://github.com/cuikangjie/JsonExportExcel#option)
