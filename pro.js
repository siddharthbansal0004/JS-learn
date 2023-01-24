let btn = document.getElementById('btn');
let model = document.getElementById('modelcontainer');
let close = document.getElementById('close-btn');


btn.addEventListener('click', function () {

    model.style.display = 'block';


});

close.addEventListener('click', function () {

    model.style.display = 'none';


});