import Timer from "./Timer.js";
import ButtonHandler from "./ButtonHandler.js";

var allButtons = new ButtonHandler(
    document.querySelector(".buttonCluster")
);

new Timer(
    document.querySelector(".timer"), allButtons
);

