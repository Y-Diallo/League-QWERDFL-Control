export default class Timer{
    constructor(root, buttonArray){
        root.innerHTML = Timer.getHTML();

        this.timerElements = {
            minutes: root.querySelector(".minutes"),
            seconds: root.querySelector(".seconds"),
        };
        console.log(this.timerElements);

        this.interval = null;
        this.remainingSeconds = 0;
        this.buttons = buttonArray;
        this.buttons.array.forEach(button => {button.updateButtonInfo(this);});
    }
    
    resetTime(){//method for button to reset timer after being pressed, method where input comes in
        if(this.remainingSeconds === 0 ){//if there are no remaining seconds
            //eset to 120 seconds and start timer
            this.remainingSeconds = 120;
            this.start();
        }
        buttons.array.forEach(element => 
            element.disableButton()
        ); 
    }
    updateInterfaceTime(){//updates interface
        const minutes = Math.floor(this.remainingSeconds/60);
        const seconds = this.remainingSeconds % 60;
        this.timerElements.minutes.textContent = minutes.toString();
        this.timerElements.seconds.textContent = seconds.toString().padStart(2,"0");
    }
    start(){// will only be called on 120 seconds after full 120 seconds
        this.interval = setInterval(() => {
            if(this.remainingSeconds > 0)(this.remainingSeconds--);
            this.updateInterfaceTime;

            if(this.remainingSeconds === 0){
                this.stop();    
            }
        }, 1000);

        buttons.array.forEach(element => {
            element.enableButton();
        }); 
    }
    static getHTML(){
        return `
        <span class="timer minutes">0</span>
        <span class="timer">:</span>
        <span class="timer seconds">00</span>
        `;
    }
}