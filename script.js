




const button1 = document.querySelector("#push");
var a=0;
function outputtask() {
  if (document.querySelector("#newtask input").value.length != 0) {
    const info = document.querySelector("#newtask input").value;
    const outputtime = document.querySelector("#time").value;

    console.log(info);
    console.log(outputtime);


    document.querySelector('#tasks').innerHTML
    +=`
    <div class="task">
    <span id="taskname" >${document.querySelector("#newtask input").value}
    </span>
    <span id="date" >${document.querySelector("#time").value}</span>
    
    <button class="delete" onclick="this.parentNode.remove()">X</button>
    <button class="check" onclick="this.parentNode.classList.toggle('done')">D</button>
    <button class="edit" onclick="this.parentNode.contentEditable = true" value="NO">E</button>
    </div>
    <script>
function myFunction() {
   var element = document.getElementsByClassName("task");
   element.classList.toggle("done");
}
</script>`;


    const deletetext=document.querySelector("#zaobrisat");
    deletetext.value="";

  } 
  else if (document.querySelector("#newtask input").value.length == 0) {
    alert("Molim vas, unesite podatke u polje!");
  }
}

button1.addEventListener("click", outputtask);


var y=document.querySelector(".task");


 function deleteTask() {
    this.parentNode.remove();
 }


function deleteCheck(e) {
const item=e.target;
  if(item.classList[0]=="check") {
    const todo=item.parentElement;
    todo.classList.toggle("done");
  }
}

function writeData() {
  firebase.database().ref("User").set({
    task: document.querySelector("#newtask input").value,
    date: document.querySelector("#time").value
  });
}

var vrijeme = document.querySelectorAll("#time").value;


const editbtn=document.getElementsByClassName("check");

editbtn.addEventListener("click",function() {
  document.querySelector(".task").style.textDecoration=line-through;
});