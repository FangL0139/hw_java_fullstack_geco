function setLocal(){
  let val = document.getElementById("loc_storage").value;
  localStorage.setItem("locVal",val);
}

function getLocal(){
  console.log(localStorage.getItem("locVal"));
}

function setSession(){
  let val = document.getElementById("ses_storage").value;
  sessionStorage.setItem("sesVal",val);
}

function getSession(){
  console.log(sessionStorage.getItem("sesVal"));
}
