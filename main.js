   const getConutryDetails = async () =>{
        console.log(userInput.value);
        // Clear the result area and any previous error message
         result.innerHTML = '';
         error.innerHTML = '';
        // api call
        if(userInput.value){
            const response = await fetch(`https://restcountries.com/v3.1/name/${userInput.value}?fullText=true`)
            console.log(response);
            if(response.status==200){
            const conurtyDetails = await response.json()
            console.log(conurtyDetails);
            const displayData= conurtyDetails[0]
            console.log(displayData);
            result.innerHTML=`
              <div class="row border bg-light rounded-2  p-3 align-items-center  ">
                            <div class="col-lg-6 mb-3">
                                <h3 class="text-primary">
                                    ${displayData.name.common}
                                </h3>
                                <img class="img-fluid" src="${displayData.flags.svg}" alt=" no image">
                                <a class="pt-4" href="${displayData.maps.googleMaps}" target="_blank">
                                    Click Here to View in map
                                </a>
                            </div>                       
                        <div class="col-lg-6">
                            <ul class="list-group">
                                <li class="list-group-item "> Capitlal:
                                    ${displayData.capital} </li>
                                <li class="list-group-item">Population :
                                    ${displayData.population} </li>
                                <li class="list-group-item">Time Zone :
                                    ${displayData.timezones} </li>
                                <li class="list-group-item">Continent : 
                                    ${displayData.Asia}</li>
                                <li class="list-group-item">Languages :
                                   ${Object.values[displayData.languages]}  </li>
                                <li class="list-group-item">Currencies :
                                    ${displayData.currencies[Object.keys(displayData.currencies)[0]].symbol}
                                      ${displayData.currencies[Object.keys  (displayData.currencies)[0]].name
                                        } 
                                 </li>
                            </ul>

                        </div>
                       
                 </div>
            `
            }else{
                
               // Handle case where API response is not successful
                error.innerHTML = "Please enter a valid country name....";
            
            }
            

        }else{
              // Show an error message if the input is empty
           error.innerHTML = "Please enter a country name....";

            
        }
        
    }

    // Function to clear the error message when typing in the input field
const clearErrorMessage = () => {
    const error = document.getElementById('error');
    error.innerHTML = '';
};


