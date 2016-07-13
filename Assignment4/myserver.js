var cal =require("./calc");
var http=require('http');
var url =require('url');
http.createServer(function(req,res){
var data = url.parse(req.url,true);
res.writeHead(200,{"content-type":"text/html"});
 var data1=data.pathname;
 var data2=data1.split("/");
 res.write(" Arthimetic calculation on server via URL elements </br>");
 res.write(" Operation="+(data2[1])+"</br>");
 res.write("  Number a="+data2[2]+"</br>");
 res.write("  Number b="+data2[3]+"</br>");
  var func = data2[1];
switch (func) {
  case "add":
          res.write("   Result="+cal.add(parseInt(data2[2]),parseInt(data2[3])));
    break;
    case "sub":
            res.write("   Result="+cal.sub(parseInt(data2[2]),parseInt(data2[3])));
      break;
      case "multi":
              res.write("   Result="+cal.multi(parseInt(data2[2]),parseInt(data2[3])));
        break;
        case "divd":
                res.write("   Result="+cal.divd(parseInt(data2[2]),parseInt(data2[3])));
          break;
  default:
    res.write("Hello </br> You typed wrong!!! </br> Please give only add sub multi divd operations and valid numbers ");
}
}).listen(8080);
console.log("hello");
console.log("addition = "+cal.add(1,2));
console.log("substraction = "+cal.sub(6,2));
console.log("Muliply ="+cal.multi(6,2));
console.log("Devide = "+cal.divd(6,2));
