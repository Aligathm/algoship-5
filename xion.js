/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const answer = [];
    let start = null;
    let end = null;
    for (let i = 0; i < nums.length; i++) {
        if (start === null) {
            start = nums[i];
        }
        if (nums[i] + 1 !== nums[i + 1]) {
            end = nums[i];
        }
        if (end !== null) {
            answer.push(start === end ? `${start}` : `${start}->${end}`);
            start = null;
            end = null;
        }
    }

    return answer;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
