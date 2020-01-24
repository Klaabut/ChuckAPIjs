//listen to the click event on the get-jokes button

//select the button, add the event listener
//selected the button by class name, if button clicekd runs the function getJokes
document.querySelector('.get-jokes').addEventListener('click', getJokes);
//event = 'click'
function getJokes(event){
    const userNumber = document.querySelector('input[type="number"]').value;
    
    //GET request
    fetch(`http://api.icndb.com/jokes/random/${userNumber}`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        let output = '';
        console.log(data.value);
        //for each joke in data.value array
        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`;
            console.log(joke.joke);

            
        });

        document.querySelector('.jokes').innerHTML = output;
    });

    event.preventDefault();
}