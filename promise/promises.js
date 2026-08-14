const myPromise=new Promise((resolve,reject)=>{
    let age=19;
    if(age>=18){
        resolve("Elligible for vote...")}
        else{
             reject("Not eligible for vote..")
        }
    
})
console.log(myPromise);
myPromise
    .then((msg)=>console.log(msg))
    .catch((err)=>console.log(err));