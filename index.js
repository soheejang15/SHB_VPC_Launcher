let categorys = [{isOpened: false, category: "VPC란", qaList: [{question: "123", answer: "1234"}, {question: "sdfsd", answer: "sdfds"}]}, {isOpened: false, qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},];

function createNewNode(tag, id, className, text, img) {
    let newNode = document.createElement(tag);
    newNode.id = id;
    newNode.className = className;
    let textNode = document.createTextNode(text);
    newNode.appendChild(textNode);

    return newNode;
}

let showList = function() {
    let container = document.getElementById("category-container");
    
    for (let i in categorys){
            
    }
}

showList();


let handleClickCategory = function() {
    
}


let item = document.getElementById("123");