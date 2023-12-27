// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI") as HTMLCollectionOf<HTMLLIElement>;
let i: number;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeItem = document.getElementsByClassName("close") as HTMLCollectionOf<HTMLElement>;
for (let i = 0; i < closeItem.length; i++) {
  closeItem[i].onclick = function() {
    const div = (closeItem[i] as HTMLElement).parentElement as HTMLLIElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul') as HTMLUListElement;
list.addEventListener('click', function(ev) {
  if ((ev.target as HTMLElement).tagName === 'LI') {
    (ev.target as HTMLLIElement).classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = (document.getElementById("myInput") as HTMLInputElement).value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    (document.getElementById("myUL") as HTMLUListElement).appendChild(li);
  }
  (document.getElementById("myInput") as HTMLInputElement).value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement as HTMLLIElement;
      div.style.display = "none";
    };
  }
}
