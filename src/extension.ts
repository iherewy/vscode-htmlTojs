'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
var htmlTojs = require('./htmlTojs');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "htmltojs" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.toJs', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        let editor = vscode.window.activeTextEditor;
        if(!editor){
          return;
        }
        const selection = editor.selection;
        const line = editor.selection.active.line; // 当前行
        const lineProperty = editor.document.lineAt(line); // 当前行的属性
        let text = editor.document.getText(selection);//获取选中文字
        let isIndent = selection.start.character>0;//首行是否需要空格
        console.log(editor.selection)
        let space = '',i = 0;
        while(i<lineProperty.firstNonWhitespaceCharacterIndex){
          space += ' ';
          i++;
        }
        editor.edit(function(editBuilder){
          editBuilder.replace(selection,htmlTojs(text,space,isIndent));
        })
        vscode.window.showInformationMessage(text);
    });
    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
