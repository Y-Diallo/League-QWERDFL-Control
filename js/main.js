import Timer from "./Timer.js";
import Button from "./Button.js";

var qButton = new Button(
    document.querySelector(".buttonCluster"), "q"
);
var wButton = new Button(
    document.querySelector(".buttonCluster"), "w"
);
const allButtons = new Array(qButton,wButton);
new Timer(
    document.querySelector(".timer"), allButtons
);

