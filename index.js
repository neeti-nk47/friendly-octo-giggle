var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault(); 

    var inname = document.getElementById('name').value;
    var inmail = document.getElementById('mail').value;
    var inphone= document.getElementById('phone').value;
    var indate= document.getElementById('date').value;
    var intime = document.getElementById('time').value;

    localStorage.setItem("name", inname);
    localStorage.setItem("mail", inmail);
    localStorage.setItem("phone", inphone);
    localStorage.setItem("date", indate);
    localStorage.setItem("time", intime);

}

