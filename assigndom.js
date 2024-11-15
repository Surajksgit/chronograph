function radio(){
    let a = document.getElementsByName("gender");
    
    for(i=0;i<a.length;i++){
        if (a[i].checked){
            value = a[i].value;
            
        }
    }

    console.log(value);
}