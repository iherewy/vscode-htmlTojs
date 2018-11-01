import { textEditor } from './textEditor';
/**
 * toJs1
 */
export function toJs1() {
  let editor = new textEditor();
  let config = editor.config;
  let htmlArr = config.text.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
  let str: String = ''
  htmlArr.map((arr: any, index: any) => {
    str += `${index == 0 && config.isIndent ? '' : config.space}'${arr.replace(/(^\s*)|(\s*$)/g, "")}'${index === htmlArr.length - 1 ? ';' : '+'}\n`;
  });
  const selection = editor.editor.selection;
  editor.editor.edit((editBuilder: any) => {//替换选中文本
    editBuilder.replace(selection, str)
  })
}
/**
 * toJs2
 */
export function toJs2() {
  let editor = new textEditor();
  let config = editor.config;
  if(config.text.length<=0) return;
  let htmlArr = config.text.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").split('\n');
  let str: String = `\n${config.space}var html_str = "";\n`;
  htmlArr.map((arr: any, index: any) => {
    str += `${config.space}html_str += "${arr.replace(/(^\s*)|(\s*$)/g, "")}";\n`;
  });
  const selection = editor.editor.selection;
  editor.editor.edit((editBuilder: any) => {
    editBuilder.replace(selection, str)
  })
}