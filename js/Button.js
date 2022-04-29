export default class Button{
    constructor(root, key){
        root.innerHTML = Button.getHTML();
        
        this.elements = {
            control: root.querySelector(".control"),
        };
        console.log(this.elements);
    }

    updateButtonInfo(timer){//when the timer is constructed it will run this command on every button
        this.elements.control.addEventListener("click", () =>{
            timer.resetTime();
            this.sendInfotoLocal();
        });
    }
    disableButton(){//disables the button

    }
    enableButton(){//enablesables the button
        //this.elements.control.
    }
    sendInfotoLocal(){//takes button press and sends to client computer

    }
    static getHTML(){
        return '<button class="control" type="button"></button>';
    }
}