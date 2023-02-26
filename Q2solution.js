// // ***********************************************************************
// // QUESTION 2. DEBUG  : https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb
// // ***********************************************************************

// // replace single quotes with the " at the end 
// alert( "I'm JavaScript!");
// // -----
// alert("I'm invoked!");
// // -----------

// // js ignores extra whitespaces 
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

// // --------------

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+ " " + lname;
// alert( admin ); // "Guvi geek"
// // ----------------

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );
// // ----------------

// let a = Number(prompt("First number?"));
// let b = Number(prompt("Second number?"));
// alert(a + b);
// // -------------------

// var a = "2" > "12";
// //Don't touch below this
// if (a) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }
// // Since we are checking string "2" and "12" not number 2 and 12,
// // strings are compared lexicographically hence 12 < 2 , 
// // i.e ascii of 1 in 12 is < ascii of 2 in 2

// // --------------------------
// let a = Number(prompt("Enter a number?"));
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// } 
// // only when a  = 0 , we can get Success on the console
// // but string "0" is still considered true, so convert to Number. 
// // --------------------

// let value = Number(prompt('How many runs you scored in this ball'));
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }
// // -----------------------------------

// let login = 'Employee';
// let message = (login === 'Employee') ? 'Greetings': (login == 'Director') ? 'Greetings' :  (login == '') ? 'No login' : '';
// console.log(message);
// // --------------------------

// let message;
// if (null || 2 || undefined )
// {
//   message = "welcome boss";
// }
// else
// {
//   message = "Go away";
// }
//   console.log(message);
// //   ----------------------------------

// let message;
// let lock = 0;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// //   ---------------------------

//   let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && "" || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);
// // -------------------------------

// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( i-- );
// }

// // ---------------------

// let num = 1
// console.log(num,num += 1,num += 1)
// console.log(num += 1,num += 1,num += 1)
// console.log(num += 1,num += 1,num += 1)
// console.log(num += 1)

// // -----------------

// for (let num = 2; num <= 20; num += 2) {
//   console.log(num)
//  }
// //  -------------------

//  let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);
// }

// // ----------------------------

// let countdown = 100;
// while (countdown > 0) {
//      if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
//   countdown--;
// }

// // ----------------------
// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += "Hello";
// }
// console.log(msg);
// // hi 
// // string "0" equals a boolean true 
// // number 0 equals a boolean false 
// // hence only the first if {} is executed.


