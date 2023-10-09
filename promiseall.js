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
Promise.all([createPost(post1),createPost(post2),createPost(post3),updateLastUserActivityTime()])
.then(values=>{
    console.log("posts:",posts)
    console.log("lastactivitytime:",lastactivitytime)
    return deletePost()
})
.then(updatedposts=>{
    console.log("posts after deletion:",updatedposts)
})
.catch(error=>{
    console.log(`an error occured:${error.message}`)
})

