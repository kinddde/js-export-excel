require('script-loader!file-saver');
require('script-loader!xlsx/dist/xlsx.core.min');
require('script-loader!blob.js/Blob');

/**
 * Created by kin on 2017/5/18.
 *
 * josn导出excel
 * mail：cuikangjie_90h@126.com
 */
 // 过滤
 const changeData = function(data, filter) {
     var data = data,
         filter = filter,
         re = [];
     typeof data[0][0] == 'undefined' ? (function() {
         //对象
         filter ? (function() {
             //存在过滤
             data.forEach(function(obj) {
                 var one = [];
                 filter.forEach(function(no) {
                     one.push(obj[no]);
                 });
                 re.push(one);
             });
         })() : (function() {
             //不存在过滤
             data.forEach(function(obj) {
                 var col = Object.keys(obj);
                 var one = [];
                 col.forEach(function(no) {
                     one.push(obj[no]);
                 });
                 re.push(one);
             });

         })();
     })() : (function() {
         re = data;
     })();
     return re;
 }


 // 转换数据
 const sheet_from_array_of_arrays = function(data) {

     var ws = {};
     var range = {
         s: {
             c: 10000000,
             r: 10000000
         },
         e: {
             c: 0,
             r: 0
         }
     };
     for (var R = 0; R != data.length; ++R) {
         for (var C = 0; C != data[R].length; ++C) {
             if (range.s.r > R) range.s.r = R;
             if (range.s.c > C) range.s.c = C;
             if (range.e.r < R) range.e.r = R;
             if (range.e.c < C) range.e.c = C;
             var cell = {
                 v: data[R][C]
             };
             if (cell.v == null) continue;
             var cell_ref = XLSX.utils.encode_cell({
                 c: C,
                 r: R
             });

             if (typeof cell.v === 'number') cell.t = 'n';
             else if (typeof cell.v === 'boolean') cell.t = 'b';
             else if (cell.v instanceof Date) {
                 cell.t = 'n';
                 cell.z = XLSX.SSF._table[14];
                 cell.v = datenum(cell.v);
             } else cell.t = 's';
             ws[cell_ref] = cell;
         }
     }
     if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
     return ws;
 }


 const s2ab = function(s) {
     var buf = new ArrayBuffer(s.length);
     var view = new Uint8Array(buf);
     for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
     return buf;
 };
 const datenum = function(v, date1904) {
     if (date1904) v += 1462;
     var epoch = Date.parse(v);
     return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
 };


function ExportJsonExcel(option) {
    this.fileName = option.fileName || 'download';
    this.datas = option.datas;
    this.workbook = {
        SheetNames: [],
        Sheets: {}
    };
}

ExportJsonExcel.prototype.instance = function() {
    var _this = this,
        wb = _this.workbook;

    _this.datas.forEach(function(data, index) {
        var sheetHeader = data.sheetHeader || null;
        var sheetData = data.sheetData;
        var sheetName = data.sheetName || 'sheet' + (index + 1);
        var sheetFilter = data.sheetFilter || null;

        var data = changeData(sheetData, sheetFilter);

        if (sheetHeader) {
            data.unshift(sheetHeader)
        }

        var ws = sheet_from_array_of_arrays(data);

        ws['!merges'] = [];

        wb.SheetNames.push(sheetName);
        wb.Sheets[sheetName] = ws;
    });

    var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    });
    saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
    }), _this.fileName + ".xlsx")
}



ExportJsonExcel.prototype.saveExcel = function() {
    this.instance();
};

module.exports =  ExportJsonExcel;
