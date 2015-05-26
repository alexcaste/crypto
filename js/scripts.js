var cryptograph = function(inputString) {
  var masterArray = inputString.split("");
  var rows = 0
  var word = ""
  var outputArray = []
  var outputString = ''
  for (var columns = 1; columns * columns < masterArray.length; columns++) {
  }

  for (var x = 0; x <= masterArray.length; x++) {
    word = word.concat(masterArray[x])

    if word.length === columns {
      outputArray.push(word);
      var word = ""
    };

    outputArray.push(word);
  }


  // for (var x = 0; x < outputArray.length; x++) {
  //     for(var y = 0; y < columns; y++) {
  //       letter = outputArray[y].charAt(x);
  //       if outputArray[y].charAt(x) === nil{
  //       } else {
  //         outputString.push(letter);
  //       }
  //     }
  // }


  return inputString;

};
