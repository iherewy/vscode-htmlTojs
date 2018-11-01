import { window } from 'vscode';
export class textEditor {
  public editor: any;
  public config: any;
  public constructor() {
    this.editor = window.activeTextEditor;
    this.config = {
      text: this.text(), space: this.space(), isIndent: this.isIndent()
    };
  }
  public text() {
    const selection = this.editor.selection;
    let text = this.editor.document.getText(selection);//获取选中文字
    return text;
  }
  public space() {
    const line = this.editor.selection.active.line; // 当前行
    const lineProperty = this.editor.document.lineAt(line); // 当前行的属性
    let space = '', i = 0;
    while (i < lineProperty.firstNonWhitespaceCharacterIndex) {
      space += ' ';
      i++;
    }
    return space;
  }
  public isIndent() {
    const selection = this.editor.selection;
    let isIndent = selection.start.character > 0;//首行是否需要空格
    return isIndent;
  }
}