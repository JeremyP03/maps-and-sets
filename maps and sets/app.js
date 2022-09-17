let hasDuplicate = arr => new Set(arr).size !== arr.length;
function vowels(lett) {
    return "aeiou".includes(lett);
}
function vowelCount(string) {
    let lMap = new Map();
    for(let lett of string) {
        let lowCap = lett.toLowerCase()
        if(vowels(lowCap)) {
            if(lMap.has(lowCap)) {
                lMap.set(lowCap, lMap.get(lowCap) + 1);
            }
        else {
            lMap.set(lowCap, 1);
        }
        }
    }
    return lMap;
}