// // // function findposandneg(n){
// // //     if(n>0){
// // //         return`this is a ${n} positive number`
// // //     }
// // //     else{
// // //         return`this is a ${n} negative number`
// // //     }
// // // }
// // // console.log(findposandneg(5));
// // // console.log(findposandneg(50));
// // // console.log(findposandneg(-54));


// // function findevnandodd(n){
// //     if(n>0){
// //         return`this is a ${n} even number`
// //     }
// //     else{
// //         return`this is a ${n} odd number`
// //     }
// // }
// // console.log(findevnandodd(5));
// // console.log(findevnandodd(50));
// // console.log(findevnandodd(-54));


// function findgreaterthanandlessthan(n){
//     if(n>0){
//         return`this is a ${n} greater than`
//     }
//     else{
//         return`this is a ${n} less than`
//     }
// }
// console.log(findgreaterthanandlessthan(5));
// console.log(findgreaterthanandlessthan(50));
// console.log(findgreaterthanandlessthan(-54));




// function findgradeofstudents(m){
//     if(m>=91&& m<=100){
//         return `Assign A Grade`
//     }
//     else if(m>=81 && m<=90){
//         return `Assign B Grade`
//     }
//      else if(m>=71 && m<=80){
//         return `Assign C Grade`
//      }
    
//     else if(m>=61 && m<=70){
//        return `Assign D Grade`
//     }
//     else if(m<60 && m>0){
//         return `fail`
//     }
//     else{
// return `invalid no`
//     }
    
// }
// console.log(findgradeofstudents(860.5));
// console.log(findgradeofstudents(88));
// console.log(findgradeofstudents(77.8));
// console.log(findgradeofstudents(65));
// console.log(findgradeofstudents(40));

// function calculateprice(p){
//     if(p>=0 && p<=12){
//         return `Pay the ticket price 5`
//     }
//     else if(p>=13 && p<=18){
//         return` Pay the ticket price 10`
//     }
//     else if (p>=19 && p<=60){
//         return `Pay the ticket price 20`
//     }
//     else if (p>=60 && p<=85){
//         return `Pay the ticket price 15`
//     }
//     else{
//         return `null`
//     }
// }
// console.log(calculateprice(15));
// console.log(calculateprice(6));
// console.log(calculateprice(55));
// console.log(calculateprice(78));
// console.log(calculateprice(250));

   //  for(let i=1; i<=10; i++){
   //      console.log(i);
   //  }

// function findleapyear(y){
//    if(y%4==0){
//       return`true`
//    }
//    else{
//       return `false`
//    }
// }
// console.log(findleapyear(2025))


// const studentdata ={
//    aryan:{name:`aryan`,age:`18`,class:`bca`},
//    anmol:{name:`anmol`,age:`18`,class:`bca`},
//    abhishek:{name:`abhishek`,age:`17`,class:`bca`},
//    himanshu:{name:`himanshu`,age:`20`,class:`bca`},
//    gitesh:{name:`gitesh`,age:`22`,class:`bca`},
//    ujjwal:{name:`ujjwal`,age:`17`,class:`bca`},
//    nitish:{name:`nitish`,age:`19`,class:`bca`},
//    abhinav:{name:`abhinav`,age:`20`,class:`bca`}
   
// }
// console.log('age -',studentdata.gitesh.age)
// console.log('name -',studentdata.aryan.name)
// console.log('class -',studentdata.anmol.class)



// const studentdata =[
//    {name:`aryan`,age:`18`,class:`bca`},
//    {name:`anmol`,age:`18`,class:`bca`},
//    {name:`abhishek`,age:`17`,class:`bca`},
//    {name:`himanshu`,age:`20`,class:`bca`},
//    {name:`gitesh`,age:`22`,class:`bca`},
//    {name:`ujjwal`,age:`17`,class:`bca`},
//    {name:`nitish`,age:`19`,class:`bca`},
//    {name:`abhinav`,age:`20`,class:`bca`}
   
// ]
// for(let a in studentdata){
//    console.log(`name=`,studentdata[a].name)
//    console.log(`class=`,studentdata[a]. class)
//    console.log(`age=`,studentdata[a].age)
//    console.log('\n')
// }


// let array=[22,33,56,57,89]
// const mapfunction =array.map(function(a){return a+5})
// const filterfunction = erray.filter(function(a)ret)
// console.log(mapfunction)


function findresult(m){
    if(m<=36){
        return `pass`
    }
    else{
        return `fail`;
   }
}
console.log(findresult(55));