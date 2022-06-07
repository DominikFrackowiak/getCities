const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const ul = document.querySelector("ul");


const fetchData = async () => {
 const response = await fetch(endPoint);
 const data = await response.json();
 data.forEach(el=> cities.push(el))
 //cities.push(...data)
}

const findMatches = (wordToMatch, cities) =>{
  return cities.filter(place => {
   const regex = new RegExp(wordToMatch, 'gi') //'gi' stands for global (looking for entire string in search for what's being searched) and insensitive
   return place.city.match(regex) || place.state.match(regex);
  })
  
}

fetchData();

const displayMatches = (e) => {
 const matchArray = findMatches(e.target.value, cities);
 ul.textContent = "";
 matchArray.forEach(el => {
  const li = document.createElement("li");
  li.textContent = el.city;
  ul.appendChild(li)
 })
 }

 

// searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches)

