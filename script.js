const CircleType = [
    'red-circle',
    'yellow-circle',
    'blue-circle'
]

const divTools = document.createElement("div");

const buttonAddCircles = document.createElement("button");
buttonAddCircles.classList.add("button");
buttonAddCircles.type = "button";
buttonAddCircles.onclick = () => addCircle();
buttonAddCircles.innerHTML="Adicionar Circulos"

const inputNumberCircles = document.createElement("input");
inputNumberCircles.id = "inputNumberCircles"
inputNumberCircles.classList.add("input");

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
        circle.id = i.toString();
        circle.onclick = (event) => this.disableCircle(event);
        circle.classList.add(CircleType[Math.floor(Math.random()*CircleType.length)]);
        document.body.appendChild(circle);
    }
    document.getElementById("inputNumberCircles").value = '';
}

function disableCircle(event) {
    event.target.style.display = "none";
}