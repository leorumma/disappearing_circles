const CircleType = [
    'darkcyan-circle',
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
buttonAddCircles.innerHTML = "Add Circles";

const inputNumberCircles = document.createElement("input");
inputNumberCircles.id = "inputNumberCircles"
inputNumberCircles.placeholder = "Enter the number of circles to be created";
inputNumberCircles.classList.add("input");

const buttonRemoveCircles = document.createElement("button");
buttonRemoveCircles.id = "buttonRemoveCircles";
buttonRemoveCircles.classList.add("button");
buttonRemoveCircles.classList.add("button-remove");
buttonRemoveCircles.type = "button";
buttonRemoveCircles.onclick = () => this.deleteAllCircles();
buttonRemoveCircles.innerHTML = "Remove Circles";

const buttonRemoveBlueCircle = document.createElement("button");
buttonRemoveBlueCircle.id = "buttonBlueCircle";
buttonRemoveBlueCircle.classList.add("button");
buttonRemoveBlueCircle.classList.add("button-blue");
buttonRemoveBlueCircle.type = "button";
buttonRemoveBlueCircle.onclick = () => deleteCirclesByColor('blue-circle', 'blue');
buttonRemoveBlueCircle.innerHTML = "Remove Blue Circles";

const buttonRemoveDarkcyanCircle = document.createElement("button");
buttonRemoveDarkcyanCircle.id = "buttonDarkcyanCircle";
buttonRemoveDarkcyanCircle.classList.add("button");
buttonRemoveDarkcyanCircle.classList.add("button-darkcyan");
buttonRemoveDarkcyanCircle.type = "button";
buttonRemoveDarkcyanCircle.onclick = () => deleteCirclesByColor('darkcyan-circle', 'darkcyan');
buttonRemoveDarkcyanCircle.innerHTML = "Remove Darkcyan Circles";

const buttonRemoveYellowCircle = document.createElement("button");
buttonRemoveYellowCircle.id = "buttonYellowCircle";
buttonRemoveYellowCircle.classList.add("button");
buttonRemoveYellowCircle.classList.add("button-yellow");
buttonRemoveYellowCircle.type = "button";
buttonRemoveYellowCircle.onclick = () => deleteCirclesByColor('yellow-circle', 'yellow');
buttonRemoveYellowCircle.innerHTML = "Remove Yellow Circles";

const buttonRemoveOrangeCircle = document.createElement("button");
buttonRemoveOrangeCircle.id = "buttonOrangeCircle";
buttonRemoveOrangeCircle.classList.add("button");
buttonRemoveOrangeCircle.classList.add("button-orange");
buttonRemoveOrangeCircle.type = "button";
buttonRemoveOrangeCircle.onclick = () => deleteCirclesByColor('orange-circle', 'orange');
buttonRemoveOrangeCircle.innerHTML = "Remove Orange Circles";

divTools.appendChild(buttonRemoveCircles);
divTools.appendChild(buttonAddCircles);
divTools.appendChild(inputNumberCircles);
divTools.appendChild(buttonRemoveBlueCircle);
divTools.appendChild(buttonRemoveYellowCircle);
divTools.appendChild(buttonRemoveOrangeCircle);
divTools.appendChild(buttonRemoveDarkcyanCircle);

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
        circle.id = `${i}-${Math.random() * Math.random()}`
        circle.onclick = (event) => this.disableCircle(event);
        circle.classList.add(CircleType[Math.floor(Math.random() * CircleType.length)]);
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
    if (circles.length === 0) {
        alert(`No circle found`);
        return;
    }
    circles.forEach(circle => {
        circle.remove();
    });
    alert("All circles have been removed")
}

function deleteCirclesByColor(circleClass, color) {
    const circles = document.querySelectorAll(`.${circleClass}`);
    if (circles.length === 0) {
        alert(`No ${color} circle found`)
        return;
    }
    circles.forEach(circle => {
        circle.remove();
    })
    alert(`All ${color} circles have been deleted`);
}