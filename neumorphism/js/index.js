let cards = document.querySelectorAll('.card');
for(let i=0; i < cards.length; i++){
    let count = 0;
    cards[i].addEventListener('click',function(){
        this.classList.toggle('on')
        let counter = this.children[1].children[1];
        let countNum = counter.getAttribute('data-num');
        console.log(countNum)

        setInterval(function(){
            if(count == countNum){
                clearInterval(count)
            }
            else{
                count+=1;
                counter.textContent = count + '%'
            }

        },32)
    })
}


let circle = document.querySelector('circle');
console.log(circle.getTotalLength())