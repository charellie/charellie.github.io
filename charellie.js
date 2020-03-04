


function changeColor(obj) {

if (obj.style.color == 'black') {
    obj.style.color = 'white';

    } else {

    obj.style.color = 'black';

    }

}

// forms.js
//

const init = function(){
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
}

const reset = function(ev){

    ev.preventDefault();

    document.getElementById('form-user').reset();

}

const send = function(ev){
    ev.preventDefault(); 
    ev.stopPropagation();
   
    let fails = validate();
   
    if(fails.length === 0){
        
        document.getElementById('form-user').submit();
    }else{
       
        fails.forEach(function(obj){
            let field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}


    }


    let first = document.getElementById('input-first');
    let email = document.getElementById('input-email');

    if( first.value === ""){
        failures.push({input:'input-first', msg:'Required Field'})
 } 
    if( email.value === ""){
        failures.push({input:'input-email', msg:'Required Field'})
    }
    
    //return a boolean || an object with details about the failures
    return failures;
}


document.addEventListener('DOMContentLoaded', init);