import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('testytest.createBoilerplate', async function () {

    if (!vscode.workspace || !vscode.workspace.workspaceFolders) {
      return vscode.window.showErrorMessage('Please open a project folder first');
    }

    const folderPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Document</title>
  <link rel="stylesheet" href="app.css" />
</head>
<body>
  <script src="app.js"></script>
</body>
</html>`;

    fs.writeFile(path.join(folderPath, 'index.html'), htmlContent, (err) => {
      if (err) {
        return vscode.window.showErrorMessage('Failed to create boilerplate file!');
      }
      vscode.window.showInformationMessage('Created boilerplate file');
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
