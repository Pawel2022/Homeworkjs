class kal {
    constructor() {
        this.userInput = document.getElementById("input-number");
        this.addBtn = document.getElementById("btn-add");
        this.subtractBtn = document.getElementById("btn-subtract");
        this.multiplyBtn = document.getElementById("btn-multiply");
        this.divideBtn = document.getElementById("btn-divide");

        this.currentResultOutput = document.getElementById("current-result");
        this.currentCalculationOutput = document.getElementById(
            "current-calculation"
        );

        this.currentResult = 0;

        this.addBtn.addEventListener("click", this.dod.bind(this));
        this.subtractBtn.addEventListener("click", this.od.bind(this));
        this.multiplyBtn.addEventListener("click", this.mno.bind(this));
        this.divideBtn.addEventListener("click", this.dziel.bind(this));
    }

    dod() {
        const inputValue = parseInt(this.userInput.value);
        this.currentResult += inputValue; 
        this.outputResult(this.currentResult, `Dodaj ${inputValue}`);
    }

    od() {
        const inputValue = parseInt(this.userInput.value);
        this.currentResult -= inputValue; 
        this.outputResult(this.currentResult, `Odejmnij ${inputValue}`);
    }

    mno() {
        const inputValue = parseInt(this.userInput.value);
        this.currentResult *= inputValue; 
        this.outputResult(this.currentResult, `Pomnoz by ${inputValue}`);
    }

    dziel() {
        const inputValue = parseInt(this.userInput.value);
        if (inputValue !== 0) {
            this.currentResult /= inputValue; 
            this.outputResult(this.currentResult, `Podziel przez by ${inputValue}`);
        } else {
            this.outputResult(this.currentResult, "Nie zapomniałem");
        }
	}
	
    outputResult(result, text) {
        this.currentResultOutput.textContent = result;
        this.currentCalculationOutput.textContent = text;
    }
}

const app = new kal();
