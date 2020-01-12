const midParents = ["snake", "bird", "cow", "rabbit", "goose", "butterfly", "sheep", "swine", "fish", "deer", "horse"];
const midKids = ["gosling", "fry", "bunny", "lamb", "nestling", "gosling", "snakelet", "calf", "caterpillar", "fawn", "piglet" ];

function makePic(name, isParent) {
    const pic = document.createElement("img");
    pic.setAttribute("id", name);
    const className = isParent ? "animal" : "kids";
    pic.setAttribute("class", className);
    pic.setAttribute("src", `images/mid/${name}.png`);
    return pic;
}

const createBlockMid = document.getElementById("mid-container");

midParents.forEach(parent => createBlockMid.appendChild(makePic(parent, true)));

midKids.forEach(cub => createBlockMid.appendChild(makePic(cub, false)));
