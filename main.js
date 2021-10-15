const fs = require("fs"); 
const express = require("express");

const app = express();

function showpage(page, req, res) {
	fs.readFile(page, (err, data) => {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		return res.end();
	});
}

app.use(express.static("public"));

app.get("/", (req, res) => {
	showpage("index.html", req, res);
});

app.get("/entries.html", (req, res) => {
	showpage("entries.html", req, res);
});

app.get("/prodlog.html", (req, res) => {
	showpage("prodlog.html", req, res);
});

app.listen(8080);
console.log("Server is listening on port 8080");
