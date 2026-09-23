

// const printmyname= ()=>{
// console.log("my name is farah")

// }
// printmyname()



// const printmyage=()=>{
// console.log("my age is 13")
// }
// printmyage()



// const printsum=()=>{
// const a=2
// const b=4
// const sum  =a+b
// console.log(sum)
// }
// printsum()
// const getAvg=()=>{
//     const english=100
//     const arabic=96
//     const math=98  
//     const wow =english+arabic+math
//     console.log(wow/3);
    
// }
// getAvg()
// const printname=(name)=>{

//     return name
// }
// console.log(printname("raseel"));
// console.log(printname("sara"));     

// const sayhello=(name)=>{
//     console.log("hello " +name);
    
// }
// sayhello("sara")




// const sum=()=>{
// return 5+5
// }
// const s = sum()
// console.log(s);

// const sum1 =(n1,n2) => {
//     return n1+n2 
// }
// const s1 =sum1(4,3)
// console.log(s1);


// const getage=(age)=>{
//     return age
    
// }
// const s2=getage(13)
// console.log(s2);

// //q1 
// const showmassage=()=>{
//     console.log("I Love Programming");
    
// }
// showmassage()
// //q2
// const shownumber=()=>{
//     console.log(1000);
    
// }
// shownumber()
// //q3
// const showname=()=>{
//     console.log("my name is farah")
    
// }
// showname()
// //q4
// const givemeyourname=(know)=>{
//     console.log("my name is",know)

// }
// givemeyourname("Lana")
// //q5
// const givemeyourinfo=(age,name,country)=>{
//     console.log(age,name,country);
    
// }
// givemeyourinfo(13,"farah","taybe")
// //q6
// const double=(number)=>{
// return number*2
// }
// console.log(double(7));
// //q7
// const minus=(b1,b2)=>{
// return b1-b2
// }
// const s4=minus(10,5)
// console.log(s4);
// //q8
// const divide=(nun1,nun2)=>{
//     return nun1/nun2

// }
// const s5=divide(8,14)
// console.log(s5);
// //q9
// const calculateTotal=(k,j)=>{
//     return k*j
// }
// const s6=calculateTotal          (10,100)
// console.log(s6);
// //q1
// const grade=90
// if(grade>90){
// console.log("Excellent")
// }
// else{
//     console.log("good")
// }

// //q2
// const temp=24
// if(temp>35){
//     console.log("hot")
// }
// else{
//     console.log("normal");
    
// }
// //q3
// const password="cooky"
// if(password  ==" cooky"){
//     console.log("login")
// }
// else{
//    console.log("try again")
// }


// const arr =[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,11,1,1,1,1,,11,1,1,1,,1,1,1,1,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,,1,1,,1,,1,1,,1,11,1,1,,1,,1,,1,,1,1,,1,1,1,1,,1,,1,1,1,,1,1,1,,11,1,1,1,,1,1]
// console.log("length:",arr.length)
       
// arr.forEach((num)=>{
//     if (num == 1){
//         sum = sum + num;
//     }
// });




const student=[
{
   name:"raseel",
   class:"8-3",
   avg:100
},
{
   name:"tala",
   class:"8-1",
   avg:45
},
{
   name:"reem",
   class:"8-4",
   avg:89
},
{
   name:"eman",
   class:"8-5",
   avg:1
},
]
var sum = 0
student.forEach(student=>{
    sum=sum + student.avg
})
console.log(sum/student.length);





