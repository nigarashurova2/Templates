let todoInputText = document.querySelector(".todoInputText");
let todoAdd = document.querySelector(".todoAdd");
let todoContainer = document.querySelector(".todoContainer");
let todoClear = document.querySelector(".todoClear");

// add function
todoAdd.addEventListener("click", function () {
    let paragraph= document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML = todoInputText.value;
    todoInputText.value = "";

    paragraph.addEventListener("click", function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener("dblclick", function () {
        todoContainer.removeChild(paragraph);
    })


    // clear function
    todoClear.addEventListener("click", function() {
    paragraph.remove();
    })

})


