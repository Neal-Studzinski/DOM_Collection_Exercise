var contentArea = document.querySelector('.market-list');

var filtered = results.filter(function(item, i, array){
  return ( item.marketname.split(' ')[0] <= 10 );
});

filtered.forEach(function(item, i, array){
    var name = item.marketname.split(' ').splice(1).join(' ');
    contentArea.innerHTML += '<li>' + name + '</li>';
});

// cat gifs
var catContentArea = document.querySelector('.cat-gifs');

cat_results.data.forEach(function(item, i, array){
  catContentArea.innerHTML += '<img src="' + item.images.original.url + '">';
});
