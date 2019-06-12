function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName('target')[0];
}

function deepestChild(){
  return document.getElementById("grand-node").querySelector('div div div div div')
}

function increaseRankBy(n){
  const list = document.getElementsByClassName('ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}