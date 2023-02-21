function print(text) {
    let window = document.querySelector(".window");
    let newLine = document.createElement("text");
    newLine.innerText = text;
    window.appendChild(newLine);
}

function input(message = null) {
    let window = document.querySelector(".window");
    let prompt = document.createElement("text");
    prompt.innerText = message;
    window.appendChild(prompt);
    let inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.classList.add("input-box");
    window.appendChild(inputBox);
    inputBox.focus();
    inputBox.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let newLine = document.createElement("text");
            window.appendChild(document.createElement("br"));
            window.appendChild(newLine);
            inputBox.remove();
            print(">>> " + inputBox.value);
        }
    });
}


function main() {
    print("Welcome to the terminal!\n");
    input("What is your name?");
}

window.addEventListener("load", main);


  


  