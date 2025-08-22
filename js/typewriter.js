const text = "Where Work Happens";
const target = document.getElementById("typewriter");
let index = 0;
let isDeleting = false;

function typeLoop() {
  const currentText = isDeleting
    ? text.slice(0, index--)
    : text.slice(0, index++);

  target.innerHTML = currentText;

  if (!isDeleting && index === text.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, 1000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeLoop, 500);
  } else {
    setTimeout(typeLoop, 150);
  }
}

typeLoop();