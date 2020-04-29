const jsSHA = require("jssha");

function calc_flag(a, b, c) {
    var s = b / a;
    var d = 0;
    while (d < c) {
        s += b / (a * a - (1 + 2 * d) * a + d * d + d);
        d += 1;
    }
    return s;
}

const a = 298974293284332591;
const b = 432978234983249872349872349878;
const c = 2783324234832341;
var sha256 = new jsSHA('SHA-256', "TEXT");
sha256.update(calc_flag(a, b, c).toFixed(5).toString());
var hash = sha256.getHash("HEX");

if hash === prompt("mot de passe !") {
    login_admin();
}