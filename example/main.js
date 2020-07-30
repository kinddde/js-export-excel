const ExportJsonExcel = require("../src/js-export-excel");

var option = {};
option.datas = [
  {
    sheetData: [
      {
        one: "hyperlink:https://www.baidu.com",
        two: "一行二列",
      },
      {
        one: "二行一列",
        two: "二行二列",
      },
    ],
    sheetName: "sheet",
    sheetFilter: ["two", "one"],
    sheetHeader: ["第一列", "第二列"],
    columnWidths: [20, ""],
  },
  {
    sheetData: [
      {
        one: "一行一列",
        two: "一行二列",
      },
      {
        one: "二行一列",
        two: "二行二列",
      },
    ],
  },
];
var toExcel = new ExportJsonExcel(option);
toExcel.saveExcel();
