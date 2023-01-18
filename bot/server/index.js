var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

const PORT = 3000 || 8999;

const resources = {
  react: {
    d: "https://reactjs.org",
    yt: "https://www.youtube.com/watch?v=bMknfKXIFA8",
    vc: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/?src=sac&kw=react",
  },
  css: {
    d: "https://www.w3schools.com/css/",
    yt: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
    vc: "https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/",
  },
  javascript: {
    d: "https://javascript.info",
    yt: "https://www.youtube.com/watch?v=PkZNo7MFNFg&t=26s",
    vc: "https://www.udemy.com/course/the-complete-javascript-course/",
  },
  java: {
    d: "https://www.javatpoint.com/java-tutorial",
    yt: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
    vc: "https://www.udemy.com/course/java-programming-tutorial-for-beginners/",
  },
  python: {
    d: "https://www.w3schools.com/python/",
    yt: "https://www.youtube.com/watch?v=XKHEtdqhLK8",
    vc: "https://www.udemy.com/course/100-days-of-code/",
  },
  php: {
    d: "https://www.php.net/manual/en/",
    yt: "https://www.youtube.com/watch?v=OK_JCtrrv-c",
    vc: "https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/",
  },
  csharp: {
    d: "https://www.javatpoint.com/c-sharp-tutorial",
    yt: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
    vc: "https://www.udemy.com/course/complete-csharp-masterclass/",
  },
  go: {
    d: "https://go.dev/doc/",
    yt: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
    vc: "https://www.udemy.com/course/go-the-complete-developers-guide/",
  },
  typescript: {
    d: "https://www.typescriptlang.org/docs/",
    yt: "https://www.youtube.com/watch?v=BCg4U1FzODs",
    vc: "https://www.udemy.com/course/understanding-typescript/",
  },
  sql: {
    d: "https://www.w3schools.com/sql/",
    yt: "https://www.youtube.com/watch?v=ER8oKX5myE0&t=471s",
    vc: "https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/",
  },
};

app.get("/", (req, res) => {
  res.send("Hello! I am a bot...");
});

app.get("/resources", (req, res) => {
  const technology = req.query.technology;
  const type = req.query.type;
  if (technology in resources) {
    res.json(resources[technology][type]);
  } else {
    res.status(404).json({ error: `No resources found for ${technology}` });
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
});
