document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  // Get the number in the input field
  const number = document.querySelector('input[type="number"]').value;

  // Init XHR request
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';
      // Check if the value of object is success, then display jokes
      if (response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });

        // If not success dispay error message
      } else {
        output += '<li>Something went wrong</li>';
      }
      // Display jokes from the api
      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();

  console.log('Getting jokes...');
  e.preventDefault();
}
