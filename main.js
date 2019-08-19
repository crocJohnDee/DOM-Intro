console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[10].textContent = "What's up");
console.log(document.images);
console.log(document.links);
console.log(document.forms);


// Target Id's
let headerTitle = document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "fantastic 15"
headerTitle.innerHTML = "<h3>vac is over</h3>";

let header = document.getElementById("main-header");
header.style.borderBottom = "dotted 10px blue";

//target classes
let items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[2]);
items[1].textContent = "wtf";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "green";
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "red";
}
items[1].style.backgroundColor = "green";

// taret tag names
let li = document.getElementsByTagName("li");
console.log(li);
li[2].style.backgroundColor = "purple";

// Query selector  - Use only for one item
let header2 = document.querySelector("#main-header");
header2.style.borderBottom = "solid 10px red";

let input = document.querySelector("input");
input.placeholder = "this is not input 5";

let submit = document.querySelector('input[type = "submit"]')
console.log(submit);
submit.value = "POST";

let item2 = document.querySelector(".list-group-item");
item2.style.color = "orange";

let item2_2nd = document.querySelector('.list-group-item:nth-child(2)')
item2_2nd.style.color = "white";


// QuerySelectorAll 
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "Almost lunchtime";

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = "red"
    even[i].style.backgroundColor = "green"
}


//Traversing (navigating) the DOM
let itemList = document.querySelector('#items');
console.log(itemList);
//Parent elements
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "yellow"
console.log(itemList.parentElement.parentElement.parentElement);
//childNodes
console.log(itemList.children);
console.log(itemList.children[2]);
console.log(itemList.children[2].style.backgroundColor = "grey");
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "exhausted"
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "exhausted"
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);

//create a div
let newDiv = document.createElement('div');
// add class
newDiv.className = "hello";
// add ID
newDiv.id = "hello1";
// add attr - setAttribute
newDiv.setAttribute('title', 'hello div')
console.log(newDiv);
// create text node
let newDivText = document.createTextNode('Helloooo world');
// Add text to div
newDiv.appendChild(newDivText);
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = "22px";
container.insertBefore(newDiv, h1);











