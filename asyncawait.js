console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);

  let getColdDrinks = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(`cold drinks`), 3000);
  });
    console.log(`got ${getColdDrinks}`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

// promises using async await
let posts=[]
let lastActivityTime;
function createPost(data){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            posts.push(data)
            resolve(data)
        },1000)
    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            lastactivitytime=new Date()
            resolve(lastactivitytime)
        },1000)
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
            posts.pop()
            resolve(posts)}
            else{
                reject("no posts")
            }
        },1000)
    })
}

let post1="post1"
let post2="post2"
let post3="post3"
// Promise.all([createPost(post1),createPost(post2),createPost(post3),updateLastUserActivityTime()])
// .then(values=>{
//     console.log("posts:",posts)
//     console.log("lastactivitytime:",lastactivitytime)
//     return deletePost()
// })
// .then(updatedposts=>{
//     console.log("posts after deletion:",updatedposts)
// })
// .catch(error=>{
//     console.log(`an error occured:${error.message}`)
// })
async function x(){
    let a=await createPost(post1)
    let b=await createPost(post2)
    let c=await createPost(post3)
    let d=await updateLastUserActivityTime()
    console.log("posts:",posts)
    console.log("lastactivitytime:",lastactivitytime)
    let e=await deletePost()
    console.log("posts after deletion:",e)
}
x()