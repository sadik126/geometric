 document.getElementById('area-calculate').addEventListener('click', function(){

  const baseelement = document.getElementById('base');
  const heightelement = document.getElementById('height');

  const base = parseFloat(baseelement.value) ;

  const height = parseFloat(heightelement.value) ;

  console.log(base , height)


  const area = 0.5 * base * height;

  console.log(area)


  const trainglearea = document.getElementById('traingle-area')

  trainglearea.innerText = area;



 })


 function calculateRect(){
    console.log('rect')
 }