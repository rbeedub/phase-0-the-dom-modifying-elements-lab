// const element = document.createElement("div");

// document.body.append(element);

// const ul= document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// element.append(ul);

// const info = document.getElementById("main");
// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";

// info.textContent = "You've changed what's on the screen!";

// info.style.fontSize = "24px";
// info.style.fontWeight = "bold";
// info.style.color = "black";

const newHeader = document.createElement("h1");


const main = document.getElementById("main");

main.remove();

newHeader.setAttribute('id','victory');

newHeader.textContent = "is the champion!"



