function solution(A, K) {
    let rotating_array = A;
    for(let x = 0; x < K; x++){
    	rotating_array = rotateOnce(rotating_array);
    // 	console.log(rotating_array);
    }
    return rotating_array;
}

function rotateOnce(num){
    let arr2 = []
    arr2[0] = num[num.length - 1];
    for(let i = 0; i < num.length -1; i++){
    	arr2[i + 1] = num[i];
    }
    return arr2;
}
