const CircleType = [
    'green-circle',
    'yellow-circle',
    'blue-circle',
    'orange-circle'
]

const divTools = document.createElement("div");
divTools.classList.add("div-tools");

const buttonAddCircles = document.createElement("button");
buttonAddCircles.id = "buttonAddCircles";
buttonAddCircles.classList.add("button");
buttonAddCircles.classList.add("button-add");
buttonAddCircles.type = "button";
buttonAddCircles.onclick = () => addCircle();
buttonAddCircles.innerHTML="Add Circles";

const buttonRemoveCircles = document.createElement("button");
buttonRemoveCircles.id = "buttonRemoveCircles";
buttonRemoveCircles.classList.add("button");
buttonRemoveCircles.classList.add("button-remove");
buttonRemoveCircles.type = "button";
buttonRemoveCircles.onclick = () => this.deleteAllCircles();
buttonRemoveCircles.innerHTML="Remove Circles";

const inputNumberCircles = document.createElement("input");
inputNumberCircles.id = "inputNumberCircles"
inputNumberCircles.placeholder = "Enter the number of circles to be created";
inputNumberCircles.classList.add("input");

divTools.appendChild(buttonRemoveCircles);
divTools.appendChild(buttonAddCircles);
divTools.appendChild(inputNumberCircles);

document.body.onkeydown = (event) => this.enableAllCircles(event);
document.body.appendChild(divTools);

function addCircle() {
    let circlesNumber = parseInt(document.getElementById("inputNumberCircles").value);
    if (circlesNumber == null || isNaN(circlesNumber)) {
        alert("Enter only positive numbers");
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

function enableAllCircles(event) {
    if (event.ctrlKey) {
        const circles = document.getElementsByClassName('circle');
        for (let circle of circles) {
            circle.style.display = "block";
        }
    }
}

function deleteAllCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
       circle.remove();
    });
    alert("all circles have been removed")
}