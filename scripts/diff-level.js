const diffImage = [];
for (i = 1; i < 9; i++ ) {
    diffImage.push(`animal${i}`);
}
// console.log(diffImage);
const diffAnimal = ["mole", "otter", "lynx", "raccoon", "sloth", "viper", "rhino"];

function makePic(name, isParent) {
    const pic = document.createElement("img");
    pic.setAttribute("id",name);
    const className = isParent ? "animal" : "kids";
    const type = (className === "animal") ? "jpg" : "png";
    pic.setAttribute("class", className);
    pic.setAttribute("src", `images/diff/${name}.${type}`)
    return pic;
}

const createBlockDiff = document.getElementById("diff-container");

diffImage.forEach(image => createBlockDiff.appendChild(makePic(image, true )));
diffAnimal.forEach(animal => createBlockDiff.appendChild(makePic(animal, false)));