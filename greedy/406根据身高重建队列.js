const reconstructQueue = function(people) {
    const res=new Array()
    people.sort((a,b)=>{
        if(a[0]===b[0])return a[1]-b[1]
        else return b[0]-a[0]
    })
    for(i of people){
        res.splice(i[1],0,i)
    }
    return res
};