let btn = document.getElementById('btn');
console.log(btn.checked);
btn.addEventListener('change',() =>{
  if(btn.value.checked){
    console.log(btn.checked);
    document.body.setAttribute('data-theme','light');
  }
  else{
      document.body.setAttribute('data-theme','dark');

  }
})