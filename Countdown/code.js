//HTML part
<!DOCTYPE html>
<html>
<head>
  <title>javascript</title>
  <meta charset="utf-8">
  <link type="text/css" rel="stylesheet" media="screen" href="style.css" />
  <script type="text/javascript">

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

  </script>

</head>
  <body onload="start();">
    <div id="tempo" ></div>
  </body>
</html>
//JavaScript one
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
