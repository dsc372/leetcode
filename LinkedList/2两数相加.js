var addTwoNumbers = function(l1, l2) {
    const res=new ListNode()
    let node1=l1,node2=l2,node3
    while(node1&&node2){
        if(!node3)
            node3=res
        else if(!node3.next){
            node3.next=new ListNode()
            node3=node3.next
        }
        else
            node3=node3.next
        const add_val=node1.val+node2.val+node3.val
        if(add_val>=10){
            node3.val=add_val-10
            node3.next=new ListNode(1)
        }
        else
            node3.val=add_val
        node1=node1.next
        node2=node2.next
    }
    node1=node1||node2
    while(node1){
        if(node3.next)
            node3=node3.next
        else{
            node3.next=new ListNode()
            node3=node3.next
        }
        const add_val=node1.val+node3.val
        if(add_val>=10){
            node3.val=add_val-10
            node3.next=new ListNode(1)
        }
        else
            node3.val=add_val
        node1=node1.next
    }
    return res
};