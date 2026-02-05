<<<<<<< HEAD


const questionBtn = document.querySelector("#question-btn");
const questionContainer = document.querySelector("#question-container");
const editView = document.querySelector(".edit-view");
const editContainer = document.querySelector(".edit-container");
const createClick = document.querySelector("#create-click");
const inputChoiceA = document.querySelector(".input-choiceA");
const inputChoiceB = document.querySelector(".input-choiceB");
const inputChoiceC = document.querySelector(".input-choiceC");
const inputChoiceD = document.querySelector(".input-choiceD");
const inputCorrect = document.querySelector(".input-correct");
const inputTitle = document.querySelector(".input-title");
let addingQuestion = false;

let questions = JSON.parse(localStorage.getItem("questions")) || [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  
];

let currentEdit = null;
displayQuestion();
function displayQuestion() {
    questionContainer.innerHTML = "";
    questions.forEach(question => {

    const addQuestionContainer = document.createElement("div");
    const addQuestion = document.createElement("div");
    const addDelete = document.createElement("div");
    const addEdit = document.createElement("div");
    const addTitle = document.createElement("div");
    addEdit.innerText = "📝";
    addDelete.innerText = "🗑️";
    addQuestion.innerText = question.title;
    addQuestionContainer.appendChild(addQuestion);
    addQuestionContainer.appendChild(addEdit);
    addQuestionContainer.appendChild(addDelete);
    addQuestionContainer.appendChild(addTitle);
    questionContainer.appendChild(addQuestionContainer);
    
    addQuestionContainer.classList.add("question-style");
    addDelete.classList.add("hovered");
    addEdit.classList.add("hovered");
    addDelete.addEventListener("click", function(){
        const index = questions.indexOf(question);
        questions.splice(index, 1);
        localStorage.setItem("questions", JSON.stringify(questions));
        displayQuestion();
        
    });
    addEdit.addEventListener("click", function(){
        editView.style.display = "block";
        editContainer.style.display = "none";
        inputTitle.value = question.title;
        inputChoiceA.value = question.choiceA;
        inputChoiceB.value = question.choiceB;
        inputChoiceC.value = question.choiceC;
        inputChoiceD.value = question.choiceD;
        inputCorrect.value = question.correct;
        currentEdit = question;
        

    });


});
}


    createClick.addEventListener("click", function(){
        if (addingQuestion == true){
            const newQuestionObj = {
            title: inputTitle.value,
            choiceA: inputChoiceA.value,
            choiceB: inputChoiceB.value,
            choiceC: inputChoiceC.value,
            choiceD: inputChoiceD.value,
            correct: inputCorrect.value
        };
            questions.push(newQuestionObj);
            
            
        }
        else if (currentEdit !== null)
            {
            currentEdit.title = inputTitle.value;
            currentEdit.choiceA = inputChoiceA.value;
            currentEdit.choiceB = inputChoiceB.value;
            currentEdit.choiceC = inputChoiceC.value;
            currentEdit.choiceD = inputChoiceD.value;
            currentEdit.correct = inputCorrect.value;
           
            }
            localStorage.setItem("questions", JSON.stringify(questions));
            inputTitle.value = "";
            inputChoiceA.value = "";
            inputChoiceB.value = "";
            inputChoiceC.value = "";
            inputChoiceD.value = "";
            inputCorrect.value = "";

            
            currentEdit = null;

            editView.style.display = "none";
            editContainer.style.display = "block";
            addingQuestion = false;
            displayQuestion();
        
    });

    function cancelClick() {
        editView.style.display = "none";
        editContainer.style.display = "block";
    };

    function newQuestion() {
        addingQuestion = true;
        editView.style.display = "block";
        editContainer.style.display = "none";

        

        
    }

    


=======


const questionBtn = document.querySelector("#question-btn");
const questionContainer = document.querySelector("#question-container");
const editView = document.querySelector(".edit-view");
const editContainer = document.querySelector(".edit-container");
const createClick = document.querySelector("#create-click");
const inputChoiceA = document.querySelector(".input-choiceA");
const inputChoiceB = document.querySelector(".input-choiceB");
const inputChoiceC = document.querySelector(".input-choiceC");
const inputChoiceD = document.querySelector(".input-choiceD");
const inputCorrect = document.querySelector(".input-correct");
const inputTitle = document.querySelector(".input-title");
let addingQuestion = false;

let questions = JSON.parse(localStorage.getItem("questions")) || [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  
];

let currentEdit = null;
displayQuestion();
function displayQuestion() {
    questionContainer.innerHTML = "";
    questions.forEach(question => {

    const addQuestionContainer = document.createElement("div");
    const addQuestion = document.createElement("div");
    const addDelete = document.createElement("div");
    const addEdit = document.createElement("div");
    const addTitle = document.createElement("div");
    addEdit.innerText = "📝";
    addDelete.innerText = "🗑️";
    addQuestion.innerText = question.title;
    addQuestionContainer.appendChild(addQuestion);
    addQuestionContainer.appendChild(addEdit);
    addQuestionContainer.appendChild(addDelete);
    addQuestionContainer.appendChild(addTitle);
    questionContainer.appendChild(addQuestionContainer);
    
    addQuestionContainer.classList.add("question-style");
    addDelete.classList.add("hovered");
    addEdit.classList.add("hovered");
    addDelete.addEventListener("click", function(){
        const index = questions.indexOf(question);
        questions.splice(index, 1);
        localStorage.setItem("questions", JSON.stringify(questions));
        displayQuestion();
        
    });
    addEdit.addEventListener("click", function(){
        editView.style.display = "block";
        editContainer.style.display = "none";
        inputTitle.value = question.title;
        inputChoiceA.value = question.choiceA;
        inputChoiceB.value = question.choiceB;
        inputChoiceC.value = question.choiceC;
        inputChoiceD.value = question.choiceD;
        inputCorrect.value = question.correct;
        currentEdit = question;
        

    });


});
}


    createClick.addEventListener("click", function(){
        if (addingQuestion == true){
            const newQuestionObj = {
            title: inputTitle.value,
            choiceA: inputChoiceA.value,
            choiceB: inputChoiceB.value,
            choiceC: inputChoiceC.value,
            choiceD: inputChoiceD.value,
            correct: inputCorrect.value
        };
            questions.push(newQuestionObj);
            
            
        }
        else if (currentEdit !== null)
            {
            currentEdit.title = inputTitle.value;
            currentEdit.choiceA = inputChoiceA.value;
            currentEdit.choiceB = inputChoiceB.value;
            currentEdit.choiceC = inputChoiceC.value;
            currentEdit.choiceD = inputChoiceD.value;
            currentEdit.correct = inputCorrect.value;
           
            }
            localStorage.setItem("questions", JSON.stringify(questions));
            inputTitle.value = "";
            inputChoiceA.value = "";
            inputChoiceB.value = "";
            inputChoiceC.value = "";
            inputChoiceD.value = "";
            inputCorrect.value = "";

            
            currentEdit = null;

            editView.style.display = "none";
            editContainer.style.display = "block";
            addingQuestion = false;
            displayQuestion();
        
    });

    function cancelClick() {
        editView.style.display = "none";
        editContainer.style.display = "block";
    };

    function newQuestion() {
        addingQuestion = true;
        editView.style.display = "block";
        editContainer.style.display = "none";

        

        
    }

    


>>>>>>> 007ce234ed809410b9c5d8cd140f4f2f8a4371ff
