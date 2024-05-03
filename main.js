const email = document.getElementById("Email");
function ok(){
    if(email == ""){
        alert("enter a email First")
    }
    else{

        alert("Send Email Sucessfully")
        email.value=""
    }
   
}