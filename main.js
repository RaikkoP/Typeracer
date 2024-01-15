async function getWords() {
    const response = await fetch("http://localhost:3000/", {
        method: "GET",
        mode: "cors",
    });
    const words = await response.json();
    console.log(words);
}
