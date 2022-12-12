function Loki(e){
    e.preventDefault();
    let tara=document.getElementById("text").value;
    let brojznakova=tara.length;
    const myArray=tara.split(/[.?!]/);
    document.getElementById("kolikoRecenica").innerHTML =`Imate ${(myArray.length)-1} rečenica`
    document.getElementById("brojZnakova").innerHTML = `Broj znakova u rečenici je ${brojznakova}`;
  }