let myLeads = []
const inputEl= document.getElementById("input-el")
const inputBt = document.getElementById("input-bt")
let ulEl = document.getElementById("ul-el")


const leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads=leadsFromLocalStorage
    renderLeads()
}

function renderLeads() {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
 listItems += `
 <li> 
    <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
 </li> `

}

ulEl.innerHTML=listItems
}

inputBt.addEventListener ("click",
    function() {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        inputEl.value=""
        renderLeads()
    }
)



const deleteBt=document.getElementById("delete-bt")
deleteBt.addEventListener("dblclick",deleteAll)
function deleteAll() {
    localStorage.clear()
    myLeads=[]
    renderLeads()

}