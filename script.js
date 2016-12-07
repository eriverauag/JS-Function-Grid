//Write your function calls below this line
function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) +min;
}
setColor(getRandomInt(0,9),getRandomInt(0,9),"red");