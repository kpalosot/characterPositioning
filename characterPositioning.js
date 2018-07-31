function characterPositioning(string){
  var outputObject = {};

  var newString = string.split(" ").join("").toLowerCase();

  for (var i = 0; i < newString.length; i++) {
    if(Object.keys(outputObject).includes(newString[i])){
      outputObject[newString[i]].push(i);
    } else {
      outputObject[newString[i]] = [];
      outputObject[newString[i]].push(i);
    }
  }
  return outputObject;
}

console.log(characterPositioning("lighthouse in the house"));