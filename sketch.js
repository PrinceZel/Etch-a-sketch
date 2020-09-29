const container = document.querySelector(`#div`);

// 16 divs
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');
const div13 = document.createElement('div');
const div14 = document.createElement('div');
const div15 = document.createElement('div');
const div16 = document.createElement('div');

div1.classList.add("grid");
div2.classList.add("grid");
div3.classList.add("grid");
div4.classList.add("grid");
div5.classList.add("grid");
div6.classList.add("grid");
div7.classList.add("grid");
div8.classList.add("grid");
div9.classList.add("grid");
div10.classList.add("grid");
div11.classList.add("grid");
div12.classList.add("grid");
div13.classList.add("grid");
div14.classList.add("grid");
div15.classList.add("grid");
div16.classList.add("grid");

container.appendChild(div1);
container.appendChild(div2);
container.appendChild(div3);
container.appendChild(div4);
container.appendChild(div5);
container.appendChild(div6);
container.appendChild(div7);
container.appendChild(div8);
container.appendChild(div9);
container.appendChild(div10);
container.appendChild(div11);
container.appendChild(div12);
container.appendChild(div13);
container.appendChild(div14);
container.appendChild(div15);
container.appendChild(div16);

div1.textContent = "1";
div2.textContent = "2";
div3.textContent = "3";
div4.textContent = "4";
div5.textContent = "5";
div6.textContent = "6";
div7.textContent = "7";
div8.textContent = "8";
div9.textContent = "9";
div10.textContent = "10";
div11.textContent = "11";
div12.textContent = "12";
div13.textContent = "13";
div14.textContent = "14";
div15.textContent = "15";
div16.textContent = "16";

container.style.display = 'grid';
container.style.gridRowGap = '50px';
container.style.columnGap = '50px';
container.style.gridTemplateColumns = "auto auto auto auto";



function removeTransition(e){
    e.target.classList.add('hovering');
}

const divs = Array.from(document.querySelectorAll('.grid'));
divs.forEach(div => div.addEventListener('mouseenter', removeTransition));
