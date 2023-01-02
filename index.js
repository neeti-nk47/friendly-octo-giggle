var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault(); 

    var inname = document.getElementById('name').value;
    var inmail = document.getElementById('mail').value;
    var inphone= document.getElementById('phone').value;
    var indate= document.getElementById('date').value;
    var intime = document.getElementById('time').value;
    
    let userDetails = {
        Name : inname,
        Email : inmail,
        Mobile : inphone,
        CallDate: indate,
        CallTime: intime
    };

    let SerialUserDetail = JSON.stringify(userDetails);
    localStorage.setItem(userDetails.Name, SerialUserDetail);
    
    //let reverse= JSON.parse(localStorage.getItem("Details"));
    // localStorage.setItem("name", inname);
    // localStorage.setItem("mail", inmail);
    // localStorage.setItem("phone", inphone);
    // localStorage.setItem("date", indate);
    // localStorage.setItem("time", intime);

}

