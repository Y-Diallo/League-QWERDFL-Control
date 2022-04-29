export default class ButtonHandler{
    constructor(root){
        root.innerHTML = Buttons.getHTML();
        
        this.control= root.querySelector(".control");

        console.log(this.control);
    }

    updateButtonsInfo(timer){//when the timer is constructed it will run this command on every button
        this.control.addEventListener("click", () =>{
            timer.resetTime();
            console.log(this.control.name);
        });
    }
    disable(){//disables the buttons
        this.control.disabled = "disabled";
    }
    enable(){//enablesables the buttons
        this.control.disabled = null;
    }
    static getHTML(){
        return `
        <button name="q" class="control" type="button"></button>
        <button name="w" class="ability2" type="button"></button>
        <button name="e" class="ability3" type="button"></button>
        <button name="r" class="ultimate" type="button"></button>
        <button name="d" class="flash" type="button"></button>
        <button name="f" class="teleport" type="button"></button>
        <button name="l" class="ping" type="button"></button>`;
    }
}