# js-export-excel

> 纯 js 导出 excel

## tip

> bug or 建议 请在 [issues](https://github.com/cuikangjie/js-export-excel/issues) 提

## log

- 2018.8.15 (v: 1.1.1)

  > 优化打包
  > 添加 babel 编译

- 2018.7.16 (v: 1.1.0)

  > 添加列宽设置

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
    sheetHeader:['第一列','第二列'],
    columnWidths: [20, 20]
  },
  {
    sheetData:[{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
  }
];

var toExcel = new ExportJsonExcel(option); //new
toExcel.saveExcel(); //保存
```

## documentation

[link](//coding.cuikangjie.com/content/26/%E7%BA%AFJS%E5%AF%BC%E5%87%BAexcel%EF%BC%88%E6%94%AF%E6%8C%81%E4%B8%AD%E6%96%87%EF%BC%89)
