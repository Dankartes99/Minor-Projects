let ulTasks = $('#ulTasks') 
let btnAdd = $('#btnAdd')
let btnClear = $('#btnClear')
let btnReset = $('#btnReset')
let btnSort = $('#btnSort')
let newTask = $('#newTask')

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: newTask.val()
    })
    if(newTask.val != ''){
        listItem.click(() => {
            listItem.toggleClass('done')
        })
        ulTasks.append(listItem)
        newTask.val('')
    }
    toggleInputs()
}
function clearDone(){
    $('#ulTasks .done').remove()
    toggleInputs()
}
function sortTasks(){
    $('#ulTasks .done').appendTo(ulTasks)
    toggleInputs()
}
newTask.keypress((event) => {
    if(event.which == 13){
        addItem()
    }
})
btnAdd.click(addItem)
btnClear.click(clearDone)
btnSort.click(sortTasks)
btnReset.click( () => {
    newTask.val('')
    toggleInputs()
})


function toggleInputs(){
        btnReset.prop('disabled', newTask.val() == '')
        btnAdd.prop('disabled', newTask.val() == '')
        btnSort.prop('disabled', ulTasks.children().length < 1)
        btnClear.prop('disabled', ulTasks.children().length < 1)
}
newTask.on('input', toggleInputs)