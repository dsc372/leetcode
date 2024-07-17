// 平均/最差 o(nlogn)
// 最好 o(n)
function merge(left, right) {
    let temp = new Array();
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            temp.push(left.shift());
        } else {
            temp.push(right.shift());
        }
    }
    return temp.concat(left, right);
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } else {
        let mid = parseInt(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }
}

console.log(mergeSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))