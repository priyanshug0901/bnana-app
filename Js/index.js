const translateInput=document.querySelector('#translate-input');
const translateBtn=document.querySelector('.translate-btn');
const output= document.querySelector('.translate-output');



translateBtn.addEventListener('click',clickHandler);



const url='https://api.funtranslations.com/translate/minion.json?text';

function constructUrl(input){
    
    console.log(input);
    // const encodeURI=encodeURI(input);
    console.log(  `${url}=${input}`  );
    return `${url}=${input}`;
}

function clickHandler(event){
    var input = translateInput.value;
   fetch(constructUrl(input))
   .then(response=> response.json())
   .then(json => {output.innerText=json.contents.translated} )
   .catch( () => alert('some error ocurred'));
}


