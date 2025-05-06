let send = document.querySelector('.button');
let list = document.querySelector('#list');
let input  = document.querySelector('.input');
let zag =document.querySelector('.zag');

send.addEventListener('click', ()=>{
   let newelem = document.createElement('li');
   newelem.className = 'new-li';
   newelem.innerText = input.value ;

   if (input.value == ''){
    alert('Default! Please come and try later.')
   }else{
    list.appendChild(newelem)
    input.value = ''
   }

} );

let dark = document.querySelector('.buttonight');



dark.addEventListener('click', ()=>{
 input.classList.toggle('input1');
 zag.classList.toggle('zag1');
 document.body.classList.toggle('body1')

});

let editBtn = document.createElement('button');
editBtn.innerText = 'Edit';
editBtn.className = 'edit-btn';
editBtn.addEventListener( () => {
    let newText = prompt('Edit note:', newelem.innerText);
    if (newText !== null && newText.trim() !== '') {
        newelem.innerText = newText.trim();
    }
});

// Кнопка удаления
let deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';
deleteBtn.className = 'delete-btn';
deleteBtn.onclick = () => {
    list.removeChild(newElem);
};


newelem.appendChild(editBtn);
newelem.appendChild(deleteBtn);