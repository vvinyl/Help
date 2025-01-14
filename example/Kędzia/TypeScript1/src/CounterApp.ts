export class CounterApp{
    private counterInput: HTMLInputElement;
    private incrementButton: HTMLButtonElement;
    private decrementButton: HTMLButtonElement;

    constructor(){
        this.counterInput = document.getElementById("counter") as HTMLInputElement;
        this.incrementButton = document.getElementById("increment") as HTMLButtonElement;
        this.decrementButton = document.getElementById("decrement") as HTMLButtonElement;

        this.counterInput.value = "0";

        this.attachEventListeners();
    }

        private attachEventListeners(): void{
            this.incrementButton.addEventListener("click", ()=>{
                this.incrementCounter();
            });

            this.decrementButton.addEventListener("click",()=>{
                this.decrementCounter();
            })
        }

        private incrementCounter(): void{;
            const currentValue = parseInt(this.counterInput.value, 10);
            this.counterInput.value = (currentValue +1).toString();
        }

        private decrementCounter(): void{;
            const currentValue = parseInt(this.counterInput.value, 10);
            this.counterInput.value = (currentValue -1).toString();
        }
}