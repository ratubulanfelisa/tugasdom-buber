const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor='yellow';
judul.innerHTML = 'ratubulanfelisa';
//document.getElementsByTagName()
const p = document.getElementsByTagName( 'p' );
p[0].style.backgroundColor='lightblue';
p[1].style.backgroundColor='grey';
p[2].style.backgroundColor='lightyellow';
p[3].style.backgroundColor='lightgreen';
const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize='50px';
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "dirubah dengan javascript"
//document.querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '25px';
const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.backgroundColor ='lightblue';
for(let i=0;i,p.length; i++){
    p[i].style.backgroundColor = 'lightblue ';
}