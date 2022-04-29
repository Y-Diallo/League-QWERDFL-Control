export default class Buttons{
    constructor(root){
        root.innerHTML = Buttons.getHTML();
        
        this.elements = {
            control: root.querySelector(".control"),
            button1: root.querySelector(".button1")
        };
        console.log(this.elements);
    }

    updateButtonInfo(timer){//when the timer is constructed it will run this command on every button
        this.elements.control.addEventListener("click", () =>{
            timer.resetTime();
        });
    }
    disable(){//disables the buttons
    }
    enable(){//enablesables the buttons
    }
    sendInfotoLocal(){//takes button press and sends to client computer
    }
    static getHTML(){
        return `
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>
        <button class="control" type="button"></button>`;
    }
}