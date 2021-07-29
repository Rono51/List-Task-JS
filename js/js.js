// Constantes seleccionables 
const switchsLIstActive = document.querySelectorAll('.icon-check-alone')
const switchAllList = document.querySelector('.icon-selectAll')
const TextItem = document.querySelectorAll('.text-list')

switchsLIstActive.forEach((cadacheck, i)=>{
    switchsLIstActive[i].addEventListener('click',()=>{

        switchsLIstActive[i].classList.toggle('active')
        TextItem[i].classList.toggle('TextSelected')

        switchsLIstActive.forEach((cadacheck, i)=>{ 
            let comprobation = switchsLIstActive[0].classList.length === 2 && switchsLIstActive[1].classList.length === 2 && switchsLIstActive[2].classList.length === 2 && switchsLIstActive[3].classList.length === 2 && switchsLIstActive[4].classList.length === 2 && switchsLIstActive[5].classList.length === 2 && switchsLIstActive[6].classList.length === 2


            if(comprobation == true){
                switchAllList.classList.add('active')

            }else{
                switchAllList.classList.remove('active')

            }

        })        

    })

})


switchAllList.addEventListener('click',()=>{

    if(switchAllList.classList.length === 2){

        switchsLIstActive.forEach((cadacheck, i)=>{
            switchsLIstActive[i].classList.remove('active')
            TextItem[i].classList.remove('TextSelected')

            switchAllList.classList.remove('active')
        })

    }else {

        switchsLIstActive.forEach((cadacheck, i)=>{

            switchsLIstActive[i].classList.add('active')
            TextItem[i].classList.add('TextSelected')
            
            switchAllList.classList.add('active')
        })

    }

})

const buttonTrash = document.querySelector('.icon-trash')

buttonTrash.addEventListener('click',()=>{
    
    OpenModal();

    TextModification();

})

function OpenModal()    {
    let HomeworksSelected = document.querySelectorAll('.TextSelected')
        
    if(HomeworksSelected.length > 0){
        document.querySelector('.modal-trash').classList.add('active')

    }else{
        alert('No task selected');

    }

    let btnCancelModal = document.querySelector('#buttonCancel')

    btnCancelModal.addEventListener('click',()=>{
        document.querySelector('.modal-trash').classList.remove('active')
        
        let PaternDataString = document.querySelector('.list-trash-modal')
    
        let li = document.querySelectorAll('.text-element-trash')

        if(PaternDataString.children.length > 0){
            
            li.forEach((cadali)=>{
                cadali.remove()
            })
        } 
    })

}

function TextModification() {
    let HomeworksSelected = document.querySelectorAll('.TextSelected')
    
    let indexCurrent = HomeworksSelected.length - 1

    for( let index = 0 ; index <= indexCurrent; index++ ){
            
        let TextModificationParagraph = HomeworksSelected[index].textContent

            DataHomework = `
                <li class="text-element-trash">
                    <span class="icon-circle">
                        <i class="fas fa-circle"></i>
                    </span>
                    <p class="text-list">
                       ${TextModificationParagraph} 
                    </p>
                </li> `
                
                let PaternDataString = document.querySelector('.list-trash-modal')
                
                PaternDataString.innerHTML += DataHomework
                


    }
}

const buttonDeleteTasks = document.querySelector('#button-Delete')

buttonDeleteTasks.addEventListener('click',()=>{

    let HomeworksSelected = document.querySelectorAll('.TextSelected')

    HomeworksSelected.forEach((cadahomework, i)=>{

        cadahomework.parentElement.parentElement.style.display = 'none'

    })

    document.querySelector('.modal-trash').classList.remove('active')

    let PaternDataString = document.querySelector('.list-trash-modal')
    
    let li = document.querySelectorAll('.text-element-trash')

    li.forEach((cadali)=>{
        cadali.remove()

    })

    HomeworksSelected.forEach((cadahomework)=>{
        cadahomework.remove()
    
    }) 

})
