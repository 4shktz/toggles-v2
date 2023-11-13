const enigmaInputs = document.querySelectorAll(".enigma-input");
const cb = document.querySelectorAll("input");

function solve() {
    for (let i = 0; i < cb.length; i++) {
        let isEnigmaInput = false;
        for (let j = 0; j < enigmaInputs.length; j++) {
            if (cb[i] === enigmaInputs[j]) {
                isEnigmaInput = true;
            }
        }
        if (!isEnigmaInput && !cb[i].checked) {
            cb[i].checked = true;
        }
    }
}

for (let i = 0; i < enigmaInputs.length; i++) {
    enigmaInputs[i].addEventListener("click", solve);
}

for (let i = 0; i < cb.length; i++) {
    let isEnigmaInput = false;
    for (let j = 0; j < enigmaInputs.length; j++) {
        if (cb[i] === enigmaInputs[j]) {
            isEnigmaInput = true;
        }
    }

    if (!isEnigmaInput) {
        cb[i].addEventListener("click", () => {
            const rdm = Math.floor(Math.random() * cb.length);
            cb[rdm].click();
        });
    }
}

let k = 0;

for (let i = 0; k < 8 && 3 < cb.length; i++) {
    const randomIndex = Math.floor(Math.random() * cb.length);
    if (!cb[randomIndex].checked) {
        cb[randomIndex].click();
        k++;
    }
}