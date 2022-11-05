function identifyPrime(num){
  let prime=0;
  for(let i=0;i<=num;i++){
    if(num%i===0){
      prime++;
    }
  }
  if(prime==2){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
