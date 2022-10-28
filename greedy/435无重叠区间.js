const eraseOverlapIntervals = function(intervals) {
    if(intervals.length===0)return 0
    intervals.sort((a,b)=>a[1]-b[1])
    let end=intervals[0][1],count=1
    for(let i=1;i<intervals.length;i++){
        if(end<=intervals[i][0]){
            end=intervals[i][1]
            count++
        }
    }
    return intervals.length-count
};