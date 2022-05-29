var selfDividingNumbers = function(left, right) {
    let arry=new Array();
    
    for(let i=left;i<=right;i++){
        if(isSelfDividingNumber(i)){
            arry.push(i);
        }
    }
    return arry;
    
};

var isSelfDividingNumber = (num)=>{
    let temp=num;
    while(temp>0){
        let last=temp%10;
        if(last==0||temp%last!==0){
            return false
        }
        temp=Math.floor(temp/10);
    }
    return true;
}

console.log(selfDividingNumbers(1,22));