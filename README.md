# js-export-excel

> 纯js导出excel

## tip
> bug or 建议 请在 [issues](https://github.com/cuikangjie/js-export-excel/issues) 提

> 需使用babel编译

## log

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

## option

- datas 数据

  ```
  /*多个sheet*/
  /*每个sheet为一个object */
  [{
  sheetData:[], // 数据
  sheetName:'', // sheet名字
  sheetFilter:[], //列过滤
  sheetHeader:[] // 第一行
  columnWidths: [] //列宽 需与列顺序对应
  }]
  ```

- fileName 下载文件名(默认：download)

### sheet option

- sheetName sheet名字(可有可无)(默认sheet1)

- sheetHeader 标题（excel第一行数据）

  ```javascript
  sheetHeader:['第一列','第二列']
  ```

- columnWidths 列宽  非必须

  ```javascript
  // number 屏幕宽度为100 20即为 1/5屏幕大小
  columnWidths=[20, ''];

  ```

- sheetData 数据源(必须)

  ```javascript
  <!--两种形式-->
  <!--第一种 object-->
  [{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
  <!--第二种 arrary-->
  [['一行一列','一行二列'],['二行一列','二行二列']]
  ```



- sheetFilter 列过滤(只有在data为object下起作用)(可有可无)

  ```javascript
  sheetFilter=['two','one'];

  ```

## 效果预览
   ![Paste_Image.png](img/data.png)

## 浏览器支持
  > ie 10+
