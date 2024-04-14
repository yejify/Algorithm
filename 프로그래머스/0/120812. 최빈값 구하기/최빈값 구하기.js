function solution(array) {
    const frequency = {};
    let maxFrequency = 0;
    let mode = null;
    let modeCount = 0;
    
    array.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
        if (frequency[item] > maxFrequency) {
            maxFrequency = frequency[item];
            mode = item;
            modeCount = 1;
        } else if (frequency[item] === maxFrequency) {
            modeCount++;
        }
    });

    return modeCount === 1 ? mode : -1;
}