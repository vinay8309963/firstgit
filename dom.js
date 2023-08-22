var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
header.style.border='solid 6px #000';
var items = document.getElementsByClassName('list-group-item');
for(var i = 0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
}

items[2].style.color = 'green';