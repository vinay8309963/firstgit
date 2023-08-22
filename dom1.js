var itemlist = document.querySelector('#items');
//parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentNode.parentNode.parentNode);

//parentElement 
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemlist.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'yellow';

//FirstChild
// console.log(itemlist.firstChild);
// //FirstElementChild
// console.log(itemlist.firstElementChild);

// //LastChild
// console.log(itemlist.lastChild);
// //LastElementChild
// console.log(itemlist.lastElementChild);

//nextsibling
// console.log(itemlist.nextSibling);
// //nextElementSibling
// console.log(itemlist.nextElementSibling);

//previoussibling
// console.log(itemlist.previousSibling);
// //previouselementsibling
// console.log(itemlist.previousElementSibling);

//createElement

//create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
//Create text Node
var newDivtext = document.createTextNode("HEllo word");
//Add text to div
newDiv.appendChild(newDivtext);
//insert into DOM
var peep = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
console.log(h1);
// newDiv.style.fontSize = '30px';
peep.insertBefore(newDiv,h1);

var newDiv1 = document.createElement('div1');
newDiv1.className = 'hello';
newDiv1.id = 'hello1';
newDiv1.setAttribute('title','Hello Div');
//Create text Node
var newDiv1text = document.createTextNode("HEllo word");
//Add text to div
newDiv1.appendChild(newDiv1text);

var peep1 = document.querySelector('h2 .list-group-item');
var h2 = document.querySelectorAll('h2 li');
console.log(h2[0]);
peep1.insertBefore(newDiv1,h2);
