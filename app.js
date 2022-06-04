// const addForm=document.querySelector('.add');
// const list=document.querySelector('.todos');
// const search=document.querySelector('.search input');
// const generateTemplate=todo=>{
// const html=` <li class="list-group-item d-flex justify-content-between align-items-center">
// <span>${todo}</span>
// <i class="far fa-trash-alt delete"></i>
// </li>`
// list.innerHTML+=html
// }
// addForm.addEventListener('submit',e=>{
//     e.preventDefault();
//     const todo=addForm.add.value.trim();
//     if(todo.length){
//         generateTemplate(todo);
//         addForm.reset()
//     }
   
// })
// //delete li
// list.addEventListener('click',e=>{
//    if(e.target){
// e.target.parentElement.remove()
//    }
// })
// //filtering search
// const filterSearch=term=>{
//     Array.from(list.children)
//     .filter(todo=> !todo.textContent.toLowerCase().includes(term))
//     .forEach(todo=>todo.classList.add('filtered'))
    
//      Array.from(list.children)
//     .filter(todo=> todo.textContent.toLowerCase().includes(term))
//     .forEach(todo=>todo.classList.remove('filtered'))
// }
// search.addEventListener('keyup',e=>{
// const term=search.value.trim().toLowerCase();
// filterSearch(term)
// })
const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemplate=todo=>{
    const html=` <li class="list-group-item d-flex del justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete"></i>
    </li>`
    list.innerHTML+=html;
}

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addForm.reset()
    }
})
// deleting item in the list
list.addEventListener('click',e=>{
 if(e.target.classList.contains('delete')){
     e.target.parentElement.remove();
 }
})
// searching items

const searchFilter=term=>{
    Array.from(list.children)
    .filter(todo=>!todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.add('filtered'))
    Array.from(list.children)
    .filter(todo=>todo.textContent.toLowerCase().includes(term))
    .forEach(todo=>todo.classList.remove('filtered'))
}
search.addEventListener('keyup',e=>{
    const term=search.value.toLowerCase().trim();
    searchFilter(term)
})
