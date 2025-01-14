export class CounterApp{
    // COUNTER ALE OBIEKTOWO
    private counterInput: HTMLInputElement;
    private incrementButton: HTMLButtonElement;
    private decrementButton: HTMLButtonElement;
    private resetButton: HTMLButtonElement;

    private incrementCounter():void{
        const currentValue = parseInt(this.counterInput.value);
        this.counterInput.value = (currentValue+1).toString();
    }

    private decrementCounter():void{
        const currentValue = parseInt(this.counterInput.value);
        this.counterInput.value = (currentValue - 1).toString();
    }

    private attachEventListeners():void{
        this.incrementButton.addEventListener('click', () => {
            this.incrementCounter();
        })

        this.decrementButton.addEventListener('click', () => {
            this.decrementCounter();
        })

        this.resetButton.addEventListener('click', () => {
            this.counterInput.value = '0';
        })
    }

    constructor(){
        // uchwyty do elementów HTML
        this.counterInput = document.getElementById(`counter`) as HTMLInputElement;
        this.incrementButton = document.getElementById(`increment`) as HTMLButtonElement;
        this.decrementButton = document.getElementById(`decrement`) as HTMLButtonElement;
        this.resetButton = document.getElementById(`reset`) as HTMLButtonElement;

        // ustawia domyślną wartość licznika na 0
        this.counterInput.value='0';

        this.attachEventListeners();
    }

    
}