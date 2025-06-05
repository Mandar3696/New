// function sq(x){
//     let ans = 0;
//     ans = x * x;
//     return ans;
// }

// sq(4)
// console.log(sq(4));

// // const greet = function (namwe) {
// //     console.log("Hello " + namwe);
// // }

// function greet(name ='Guest'){
//     retrun 'Hello, ${name}';
// }

// // Default parameters
// function sq(x=5){
//     let ans = 0;
//     ans = x * x;
//     return ans;
// }

// sq(4)
// console.log(sq(5));


function greet(name , cb){
    console.log("Hello " + name + "!");
    cb();
}

function sayGoodbye(){
    console.log("Goodbye!");
}

greet("Mandar", sayGoodbye);


function yellow(rgb, rdg){
    console.log("The color is yellow");
    rgb(rdg);
    // red(blue);

}

function red(hi){
    console.log("The color is red");
    hi()
}

function blue(){
    console.log("The color is blue");

}

yellow(red, blue);




