let btn = document.querySelectorAll('.btn_title');
let content = document.querySelectorAll('.content_box')
btn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});
function toggleAccordion(el){
    let targetText = el.currentTarget.nextElementSibling.classList;
    let target = el.currentTarget;
    if(targetText.contains('on')) {
        targetText.remove('on')
    }
    else {
        btn.forEach(function(el) {
            console.log(el)

        })
        targetText.add('on')
    }
}