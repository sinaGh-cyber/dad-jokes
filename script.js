const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

const getJoke = async () => {
  const config = {
    headers: {
      accept: 'application/json',
    },
  };

  const response = await fetch('https://icanhazdadjoke.com', config);
  const data = await response.json();
  jokeEl.textContent = data.joke;
};

jokeBtn.addEventListener('click', getJoke);

getJoke();
