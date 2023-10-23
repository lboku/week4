// 1)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.
// let arr = [1, 2, 3, 4, 5];
// function sum(arr){
//     let count=0;
//     for(let i=0; i<arr.length; i++){
//         count+=arr[i]
//     }
//     return count;
// }
// console.log(sum(arr))
// 2)დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.
// let arr = [1, 2, 3, 4, 5];
// let summ = arr.reduce(function(a, b){
//   return a + b;
// });
// let averr =summ/arr.length
// console.log(averr);

// 3)დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// let arr = [1, 8, 2, 9, 3, 7, 4, 5, 10];
// console.log(arr.sort((a, b) =>a-b));
// 4)დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// let arr = [1, 8, 2, 9, 3, 7, 4, 5];
// console.log(Math.max(...arr));

// 5)დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
// let arr = [1, 8, 2, 9, 3, 7, 4, 5];
// console.log(Math.min(...arr));
// 6)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// let arr =[1, 8, 2, 9, "hello", "world"]
// console.log(arr[arr.length-1])
// 7)დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.
//  let arr =[1, 8, 2, 9, "hello", "world"]
// console.log(arr[arr.length-1])

// 8)დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// 9)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let arr=[1,2,3,4,5,6,7,8,]
// let filtered=arr.filter((number)=>(number%2==0))
// console.log(filtered)
// 10)დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// let arr=[1, 8, 2, 9,]
// let second=(Math.max(...arr))
// console.log(second-1)

// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.
// let arrOne=[1, 8, 2, 9,]
// let arrTwo=[1,2,3,4,5,6,7,8,]
// let summ = arrOne.reduce(function(a, b){
//   return a + b;
// });
// let summTwo = arrTwo.reduce(function(a, b){
//   return a + b;
// });
// if(summ==summTwo){
//     console.log("true")
// }
// if(summ!=summTwo){
//     console.log("false")
// }
// 12)დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// let arr = [1, 8, 2, 9, 3, 7, 4, 5, 10,];
//  let resOne=(arr.sort((a, b) =>a-b));
//  let array = [6,12,11,15,14,]
//  let resTwo=(array.sort((a, b) =>b-a))

// let result=resOne+" "+resTwo
// console.log(result)


// 13)დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let arr=["Serendipity", "Mellifluous", "Quixotic", "Persnickety",  "Ephemeral", "Petrichor", "Limerence", "Brouhaha", "HalcyonSusurrus"]
// arr.sort((a, b) => a.localeCompare(b));
// console.log(arr);

// 14)დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// let arr=[1,2,3,4,5,6,];
// let arrOne=[1,2,5,6,7,8,9,10,11]
// let arrTwo=[1,2,,14,27]
// let summ = arrOne.reduce(function(a, b){
//  return a + b;});
//  let sumTwo = arrTwo.reduce(function(a, b){
//   return a + b;})
//   let commonElements = arr.filter(element => arrOne.includes(element) && arrTwo.includes(element));

// console.log("Common elements:", commonElements);

// 15)შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე
// let car = {
//     brand: "Mercedes",
//     model: "W198 SL",
//     year: 1954
// };
// console.log(car);

// 16)დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// let car = {
//         brand: "Mercedes",
//         model: "W198 SL",
//         year: 1954 ,
//         start: "The car is starting!"
//     };
//     console.log(car.start);
// 17)შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// let person = {
//     firstname: "John",
//     lastname: "Smith",
//     age : 21,
//     city : "San Francisco",
// };
// console.log(person.firstname);
// 18)დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
// let person = {
//     firstname: "John",
//     lastname: "Smith",
//     age : 21,
//     city : "San Francisco",
//     job : "Sales"
// };
// console.log(person)
