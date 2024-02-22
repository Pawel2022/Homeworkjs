const getr = () => {
    return parseFloat(document.querySelector("#r").value);
};

const geth = () =>{
    return parseFloat(document.querySelector("#h").value);
}

const calculatePPB = document.querySelector("#oblPPC");

const RPPC = (r,h) => {
    return Math.PI *2*r*h;
};


const cleanResultDiv = () => {
    let allResultDivs = document.querySelectorAll(".result-div");
    allResultDivs.forEach((element) => element.remove());
};

const generateResultDiv = () => {
    cleanResultDiv();

    const r = getr();
    const h = geth();
    const resultDiv = document.querySelector("#resulttt");

        let newDiv = document.createElement("div");
        newDiv.className = "result-div";

        const baseArea = RPPC(r, h);
        let baseAreaDiv = document.createElement("div");
        baseAreaDiv.textContent = `Pole powierzchni całkowitej: ${baseArea.toFixed(2)}`;

        resultDiv.appendChild(newDiv);
        resultDiv.appendChild(baseAreaDiv);
};

calculatePPB.addEventListener("click", generateResultDiv);