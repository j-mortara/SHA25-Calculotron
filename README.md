# Stay Home April - Problème 11
## Calculotron

Le savant fou Doofenshmirtz a créé une machine qui fait fondre tout les sous-vêtements dans un rayons de 100km. Perry l'ornithorynque nous a récupéré le code d'authentification, arriverez-vous à trouver le bon mot de passe ? Nos techniciens n'arrivent pas à faire fonctionner le code, peut-être faut-il utiliser un ordinateur quantique ?

```js
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
```

Soumettez le mot de passe correct, vous gagnerez 50-100 points en fonction de votre rapidité.

Ce problème a été créé par plean, merci à lui :)


### Solution

La solution ainsi que sa démonstration sont présentes dans le dossier [solution](solution).