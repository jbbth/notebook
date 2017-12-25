var http = require("http");

var fs = require("fs");
var path = require("path");

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: false
});

var website = fs.readFileSync("app/header.html").toString();

var directory = fs.readdirSync("notes");
var articles = directory.filter(function(article){
	return article.endsWith(".md");
});

articles.reverse();

if(articles.length > 0){
	for(var i = 0; i < articles.length; i++){
		var articleFile = path.join("notes", articles[i]);
		website += "<article>";
		website += md.render(fs.readFileSync(articleFile).toString());
		website += "<div class='mtime'>" + fs.lstatSync(articleFile).mtime + "</div>";
		website += "</article>";
	}
}

website += fs.readFileSync("app/footer.html").toString();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(website);
}).listen(3010);

