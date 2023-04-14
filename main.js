const addTodo=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemplate=((task)=>
{
list.innerHTML+=`
<li class="list-group-item d-flex justify-content-between align-items-center text-light">
<span>${task}</span>
<i class="fa-solid fa-trash-can delete"></i>
</li>
`
addTodo.reset();
});

addTodo.addEventListener('submit',(event)=>
{
    event.preventDefault();
    const task=addTodo.add.value;
    if(task.length>0)
    {
    generateTemplate(task);
    }
});
//delete the list from the document
list.addEventListener('click',event=>
{
if(event.target.classList.contains('delete'))
{
    event.target.parentElement.remove();
}})


//keyup event
const filterTodo=(term)=>
{
    Array.from(list.children)
    .filter(element=>
        {
            return !element.textContent.toLowerCase().includes(term)
        })
    .forEach(element=>
        {
            element.classList.add('filterText');
        }
        );
        Array.from(list.children)
        .filter(element=>
            {
                return element.textContent.toLowerCase().includes(term)
            })
        .forEach(element=>
            {
                element.classList.remove('filterText');
            }
            );

}
search.addEventListener('keyup',(event)=>
{
const term=search.value.toLowerCase().trim();
filterTodo(term);
})



// const deleteButton=document.querySelectorAll('.delete');
// const subList=document.querySelectorAll('list');
// deleteButton.forEach(element=>
//     {
//         element.addEventListener('click',(event)=>
//         {
//             element.parentElement.remove();
//         })
//     })





