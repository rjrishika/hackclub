function fun(click){
    document.getElementById('cor').style.backgroundColor = "#32cd32";  
    if(click!='cor'){
    document.getElementById(click).style.backgroundColor = "red";  
    }
    setTimeout(fun1,3000,click);  
}

function fun1(click){
    if(click=='cor'){
        
        location.href="3rd.html";
    }
    else{
   
        location.href="5th.html";
    }

}
