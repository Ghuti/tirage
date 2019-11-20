//randomized
document.querySelector('#myButton').addEventListener('click', function()
{
  function randomize(tab) {
    var i, j , tmp;
    for (i = tab.length - 1; i>0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = tab[i];
      tab[i]=tab[j];
      tab[j] = tmp;
    }
    return tab;

  }
  tab =["Tony", "Yannick", "David", "Laura", "Tristan", "Maxime H", "Hasna", "Quentin", "Rihab", "Dylan", "Pierre", "MaximeL"];
  tab = randomize(tab);
  
  p1.innerHTML = tab[0];
  p2.innerHTML = tab[1];
  p3.innerHTML = tab[2];
  p4.innerHTML = tab[3];
  p5.innerHTML = tab[4];
  p6.innerHTML = tab[5];
  p7.innerHTML = tab[6];
  p8.innerHTML = tab[7];
  p9.innerHTML = tab[8];
  p10.innerHTML = tab[9];
  p11.innerHTML = tab[10];
  p12.innerHTML = tab[11];
});


//animation
randomized = document.getElementById("myButton");
d = document.getElementById("top");

randomized.onclick = function() {
  throwawayNode = d.removeChild(randomized);
}
