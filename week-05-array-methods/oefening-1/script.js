const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const resultFiltered = document.getElementById('result-filtered');
const resultMap = document.getElementById('result-map');
const resultSorted = document.getElementById('result-sorted');

const filteredScores = scores.filter(score => score > 50);
const doubledScores = scores.map(score => score * 2)
const sortScores = scores.sort((a, b) => a - b);
console.log(sortScores);

for (let score of filteredScores){
    resultFiltered.innerHTML += `<li> ${score} </li>`
};

// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted
