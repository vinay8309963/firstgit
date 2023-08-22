// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // header.style.border='solid 6px #000';
// var items = document.getElementsByClassName('list-group');
// for(var i = 0;i<items.length;i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// items[2].style.color = 'green';
// var items = document.getElementsByClassName('list-group');
// items[1].style.fontWeight = 'bold';
// var num = document.getElementsByTagName('li')
// num[4].style.fontWeight = 'bold';
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.background = 'green';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none'

//QUERY SLECTORALL//
var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i<odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}