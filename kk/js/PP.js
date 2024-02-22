const getr = () => {
    return parseFloat(document.querySelector("#r").value);
};

const oblpp = document.querySelector("#oblpp");

const RPP = (r) => {
    return Math.PI *r*r;
};


const cleanResultDiv = () => {
    let allResultDivs = document.querySelectorAll(".result-div");
    allResultDivs.forEach((element) => element.remove());
};

const generateResultDiv = () => {
    cleanResultDiv();

    const r = getr();
    const resultDiv = document.querySelector("#result");

        let newDiv = document.createElement("div");
        newDiv.className = "result-div";

        const baseArea = RPP(r);
        let baseAreaDiv = document.createElement("div");
        baseAreaDiv.textContent = `Pole podstawy: ${baseArea.toFixed(2)}`;

        resultDiv.appendChild(newDiv);
        resultDiv.appendChild(baseAreaDiv);
};

oblpp.addEventListener("click", generateResultDiv);