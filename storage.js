let msgE1 = document.getElementById("msg");
let saveBtnE1 = document.getElementById("saveBtn");
let clearBtnE1 = document.getElementById("clearBtn");
let storageKey = "userInput";

saveBtnE1.onclick = function() {
    let msgval = msgE1.value;
    localStorage.setItem(storageKey, msgval);

};
clearBtnE1.onclick = function() {
    msgE1.value = "";
    localStorage.removeItem(storageKey);
};

let storedUserInputVal = localStorage.getItem(storageKey);
if (storedUserInputVal !== null) {
    msgE1.value = storedUserInputVal;
} else {
    msgE1.value = "";
}