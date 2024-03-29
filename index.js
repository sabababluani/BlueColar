function fib(n) {
    if (n > 0 && n <= 2) {
        return 1
    } else if (n == 0) {
        return 0
    } else if (n > 2) {
        return fib(n - 1) + fib(n - 2)
    }
}
const n = 77
console.log(fib(n))