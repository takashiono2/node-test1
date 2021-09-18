var http = require('http');//nodeが用意しているhttpモジュールの読み込み
var settings = require('./settings.js');

console.log(settings);
var server = http.createServer();
var msg;
server.on('request',function(req, res){
  switch(req.url){
    case '/about':
      msg = 'about this page';
      break;
    case '/profile':
      msg = 'about me';
      break;
    default:
      msg = 'wrong page';
      break;
  }
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write(msg);
  res.end();//レスポンス終了
});
server.listen(settings.port,settings.host);//待ち受け状態にして、ポート番号とIPアドレス
console.log("server listening");//サーバーが待ち受け"server listening"だと表示