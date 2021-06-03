let btn = document.querySelectorAll('.btn_title');
let content = document.querySelectorAll('.content_box')
let icon = document.querySelectorAll('.icon')
btn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});
function toggleAccordion(el){
    let targetText = el.currentTarget.nextElementSibling.classList;
    let targetTitle = el.currentTarget.classList;
    let target = el.currentTarget;
    if(targetText.contains('on')) {
        targetText.remove('on')
        targetTitle.remove('on')
    }
    else {
        btn.forEach(function(el) {
            el.classList.remove('on')
            content.forEach(function(el){
                el.classList.remove('on')
            })
            // icon.forEach(function(el){
            //     el.parentNode.classList.remove('on')
            // })
            
        })
        targetText.add('on')
        targetTitle.add('on')
    }
}

// variables
// var accordionBtn = document.querySelectorAll('.accordionTitle');
// var allTexts = document.querySelectorAll('.text');
// var accIcon = document.querySelectorAll('.accIcon');

// event listener
// accordionBtn.forEach(function (el) {
//     el.addEventListener('click', toggleAccordion)
// });

// function

// function toggleAccordion(el) {
//     var targetText = el.currentTarget.nextElementSibling.classList;
//     var targetAccIcon = el.currentTarget.children[0];
//     var target = el.currentTarget;
    
//     if (targetText.contains('show')) {
//         targetText.remove('show');
//         targetAccIcon.classList.remove('anime');
//         target.classList.remove('accordionTitleActive');
//     } 
//     else {
//         accordionBtn.forEach(function (el) {
//             el.classList.remove('accordionTitleActive');
            
//             allTexts.forEach(function (el) {
//                 el.classList.remove('show');
//             })
            
//             accIcon.forEach(function (el) {
//                 el.classList.remove('anime');
//             }) 
            
//         })
        
//         targetText.add('show');
//         target.classList.add('accordionTitleActive');
//         targetAccIcon.classList.add('anime');
//     }  
// }
// https://wsss.tistory.com/