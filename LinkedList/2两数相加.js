var addTwoNumbers = function(l1, l2) {
    const res=new ListNode()
    let node1=l1,node2=l2,node3
    while(node1&&node2){
        if(!node3||!node3.next){
            if(!node3){
                node3=res
            }else if(!node3.next){
                node3.next=new ListNode()
                node3=node3.next
            }
        }else{
                node3=node3.next
        }
        if((node1.val+node2.val+node3.val)>=10){
            node3.val=node1.val+node2.val-10+node3.val
            node3.next=new ListNode(1)
            node1=node1.next||null
            node2=node2.next||null
        }else{
            node3.val=node1.val+node2.val+node3.val
            node1=node1.next||null
            node2=node2.next||null
        }
    }
    node1=node1||node2
    while(node1){
        if(node3.next){
            node3=node3.next
        }else{
            node3.next=new ListNode()
            node3=node3.next
        }
        if((node1.val+node3.val)>=10){
            node3.val+=node1.val-10
            node3.next=new ListNode(1)
            node1=node1.next
        }else{
            node3.val+=node1.val
            node1=node1.next
        }
    }
    return res
};