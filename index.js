
console.log('hi my name is harsh');

let upload = document.getElementById('upload');

let outputBx = document.getElementById('outputBx');

upload.addEventListener('change',()=>{

let fr = new FileReader();

fr.onload = function(){

outputBx.innerHTML = fr.result
};
});