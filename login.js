function toggleForm() {
  const container = document.querySelector(".container");
  container.classList.toggle('active');
}


// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("login");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  // actual logic, e.g. validate the form
  console.log('Form submission cancelled.');
});

function handleSubmit(){
  const name = document.getElementById("siusername").value;
  localStorage.setItem("in_username", name);
  const inuser = localStorage.getItem('in_username');
  console.log(inuser);
    var id = document.getElementById("login")
    var parentNode = document.getElementById("primary-navigation");
    parentNode.removeChild(id);
    var user_details = localStorage.getItem('in_username');
    console.log(user_details);
    user_details = "<a>" + user_details + "</a>"
    var newListItem = document.createElement("li");
    newListItem.innerHTML = user_details;
    parentNode.appendChild(newListItem);
    newListItem.setAttribute('id','id_no_2');
    modal.style.display = "none";
    var userr = localStorage.getItem('in_username');
    var userspan = document.getElementById("usernamee");
    userspan.innerText = userr

    // Get the modal
    var modaln = document.getElementById("myModaln");

    // Get the button that opens the modal
    var btnn = document.getElementById("id_no_2");

    // Get the <span> element that closes the modal
    var spann = document.getElementsByClassName("closen")[0];

    // When the user clicks the button, open the modal
    btnn.onclick = function() {
      modaln.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spann.onclick = function() {
      modaln.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modaln) {
        modaln.style.display = "none";
      }
    }

}
