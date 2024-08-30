
// Download button alert event listener

let btn = document.getElementById('btn');
btn.addEventListener('click' , ()=> {alert('Your file is now downloading');});

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click' , ()=> {alert('Your file is now downloading');});


// When user scroll down and downlaod btn is not visible anymore then this will appear
// Download event listener

window.addEventListener('scroll', function() {
    const downloadButton = document.getElementById('btn');
    const fixedContainer = document.getElementById('fixedContainer');
    const containers = document.getElementsByClassName('container3');

    const rect = downloadButton.getBoundingClientRect();
    const isButtonVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    let isAnyContainerVisible = false;
    let isFooterVisible = false;

    for (let i = 0; i < containers.length; i++) {
        const rext = containers[i].getBoundingClientRect();
        const visible = rext.top <= window.innerHeight && rext.bottom >= 0;

        if (i === containers.length - 1) {
            isFooterVisible = visible;
        }

        if (visible) {
            isAnyContainerVisible = true;
        }
    }

    if (!isButtonVisible && !isFooterVisible) {
        fixedContainer.style.display = 'block';
    } else {
        fixedContainer.style.display = 'none';
    }
});

let toggle = document.getElementById('toggle');
let menu = document.getElementsByClassName('menu');


    toggle.addEventListener("click", function(){
        if(toggle.firstElementChild.classList.contains("fa-bars-staggered"))
        {
            toggle.firstElementChild.classList.replace("fa-bars-staggered","fa-xmark");
        }
        else
        {
            toggle.firstElementChild.classList.replace("fa-xmark","fa-bars-staggered");
        }
       menu[0].classList.toggle('active');
});



let light = document.querySelectorAll('.light');
let body = document.body;
let turn = document.querySelectorAll('#turn');

light.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
   
        if(e.target.classList.contains('fa-sun')){
            body.style.backgroundColor = 'aliceblue';
            turn.forEach(turns => {turns.style.color = 'black'});
        }   
        else if (e.target.classList.contains('fa-moon')){
            body.style.backgroundColor = '#444';
            turn.forEach(turns => {turns.style.color = '#fff'});
        }
    });
});
