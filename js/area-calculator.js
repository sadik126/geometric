 document.getElementById('area-calculate').addEventListener('click', function(){

  // const baseelement = document.getElementById('base');
  // const heightelement = document.getElementById('height');

  // const base = parseFloat(baseelement.value) ;

  // const height = parseFloat(heightelement.value) ;

  const base = getvalueId('base')

  const height = getvalueId ('height')

  console.log(base , height)


  const area = 0.5 * base * height;

  console.log(area)


  // const trainglearea = document.getElementById('traingle-area')

  // trainglearea.innerText = area;

  setInputtext('traingle-area', area)



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

    setInputtext('Parallelogram-area' , area)

   console.log(area)
 }

 function calculaterom(){
  const d1 = getvalueId('d1');
  const d2 = getvalueId('d2')

  const area = 0.5 * d1 *d2;

  setInputtext('rombos-area' , area)
 }


 function calculatepant (){
  const p = getvalueId('p')
  const b = getvalueId('b')

  const area = 0.5 * p * b;

  setInputtext('pantagon-area' , area)
 }

 function getvalueId(fieldId){
   const inputField = document.getElementById(fieldId)
   const inputvalueText = inputField.value;
   const value = parseFloat(inputvalueText)
   return value;
 }


 function setInputtext(elementId , area){

  const element = document.getElementById(elementId)

  element.innerText = area;

 }