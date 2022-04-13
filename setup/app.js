//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    });
});


// const btnss = document.querySelectorAll(".question-btn");

// btnss.forEach(function (btn){
//     btn.addEventListener("click", function(e){
//         const quest = e.currentTarget.parentElement.parentElement
//         quest.classList.toggle("show-text");
//     });
// }); 
