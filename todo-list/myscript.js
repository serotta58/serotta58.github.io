var strInput = document.getElementById('strInput');
var mainList = document.getElementById('mainList');
var submitBtn = document.getElementById('submitBtn');

function addNewListItem(itemStr) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(itemStr));
    addDeleteBtn(li);
    mainList.appendChild(li);
    strInput.value = "";
}

function addToListAfterClick() {
    if (strInput.value.length > 0) {
        addNewListItem(strInput.value);
    }
}

function addToListAfterReturn(event) {
    if (strInput.value.length > 0 && event.keyCode === 13) {
        addNewListItem(strInput.value);
    }
}

function processItemClick(event) {
    var target = event.target;
    var tagName = target.tagName;
    var parent = target.parentElement;
    // Toggle done when item clicked
    if (tagName === "LI" && parent === mainList) {
        target.classList.toggle("done");
    }
    // Delete item if its delete button is clicked
    if (tagName === "BUTTON" && parent.tagName === "LI") {
        parent.parentElement.removeChild(parent);
    }
}

function addDeleteBtn(element) {
    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode("Delete"));
    element.appendChild(btn);
}

submitBtn.addEventListener("click", addToListAfterClick);
strInput.addEventListener("keypress", addToListAfterReturn);
mainList.addEventListener('click', processItemClick);

for (let i=0; i < mainList.childElementCount; i++) {
//mainList.children.forEach(element => {
    var element = mainList.children[i];
    addDeleteBtn(element);
};