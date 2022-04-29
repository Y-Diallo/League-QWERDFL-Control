import Timer from "./Timer.js";
export default class Button{
    constructor(root, key){
        this.output = key;
        this.control = root.querySelector(".ability"+this.output);//actual button in html
    }

    updateButtonEvent(timer){//when the timer is constructed it will run this command on every button
        this.control.addEventListener("click", () =>{
            timer.resetTime();
            this.sendInfotoLocal();
        });
    }
    disable(){//disables the button
        this.control.disabled = "disabled";
    }
    enable(){//enables the button
        this.control.disabled = null;
    }
    sendInfotoLocal(){//takes button press and sends to client computer
        console.log(this.output);
        return this.output;
    }

}