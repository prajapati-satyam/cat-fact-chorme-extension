const getFact =  async () => {
// const fact = await fetch('https://meowfacts.herokuapp.com/');
const fact = await fetch('https://catfact.ninja/fact?max_length=200');
const data =  await fact.json();
console.log(data)
const h2 = document.querySelector('h2');
h2.innerText = data.fact
}
window.addEventListener('load', getFact);
document.getElementById('next').addEventListener('click', getFact)