let categorys = [{isOpened: false, category: "VPC란", qaList: [{question: "123", answer: "1234"}, {question: "sdfsd", answer: "sdfds"}]}, 
{isOpened: false,category: "오디오 설정",  qaList: [{question: "헤드셋/마이크가 작동하지 않습니다.", answer: `국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.

제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 대통령의 선거에 관한 사항은 법률로 정한다. 국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.

모든 국민은 종교의 자유를 가진다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다.

전직대통령의 신분과 예우에 관하여는 법률로 정한다. 국회는 의장 1인과 부의장 2인을 선출한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.`}, {question: "123", answer: "1234"}]},
{isOpened: false,category: "?",  qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},
{isOpened: false,category: "?",  qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},
{isOpened: false,category: "?",  qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},
{isOpened: false,category: "?",  qaList: [{question: "asdf", answer: "asdfd"}, {question: "123", answer: "1234"}]},];

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
    container.remove();
    let upper = document.querySelector("section");
    container = createNewNode("ul", "category-container", null, null);
    upper.appendChild(container);
    
    for (let i in categorys){
        let newCategoryItem = createNewNode("li", null, "category-listitem", null);
        let upperCon = createNewNode("div", null, "upperCon", null);
        let newText = createNewNode("p", null, null, categorys[i].category);
        let newImg = createNewNode("img", null, "open_btn", null);
        let lowerCon = createNewNode("div", null, "lowerCon", null);
        
        newImg.setAttribute("src", categorys[i].isOpened? "./assets/sort-up.png" :  "./assets/sort-down.png" );

        upperCon.appendChild(newText);
        upperCon.appendChild(newImg);
        newCategoryItem.appendChild(upperCon);
        newCategoryItem.key = i; 

        if(categorys[i].isOpened) {
            categorys[i].qaList.forEach(j => {
                let questionItem = createNewNode('div', null, 'questionItem', j.question);
                lowerCon.appendChild(questionItem);
                newCategoryItem.appendChild(lowerCon);

                questionItem.addEventListener('click',function(e) {
                    console.log(j )
                    e.stopPropagation();
                    openQA(j);
                });
            });
        }

        container.appendChild(newCategoryItem);

        newCategoryItem.addEventListener('click',function() {
            categorys[i].isOpened = !categorys[i].isOpened;

            showList();
        });

    }
}

showList();

function openQA ({question, answer, }) {
    let background = createNewNode('div', 'modal-background', null, null);
    document.querySelector('body').appendChild(background);
    background.addEventListener('click', function() {
        background.remove();
    });

    let modalContainer = createNewNode('div', 'modal-container', null, null);
    background.appendChild(modalContainer);

    let modalTitle = createNewNode("h1", "modal-title", null, question);
    modalContainer.appendChild(modalTitle);

    let modalContent = createNewNode("p", "modal-content-text", null, answer);
    modalContainer.appendChild(modalContent);
}