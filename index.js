// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const newcat = [...cats, name];
  return newcat;
}
function prependCat(name) {
  const newcat = [name, ...cats];
  return newcat;
}
function removeLastCat() {
  const newcat = cats.slice(0, -1);
  return newcat;
}
function removeFirstCat() {
  const newcat = cats.slice(1);
  return newcat;
}
