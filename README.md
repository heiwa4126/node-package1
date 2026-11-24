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
```

`add2`は Node.js 組み込みの`node:test`でテストする。

```json
  "scripts": {
    "test": "node --test"
  },
```

`add2/index.js`と`add2/test/index-test.js`を書く。

`npm test`でテスト実行。

`npm link`でリンク作る。確認は

```bash
ls -lad ~/.npm-global/lib/node_modules/@me/add2
ls -la ~/.npm-global/lib/node_modules/@me/add2/
```

つまり`npm i -g`と同じような効果があるわけだ。

このモジュールを使う側へ移動

```bash
cd ../use-add2
npm link @me/add2
```

で node_modules/の下にリンクができる。

`use-add2/index.js`を書く。`node index.js`で実行。

あとはコードを一生懸命書く。

use-add2 で`npm link @me/add2`の代わりに`npm i ../add2`もできる。
node_modules/の下にコピーされるし
package.json も書き変わる。

## このレポジトリのクローン直後

プロジェクトルートから

```bash
cd add2
npm i
npm t
npm ln
cd ../use-add2
npm ln @me/add2
node index.js
```

## 困る点

`npm ln @me/add2`が package.json が反映されないのは困るな。

package.json の script に書いとくとか?

**solved**

```json
  "scripts": {
    "install": "npm @me/add2"
  }
```

と書いとけばよい。`npm i`直後に ln が実行される。
