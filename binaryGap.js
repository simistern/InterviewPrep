/* Codility Test for Binary Gaps  */
function solution(N) {
    let dec_ = dec2bin(parseInt(N));
    let longest = binaryGap(dec_);
    return longest;
};

function binaryGap(bin){
    let bin_gaps = [];
    let arr_length = 0;
    for (var i = 1; i < bin.length; i++) {
        if(bin[i] == 0){
            ++arr_length;
        }else if(bin[i] == 1){
            bin_gaps.push(arr_length);
            arr_length = 0;
        }        
    }
    var largest = 0;
    if(bin_gaps.some(el => el > 0)){
        largest = Math.max.apply(Math, bin_gaps);
    }
    if(largest === undefined || largest === null){
        largest = 0;
    }
    return largest;
}

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
