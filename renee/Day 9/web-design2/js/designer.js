window.addEventListener('load', function () {


    const obj = {
        header: {
            title: 'My Title',
            color: 'blue',
            padding: '10px',
            fontSize: '30px'
        }
    };

    const element = document.createElement('div');
    document.body.prepend(element);
    console.log(obj['header']);
    element.innerTExt = obj.header.title;
    element.style.color = oby.header.color;

    const input1 = document.createElement('input');
    document.body.prepend(input1);
    input1.addeventListener('input', function (event) {
        console.log(event.target.value);
       element.style.color = event.target.value; 
    });




const xhr = new XMLHttpRequest();
xhr.open ('GET', 'test.json');
xhr.onreadystatechange = function () {
    xhr.readyState;
    console.log(xhr.responseText);
}
xhr.send();