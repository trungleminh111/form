var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove-all')

var tags =['Nodejs','Reacts']

function creatTags(){
    content.innerHTML = ' '
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                             </li>
                             `
    }
    content.appendChild(input)
    input.focus()
}


creatTags()

input.addEventListener('keydown', function(even){
    if(even.key == 'Enter'){
        console.log();
        tags.push(input.value.trim())
        input.value = ' '
        creatTags()
    }
})

function removeTag(index){
    tags.splice(index, 1);
    creatTags()
}
btnRemoveAll.addEventListener('click', function(){
    tags = []
    creatTags()
})