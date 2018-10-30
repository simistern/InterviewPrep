/*
Example of ntersection solver in lambda.
test body: {
 firstArray : [2, 2, 4, 1],
 secondArray : [1, 2, 0, 2, 3]
}
*/
exports.handler = async (event) => {
    let intersection_result = intersection(event.body.firstArray, event.body.secondArray);
    const response = {
        statusCode: 200,
        body: JSON.stringify(intersection_result)
    };
    return response;
};

function intersection(firstArray, secondArray){
    const hashMap = {};
    const intersectionArray = [];
    firstArray.forEach((element) => {
        hashMap[element] = 1;
    })
    secondArray.forEach((element) => {
      if (hashMap[element] === 1) {
        intersectionArray.push(element);
        hashMap[element]++;
      }
    })
    return intersectionArray
}
