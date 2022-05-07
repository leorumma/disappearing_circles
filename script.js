const CircleType = [
    'red-circle',
    'yellow-circle',
    'blue-circle'
]

const divTools = document.createElement("div");
divTools.classList.add("div-tools");

const buttonAddCircles = document.createElement("button");
buttonAddCircles.id = "buttonAddCircles";
buttonAddCircles.classList.add("button");
buttonAddCircles.type = "button";
buttonAddCircles.onclick = () => addCircle();
buttonAddCircles.innerHTML="Add Circles";

const buttonRemoveCircles = document.createElement("button");
buttonRemoveCircles.id = "buttonRemoveCircles";
buttonRemoveCircles.classList.add("button");
buttonRemoveCircles.type = "button";
buttonRemoveCircles.onclick = () => this.deleteAllCircles();
buttonRemoveCircles.innerHTML="Remove Circles";

const inputNumberCircles = document.createElement("input");
inputNumberCircles.id = "inputNumberCircles"
inputNumberCircles.classList.add("input");

divTools.appendChild(buttonRemoveCircles);
divTools.appendChild(buttonAddCircles);
divTools.appendChild(inputNumberCircles);

document.body.appendChild(divTools);

function addCircle() {
    let circlesNumber = parseInt(document.getElementById("inputNumberCircles").value);
    if (circlesNumber == null || isNaN(circlesNumber)) {
        alert("enter only positive numbers");
        return;
    }
    for (let i = circlesNumber; i > 0; i--) {
        let circle = document.createElement("div");
        circle.classList.add("circle")
        circle.id = `${i}-${Math.random()*Math.random()}`
        circle.onclick = (event) => this.disableCircle(event);
        circle.classList.add(CircleType[Math.floor(Math.random()*CircleType.length)]);
        document.body.appendChild(circle);
    }
    document.getElementById("inputNumberCircles").value = '';
}

function disableCircle(event) {
    event.target.style.display = "none";
}

function deleteAllCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
       circle.remove();
    });
    alert("all circles have been removed")
}