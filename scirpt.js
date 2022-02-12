var icon =document.getElementById("icon");
icon.onclick =  function(){
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        icon.src="images/lightMode.png"

    }
    else{
        icon.src = "images/darkMode.png"
    }
}

const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;  //creating a var  that stores the value fah or celc
    
    
    

    const tempSelected = document.getElementById('temp_option');
    const valueTemp = temp_option.options[tempSelected.selectedIndex].value;  //checking whether fah or celc was given as input
    
    const Celc_to_Fahren= (celc)=>{
        let fahrenheit = Math.round(  (celc*9/5)+32   );
        return fahrenheit;

        
    }

    const Fahren_to_Celc = (fahren)=>{
        let celcius = Math.round(  (fahren -32)*5/9 );
        return celcius;
    }

    let result;

    if(valueTemp == "celc"){

        result = Celc_to_Fahren(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;

    }
    if(valueTemp=="fahren"){
        result = Fahren_to_Celc(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Celcius`;

    }
  
}