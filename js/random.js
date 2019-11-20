 prenom =["Tony", "Pierre", "David", "Yannick", "Laura", "Tristan", "MaximeB", "Hasna", "Dylan", "Rihab", "Quentin", "MaximeH"];
/*function randomName() {
  if(tab.length>0){
    var rand = Math.floor(Math.random()*tab.length);
    console.log("Le nom du gagnant est : "+tab[rand]);
  }
}*/


function shuffle(array)
{
  return array.sort(function() { return Math.random() - .5 });
}

document.querySelector('#myButton').addEventListener('click', function()
                                                     {
  prenom = shuffle(prenom);
  document.querySelector('#out').innerText = prenom;
});

document.querySelector('#out').innerText = prenom;
