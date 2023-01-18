function addItem(){  
    const itemList = document.getElementById('items'); 
    
    const name = document.getElementById('name');
    const mail = document.getElementById('mail');
    const phone= document.getElementById('phone');
    const dated= document.getElementById('date');
    const timed = document.getElementById('time');

    let inname = name.value;
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
    let SerialUserDetail = JSON.stringify(userDetails);

    //new list item   

    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = inmail + " : " +SerialUserDetail ;
    axios.post("https://crudcrud.com/api/c02fe1eb544d446fb2b5d346365a5a99/AppointmentData/",userDetails)  
        .then(res => console.log(res))
        .catch(err => console.log(err));
    //localStorage.setItem(inmail, SerialUserDetail);

    //Del button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = 'btn btn-danger float-right delete';
    deleteButton.onclick = function() {
        localStorage.removeItem(inmail); 
        itemList.removeChild(li);
    };
    li.appendChild(deleteButton);

    //Edit buttom
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = 'btn btn-primary float-right edit';
    editButton.onclick = function() {
        localStorage.removeItem(inmail) 

        name.value = inname;
        mail.value = inmail;
        phone.value = inphone;  
        dated.value = indate;
        timed.value = intime;      
        
        itemList.removeChild(li);
    };    
    li.appendChild(editButton);

    itemList.appendChild(li);
}


    



