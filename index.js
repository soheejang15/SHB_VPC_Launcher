let categorys = [{isOpened: false, category: "VPC란", qaList: [{question: "123", answer: "1234"}, {question: "sdfsd", answer: "sdfds"}]}, {isOpened: false,category: "VPC란",  qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},];

function createNewNode(tag, id, className, text) {
    let newNode = document.createElement(tag);
    if(id) newNode.id = id;
    if(className) newNode.className = className;
    if(text){
        let textNode = document.createTextNode(text);
        newNode.appendChild(textNode);
    }
    
    return newNode;
}

let showList = function() {
    let container = document.getElementById("category-container");
    
    for (let i in categorys){
        let newCategoryItem = createNewNode("li", null, "category-listitem", null);
        let newText = createNewNode("p", null, null, categorys[i].category);
        let newImg = createNewNode("img", null, null, null);
        if(categorys[i].isOpened) newImg.src = "./assets/sort-up.png";
        else newImg.src =  "./assets/sort-down.png";

        newCategoryItem.appendChild(newText);
        newCategoryItem.appendChild(newImg);
        container.appendChild(newCategoryItem)
    }
}

showList();


let handleClickCategory = function() {
    
}


let item = document.getElementById("123");