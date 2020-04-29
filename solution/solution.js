const jsSHA = require("jssha");

function calc_flag(a, b, c) {
    return b / a + b * (1 / (a - c - 1) - 1 / a);
}

const a = 298974293284332591;
const b = 432978234983249872349872349878;
const c = 2783324234832341;
var sha256 = new jsSHA('SHA-256', "TEXT");
sha256.update(calc_flag(a, b, c).toFixed(5).toString());
var hash = sha256.getHash("HEX");
console.log(hash);

