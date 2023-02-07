/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//     if (n === 1) return 1;
//     else if (n === 2) return 2;

//     let sum = 0;
//     const min = Math.floor(n / 2) + 1;
//     for (let i = min; i < n; i++) {
//         sum += i;
//     }

//     if (n % 2 === 0) return sum + 2;
//     else return ++sum;
// };

// DP (Top-down) with Memoization
// var climbStairs = function(n) {
//     const memo = { 1: 1, 2: 2 };
//     function climb(n) {
//         if(memo[n]) return memo[n];
//         else {
//             memo[n] = climb(n - 1) + climb(n - 2);
//             return memo[n];
//         }
//     }

//     return climb(n);
// };

// DP (Bottom-up) with Memoization
function climbStairs(n) {
    if (n <= 2) return n;

    const memo = Array(n + 1).fill(0);

    console.log(memo);
}

climbStairs(5);
