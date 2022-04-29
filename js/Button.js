export default class Button{
    constructor(root, key){
        root.innerHTML = this.getHTML();
        this.output = key;
        this.control = root.querySelector(".control"+key);//actual button in html
    }

    updateButtonEvent(timer){//when the timer is constructed it will run this command on every button
        this.control.addEventListener("click", () =>{
            timer.resetTime();
        });
    }
    disable(){//disables the button
        this.control.disabled = "disabled";
    }
    enable(){//enables the button
        this.control.disabled = null;
    }
    sendInfotoLocal(){//takes button press and sends to client computer
        return this.output;
    }
    getHTML(){
        return '<button name="'+key+'" class="ability'+key+'" type="button"></button>';
    }
}