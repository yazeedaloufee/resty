var longestCommonPrefix = function(strs) {
    let checking =true;
    let common='';
    let test='';
    for(let i = 1; i<=strs[0].length;i++){
        test=strs[0].substring(0,i);
        console.log('test',test)
        for(let j=0;j<strs.length;j++){
            
            if(strs[j].substring(0,i)!==test){
                return common;
            }
            }
        common=test;
    }
    return common;

};
let array=["flower","flow","flight"]
let a=['a']
console.log(longestCommonPrefix(a));