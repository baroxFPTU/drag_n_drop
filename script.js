const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let dragItem = null;

listItems.forEach((item) => {
    item.addEventListener('dragstart',()=> {
        dragItem = item;
        // 
        item.classList.add('drag');
        setTimeout(()=>{
            item.style.display = 'none';
        item.style.backgroundColor = '#fff'

        },0);
    })

    item.addEventListener('dragend',()=> {
        setTimeout(()=>{
            item.style.display = 'flex';
        item.classList.remove('drag');

            dragItem = null;
        },0)
    })
})

lists.forEach((list) => {
    list.addEventListener('dragover',(e)=> {
        e.preventDefault();
    });

    list.addEventListener('dragenter',(e)=> {
        e.preventDefault();
        list.style = 'background-color: rgba(0, 0, 0, 0.3);'

    });

    list.addEventListener('dragleave',(e)=>{
        list.style = 'background-color: rgba(0, 0, 0, 0.2);'

    })
    list.addEventListener('drop', ()=> {
        list.appendChild(dragItem);
        list.style = 'background-color: rgba(0, 0, 0, 0.2);'
    })
})