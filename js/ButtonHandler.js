import Button from "./Button.js";

export default class ButtonHandler{
    constructor(root){
        this.keys = new Array("q","w","e","r","d","f","l");
        root.innerHTML = this.getHTML();
        this.buttons= new Array();
        this.keys.forEach(key => {
            this.buttons.push(new Button(root,key));
        })
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
    getHTML(){
        this.html="";
        this.keys.forEach(key => {
            this.html+= 
            '<button name="'+key
            +'" class="ability'+key
            +'" type="button"></button>';
        })
        return this.html;
    }
}