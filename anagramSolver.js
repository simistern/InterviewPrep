/*
Example of Anagram solver in lambda.
test body: {
  "words": ["map", "pam", "art", "how", "rat", "tar", "who", "shoop"]
}
*/
exports.handler = async (event) => {
    let sorted_words = parseAnagrams(event.words);
    const response = {
        statusCode: 200,
        body: JSON.stringify(sorted_words)
    };
    return response;
};

function alphabetize(word){
    if(!word){
        return;
    }
    word = word.toLowerCase();
    word = word.split('');
    word.sort();
    word = word.join('');
    return word;
}

function parseAnagrams(words){
    const anagrams = {};
    words.forEach((word) => {
        const sortedWord = alphabetize(word);
        if(anagrams[sortedWord]){
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    })
    return anagrams
}
