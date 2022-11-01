const mergeTwoLists = function(list1, list2) {
    if(list1==null||list2==null){
        return list1||list2
    }
    if(list1.val>list2.val){
        [list1,list2]=[list2,list1]
    }
    let head=list1,tmp1=list1,tmp2=list2
    while(list1&&list2){
        if(list1.val<list2.val){
            tmp1=list1
            list1=list1.next
        }else{
            tmp2=list2.next
            list2.next=tmp1.next
            tmp1.next=list2
            list1=list2
            list2=tmp2
        }
    }
    if(list2){
        tmp1.next=list2
    }
    return head
};