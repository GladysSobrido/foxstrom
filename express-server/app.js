require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./lib/connect");
const Plz = require("./models/plz");
const Verbrauch = require("./models/verbrauch");
app.use(cors());

app.get("/", (req, res) => res.type("html").send(html));

app.get("/verbrauch", async (req, res) => {
  await connect();
  const verbrauch = await Verbrauch.find();
  if (!verbrauch.length) {
    return res.json({ message: "Consumption not found" });
  }
  return res.json(verbrauch);
});
app.get("/verbrauch/:group", async (req, res) => {
  await connect();
  const { group } = req.params;
  const verbrauch = await Verbrauch.findOne({ group: Number(group) });
  if (verbrauch) {
    res.json(verbrauch);
  } else {
    res.status(404).json({ message: "Consumption not found" });
  }
});

app.get("/plz", async (req, res) => {
  await connect();
  const plz = await Plz.find();
  if (!plz.length) {
    return res.json({ message: "Postleitzahl list not found" });
  }
  return res.json(plz);
});
app.get("/plz/:range", async (req, res) => {
  await connect();
  const { range } = req.params;
  console.log("range: ", range);
  const plz = await Plz.findOne({ range: Number(range) });
  if (plz) {
    res.json(plz);
  } else {
    res.status(404).json({ message: "Postalcode not found" });
  }
});

const server = app.listen(port, () =>
  console.log(`Express app listening on port ${port}!`)
);

app.get;
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to the backend of FoxStrom</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Welcome to the backend of FoxStrom.
    </section>
  </body>
</html>
`;
