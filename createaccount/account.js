// multi step functionality code 
const steps =  Array.from(document.querySelectorAll('.step'));
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const form = document.querySelector( 'form');


btnNext.forEach( button => {
    button.addEventListener ('click', (e)=> {
        e.preventDefault()
        changeStep('next')
    })
})
btnPrev.forEach( button => {
    button.addEventListener ('click', (e)=> {
        e.preventDefault()
        changeStep('prev')
    })
})

function changeStep(btn){

    let index = 0;
    const active = document.querySelector( '.step.active');
    index =steps.indexOf(active);
    steps[index].classList.remove('active');
    console.log(btn)

    if (btn === 'next'){
        index ++
    }
    if (btn === 'prev'){
        index --
    }
    steps[index].classList.add('active')
}
// **********************************************

