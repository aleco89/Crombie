const v="aabb"
function solution(inputString) {
    let ordered=inputString.split("").sort()
    for (i=0;i<ordered.length;i+2){
        if (ordered[i]!=ordered[i+1]){return false}
    }
    return true   
}

console.log(solution(v))