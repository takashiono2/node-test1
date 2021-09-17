var http = require('http');//nodeが用意しているhttpモジュールの読み込み
var server = http.createServer();//http.createServerを使う
server.on('request',function(req, res){//onで飛んでくるイベントを結びつける。reqが入ったらresを返す。
  res.writeHead(200,{'Content-Type': 'text/plain'});//httpで渡して成功したら（200番）で'Content-Type': 'text/plain'を返す
  res.write('hello world');//nodeがhello worldを表示
  res.end();//レスポンス終了
});
server.listen(3306,'192.168.128.101')//待ち受け状態にして、ポート番号とIPアドレス
console.log("server listening")//サーバーが待ち受け"server listening"だと表示