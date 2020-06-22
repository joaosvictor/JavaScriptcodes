var count = new Number();
  var count = 200;

  function start(){

    if ((count - 1) >= 0){
      count -= 1;
      if (count == 0) {
        count = "Atualizado";
      }else if(count < 10){
        count = "0"+count;
      }
      tempo.innerText=count;
      setTimeout('start();', 100);

    }
  }
