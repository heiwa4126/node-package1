# node-package1

自分のローカルなパッケージテスト。

```bash
mkdir package1 ; cd package1
mkdir add2 use-add2
cd add2
npm init --scope=me -y    # "me"は仮
cd ../use-add
npm init -y
cd ../add2
npm install --save-dev mocha
```

add2のpackage.jsonをMocha用に書き換える
```json
  "scripts": {
    "test": "node_modules/mocha/bin/mocha.js"
  },
```

`add2/index.js` と `add2/test/index-test.js` を書く。

`npm test` でテスト実行。

`npm link` でリンク作る。確認は
```bash
ls -lad ~/.npm-global/lib/node_modules/@me/add2
ls -la ~/.npm-global/lib/node_modules/@me/add2/
```
つまり `npm i -g`と同じような効果があるわけだ。


このモジュールを使う側へ移動
```bash
cd ../use-add2
npm link @me/add2
```
で node_modules/の下にリンクができる。

`use-add2/index.js` を書く。`node index.js` で実行。


あとはコードを一生懸命書く。

use-add2で `npm link @me/add2` の代わりに `npm i ../add2` もできる。
node_modules/の下にコピーされるし
package.jsonも書き変わる。
