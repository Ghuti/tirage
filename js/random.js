
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
  var  tab =["Tony", "Yannick", "David", "Laura", "Tristan", "Maxime H", "Hasna", "Quentin", "Rihab", "Dylan", "Pierre", "MaximeL"];
  tab = randomize(tab);
  out.innerHTML = tab;
});
