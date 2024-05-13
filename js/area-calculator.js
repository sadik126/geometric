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
    const Rectangularwidth = document.getElementById('width')
    const width = Rectangularwidth.value;

    const Rectangularlength = document.getElementById('length')
    const length = Rectangularlength.value;

    const area = parseFloat(width) * parseFloat(length)

    const Rectangulararea = document.getElementById('rectangle-area')

    Rectangulararea.innerText = area;
 }

 function calculatepara(){
   const base = getvalueId('parabase')
   const height = getvalueId('paraheight')

   const area = base * height;

   console.log(area)
 }

 function getvalueId(fieldId){
   const inputField = document.getElementById(fieldId)
   const inputvalueText = inputField.value;
   const value = parseFloat(inputvalueText)
   return value;
 }


 function setInputtext(){
  
 }