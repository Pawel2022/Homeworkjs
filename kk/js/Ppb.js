const getr = () => {
    return parseFloat(document.querySelector("#r").value);
};
const geth = () =>{
    return parseFloat(document.querySelector("#h").value);
}

const oblPPB = document.querySelector("#oblPPB");

const RPPB = (r, h) => {
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
    const resultDiv = document.querySelector("#resultt");

        let newDiv = document.createElement("div");
        newDiv.className = "result-div";

        const baseArea = RPPB(r, h);
        let baseAreaDiv = document.createElement("div");
        baseAreaDiv.textContent = `Pole powierzchni bocznej: ${baseArea.toFixed(2)}`;

        resultDiv.appendChild(newDiv);
        resultDiv.appendChild(baseAreaDiv);
};

oblPPB.addEventListener("click", generateResultDiv);