module.exports = function(html:String,space:String,isIndent:Boolean){
  let htmlArr = html.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
  let str:String = ''
  htmlArr.map((arr, index) => {
    str += `${index == 0&&isIndent?'':space}'${arr.replace(/(^\s*)|(\s*$)/g, "")}'${index === htmlArr.length - 1 ? ';' : '+'}\n`;
  });
  return str;
}