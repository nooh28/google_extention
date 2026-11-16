
let myLeads = []
const inputEl= document.getElementById("input-el")
const inputBt = document.getElementById("input-bt")
let ulEl = document.getElementById("ul-el")
inputBt.addEventListener ("click",
    function() {
        myLeads.push(inputEl.value)
        
        inputEl.value=""
        renderLeads()
    }
)

function renderLeads() {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
 listItems += "<li>" + "<a href='myLeads[i]' target='_blank'>"+ myLeads[i]+"</a>"+"</li> "
 console.log(myLeads[i])

}

ulEl.innerHTML=listItems
}

