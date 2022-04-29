import Button from "./Button.js";

export default class ButtonHandler{
    constructor(root){
        this.buttons = new Array(
            new Button(root,"q")
            ,new Button(root,"w")
            ,new Button(root,"e"));
        
        console.log(this.buttons);
    }

    updateButtonsInfo(timer){//when the timer is constructed. creates event listeners on every button
        this.buttons.forEach(button => {
            button.updateButtonEvent(timer);
        })
    }
    disable(){//disables the buttons
        this.buttons.forEach(button => {
            button.disable();
        })
    }
    enable(){//enablesables the buttons
        this.buttons.forEach(button => {
            button.enable();
        })
    }
}