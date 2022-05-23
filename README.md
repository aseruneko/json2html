# json2html
This .js makes .json to HTML elements concisely and clearly. Also can customize output elements by adding attributes to .json.

## Usage

/dist/json2html.jsを読み込むことで、html文書内のid="json2html"以下にdata.jsonの中身が展開されます。

## ForDev

webpack + typescript によりこのプロジェクトは作成されています。
```:sh
$ npm i
$ npm start build
```
にて、src内のjson2html.tsをjson2html.jsへと変換できます。

ただし、local環境においては、GoogleChromeはfileプロトコルでアクセスされたhtmlにおいてJSONファイルを読み込まない(CORSによる)ことに注意し、VSCodeのLive Serverエクステンションなどの使用などで回避してください。