const easyParents = ["wolf", "cat", "dog", "bear", "fox", "hen", "lion", "tiger"];
const easyCubs = ["kitten", "tigercub", "puppy", "lioncub", "wolfcub", "foxcub", "bearcub", "chicken"];

function makePic(name, isParent) {
    const pic = document.createElement("img");
    pic.setAttribute("id",name);
    const className = isParent ? "animal" : "kids";
    pic.setAttribute("class", className);
    pic.setAttribute("src", `images/easy/${name}.png`);
    return pic;
}

const createBlockEasy = document.getElementById("easy-container");

easyParents.forEach(parent => createBlockEasy.appendChild(makePic(parent, true)));

easyCubs.forEach(cub => createBlockEasy.appendChild( makePic(cub, false)));