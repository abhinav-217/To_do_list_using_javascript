console.log("Welcome to console");
shownotes();
let btn = document.getElementById('btn');
btn.addEventListener('click', function add(e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    let notesobj = [];

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    // console.log(addtxt.value);
    addtxt.value = "";
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    let notesobj = [];

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    let count = 0;
    notesobj.forEach(function (element, index) {
        html += `
        <div class="noteCard" style="width: 18rem">
        <div class="card-body">
          <h4 class="card-title">Note ${index + 1}</h4>
          <p class="card-text"> ${element}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="deletebtn">Done Task</button>
          <button class="ion" onclick = "mark(this.id)">
            <ion-icon id="${index+1}" name="star-outline"></ion-icon>
          </button>
        </div>
      </div>`;
        count++;
        console.log(element)
    });
    // console.log(count);
    let noteslem = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteslem.innerHTML = html;
    }
    else {
        noteslem.innerHTML = "<h5>Nothing to show use add a task section to add your task</h5>";
    }

}

function deleteNote(index) {
    // console.log("i am deleting", index);

    let notes = localStorage.getItem("notes");
    let notesobj = [];
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

function search(e) {
    let myinput = document.getElementById('searchkit').value.toUpperCase();
    let mydiv = document.getElementsByClassName('noteCard');
    let main = document.getElementsByClassName('card-body');
    // console.log(main,mydiv);

    for (var i = 0; i < main.length; i++) {
        let para = main[i].getElementsByTagName('p')[0];
        if (para) {
            //console.log("hello again");
            let txtval = para.textContent || para.innerHTML;
            if (txtval.toLocaleUpperCase().indexOf(myinput) > -1) {
                main[i].style.display = "";
            }
            else {
                main[i].style.display = "none";
            }
        }
    }
}

function mark(index) {
    let notes = localStorage.getItem("notes");
    let notesobj = [];

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.forEach(function (element, index) {

        let btn = document.getElementById(index+1);
        console.log(btn[index]);

        if(btn.style.color != "yellow")
        {
            btn.style.color = "yellow";
        }
        else{
            btn.style.color = "black";
        }

    });
}