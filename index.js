const btn = document.getElementById('btn');
const apiKey = "ZKp/s4s974OVwlSYBtJtmA==1iif7NsH8VXq2U81";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const jokeTxt = document.getElementById('joke');

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
}

async function getJoke(){
    const response = await fetch(apiURL, options);
    const data = await response.json();

    jokeTxt.innerText = data[0].joke;
}

btn.addEventListener('click', getJoke);
