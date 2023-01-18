const getIntersectionNode = function(headA, headB) {
    let curA=headA,curB=headB
    let lengthA=0,lengthB=0
    while(curA){
        lengthA++
        curA=curA.next
    }
    while(curB){
        lengthB++
        curB=curB.next
    }
    if(lengthA<lengthB){
        let tmp=headA
        headA=headB
        headB=tmp
        tmp=lengthA
        lengthA=lengthB
        lengthB=tmp
    }
    let diff=lengthA-lengthB
    curA=headA
    curB=headB
    while(diff--){
        curA=curA.next
    }
    while(curA&&curB){
        if(curA!==curB){
            curA=curA.next
            curB=curB.next
        }else{
            return curA
        }
    }
    return null
}