import Timer from "./Timer.js";
import Buttons from "./Buttons.js";

var allButtons = new Buttons(
    document.querySelector(".buttonCluster")
);

new Timer(
    document.querySelector(".timer"), allButtons
);

