const addForm=document.querySelector('.add');
const todo=document.querySelector('.todos');
const search=document.querySelector('.search input');
function generateTemplate(todos){
        const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
                        <span>${todos}</span>
                        <i class="far fa-trash-alt delete"></i>
                    </li>`;
        todo.innerHTML+=html;
};

addForm.addEventListener('submit',form=>{
    form.preventDefault();
    const todos=addForm.add.value.trim();
    if(todos.length){
        generateTemplate(todos);
        addForm.reset();
    }
});
//delete todos
todo.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});
// searching todos
function filteringTodos(term){
    Array.from(todo.children)
    .filter((e)=>{
          return !e.textContent.includes(term);
    }).forEach((e)=>{
        e.classList.add('filtered');
    })

    Array.from(todo.children)
    .filter((e)=>{
          return e.textContent.includes(term);
    }).forEach((e)=>{
        e.classList.remove('filtered');
    })
};
search.addEventListener('keyup',()=>{
    const term=search.value.trim();
    filteringTodos(term);

});


