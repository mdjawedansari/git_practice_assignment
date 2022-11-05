function checkPalindrome(str) {
  let s="";
  for(let i=str.length-1;i>=0;i--){
    s=s+str[i];
  }
  if(str==s){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
