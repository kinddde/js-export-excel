# js-export-excel

> 纯 js 导出 excel

## tip

> Bug please mention on [issues](https://github.com/cuikangjie/js-export-excel/issues)

## download

    npm install js-export-excel

    or

    yarn add js-export-excel

## documentation

```js
// 直接导出文件
const ExportJsonExcel = require("js-export-excel");

var option = {};

option.fileName = "excel";

option.datas = [
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
    sheetName: "sheet",
    sheetFilter: ["two", "one"],
    sheetHeader: ["第一列", "第二列"],
    columnWidths: [20, 20],
  },
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
  },
];

var toExcel = new ExportJsonExcel(option); //new
toExcel.saveExcel(); //保存
```

```js
// 导出Blob，支持压缩等其他操作
const ExportJsonExcel = require("js-export-excel");
const JSZip = require("jszip");

var option = {};

option.fileName = "excel";

option.saveAsBlob = true;

option.datas = [
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
    sheetName: "sheet",
    sheetFilter: ["two", "one"],
    sheetHeader: ["第一列", "第二列"],
    columnWidths: [20, 20],
  },
  {
    sheetData: [
      { one: "一行一列", two: "一行二列" },
      { one: "二行一列", two: "二行二列" },
    ],
  },
];

var toExcel = new ExportJsonExcel(option); //new

let file = toExcel.saveExcel();

// 压缩文件
var zip = new JSZip();

// 多个excel 依次加入(fileName不能相同)
zip.file(file.name, file);

zip.generateAsync({ type: "blob" }).then(function (content) {
  // see FileSaver.js
  saveAs(content, "example.zip"); // 下载文件
});
```

## option

- fileName 下载文件名(默认：download)

- saveAsBlob 导出文件流(默认： false)

- datas 数据

  ```js
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

### sheet option

- sheetName sheet 名字(可有可无)(默认 sheet1)

- sheetHeader 标题（excel 第一行数据）

  ```javascript
  sheetHeader: ["第一列", "第二列"];
  ```

- columnWidths 列宽 非必须

  ```javascript
  // number 屏幕宽度为100 20即为 1/5屏幕大小
  columnWidths = [20, ""];
  ```

- sheetData 数据源(必须)

  > 支持超链接解析，格式为 “hyperlink:site url”。eg： hyperlink:<https://www.baidu.com>

  ```javascript
  <!--两种形式-->
  <!--第一种 object-->
  [{one:'一行一列',two:'一行二列'},{one:'二行一列',two:'二行二列'}]
  <!--第二种 arrary-->
  [['一行一列','一行二列'],['二行一列','二行二列']]
  ```

- sheetFilter 列过滤(只有在 data 为 object 下起作用)(可有可无)

  ```javascript
  sheetFilter = ["two", "one"];
  ```

## 浏览器支持

> ie 10+
