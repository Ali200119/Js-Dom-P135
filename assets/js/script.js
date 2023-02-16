"use strict";

let header = document.querySelector("main .header h1");
let input = document.querySelector("main .input input");
let button = document.querySelector("main button");
let list = document.querySelector("main .list ul");
let listItems = [];

input.addEventListener("keyup", function () {
    header.innerText = input.value;
})

button.addEventListener("click", function () {
    if (input.value != "") {
        let items = document.querySelectorAll("main .list ul li");

        for (const item of items) {
            if (item.innerText.toLowerCase() == input.value.toLowerCase()) {
                return;
            }
        }

        let li = document.createElement("li");
        li.innerText = input.value;
        list.append(li);
        listItems.push(li);
        input.value = "";
    }
})

for (const item of listItems) {
    item.addEventListener("click", function () {
        this.remove();
    })
}