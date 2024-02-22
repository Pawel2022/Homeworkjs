const getr = () => {
    return parseFloat(document.querySelector("#r").value);
};

const geth = () =>{
    return parseFloat(document.querySelector("#h").value);
}

const calculateV = document.querySelector("#oblV");

const RV = (r,h) => {
    return Math.PI *r*r*h;
};


const cleanResultDiv = () => {
    let allResultDivs = document.querySelectorAll(".result-div");
    allResultDivs.forEach((element) => element.remove());
};

const generateResultDiv = () => {
    cleanResultDiv();

    const r = getr();
    const h = geth();
    const resultDiv = document.querySelector("#resultttt");

        let newDiv = document.createElement("div");
        newDiv.className = "result-div";

        const baseArea = RV(r, h);
        let baseAreaDiv = document.createElement("div");
        baseAreaDiv.textContent = `objetosc: ${baseArea.toFixed(2)}`;

        resultDiv.appendChild(newDiv);
        resultDiv.appendChild(baseAreaDiv);
};

calculateV.addEventListener("click", generateResultDiv);