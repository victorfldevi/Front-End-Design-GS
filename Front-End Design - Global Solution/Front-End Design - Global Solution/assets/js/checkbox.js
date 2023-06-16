function validaTema(){
 
    //verifica qual classe esta no id
    if(document.getElementById('header').classList.contains("backgroundDark")){
        //se for dark muda para light
        document.getElementById('header').classList.remove("backgroundDark");
        document.getElementById('header').classList.add("backgroundLight");

    }else{
        //se for light muda para dark
        document.getElementById('header').classList.remove("backgroundLight");
        document.getElementById('header').classList.add("backgroundDark");
    }


    if(document.getElementById('footer').classList.contains("backgroundDark")){
        //se for dark muda para light
        document.getElementById('footer').classList.remove("backgroundDark");
        document.getElementById('footer').classList.add("backgroundLight");

    }else{
        //se for light muda para dark
        document.getElementById('footer').classList.remove("backgroundLight");
        document.getElementById('footer').classList.add("backgroundDark");
    }

}