const getFact =  async () => {
const fact = await fetch('https://meowfacts.herokuapp.com/');
const data =  await fact.json();
console.log(data)
const h2 = document.querySelector('h2');
h2.innerText = data.data[0]
}
window.addEventListener('load', getFact);
document.getElementById('next').addEventListener('click', getFact)