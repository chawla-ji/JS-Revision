const api_url = "https://api.github.com/users/chawla-ji";

async function handlePromise() {
    
    try {const data = await fetch(api_url);
    // fetch() => gives a Response object as a promise
    // do a response.json() to get the json object inside the 
    const jsonValue = await data.json();
    console.log(jsonValue);
    } catch(err) {
        console.log(err.message);
    }
}

handlePromise(); // You can also use catch here instead of try catch block inside the async function similar to the older way
