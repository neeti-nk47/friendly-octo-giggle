const itemList = document.getElementById('items'); 

const names = document.getElementById('name');
const mail = document.getElementById('mail');
const phone= document.getElementById('phone');
const dated= document.getElementById('date');
const timed = document.getElementById('time');

function addItem(){    
    let inname = names.value;
    let inmail = mail.value;
    let inphone = phone.value;
    let indate = dated.value;
    let intime = timed.value;
    
    let userDetails = {
        Name : inname,
        Email : inmail,
        Mobile : inphone,
        CallDate: indate,
        CallTime: intime
    };

    axios.post("https://crudcrud.com/api/ceca46bb233145059afc4bd140f54654/AppointmentData/",userDetails)  
        .then(res => console.log(res))
        .catch(err => console.log(err));

    addToScreen(userDetails);    
}

function addToScreen(obj){
    //new list item      
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = `${obj.Name},${obj.Email},${obj.Mobile},${obj.CallDate},${obj.CallTime}`;       

    //Del button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = 'btn btn-danger float-right';
    deleteButton.onclick = function() {
        itemList.removeChild(li);
    };
    li.appendChild(deleteButton);

    //Edit buttom
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = 'btn btn-primary float-right';
    editButton.onclick = function() {
        
        names.value = obj.Name;
        mail.value = obj.Email;
        phone.value = obj.Mobile;  
        dated.value = obj.CallDate;
        timed.value = obj.CallTime;      
        
        itemList.removeChild(li);
    };    
    li.appendChild(editButton);

    itemList.appendChild(li);
}

window.addEventListener('DOMContentLoaded', (event) => {
    axios.get("https://crudcrud.com/api/ceca46bb233145059afc4bd140f54654/AppointmentData/")
    .then(res => {
        console.log(res)

        for (let i=0; i<=res.data.length; i++){
            addToScreen(res.data[i])                        
        }
    })
    .catch(err => console.log(err))    
})
    



