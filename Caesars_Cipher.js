function rot13(str) {
let regex = /./g;
let newStr = str.match(regex).join("");
let newArr = [];
for(let i = 0; i < newStr.length; i++){
let number = newStr.charCodeAt(i);
if(number < 78 && number >= 65){
  number += 13;
  } 
  else if(number <= 90 && number >= 78){
     number -=13;
  }
newArr.push(String.fromCharCode(number));
}
newArr = newArr.join("");
return str.replace(newStr,newArr);
}

rot13("SERR PBQR PNZC");
