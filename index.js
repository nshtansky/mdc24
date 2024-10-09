import init, {wasm_fibo} from "./pkg/mdc24.js";

const fiboNumber = 45;

function calcWasm(n) {
    return wasm_fibo(n);
}

function calcJS(n) {
    return n <= 1 ? n : calcJS(n - 1) + calcJS(n - 2);
}

document.getElementById('f-btn').addEventListener('click', () => {
    const startTime = performance.now();
    const resultJS = calcJS(fiboNumber);
    const secondTime = performance.now();
    const resultWasm = calcWasm(fiboNumber);
    const endTime = performance.now();

    const timeJS = secondTime - startTime;
    const timeWasm = endTime - secondTime;

    document.getElementById('f-js').innerText = timeJS.toFixed() + ' ms';
    document.getElementById('f-wasm').innerText = timeWasm.toFixed() + ' ms';
    const times = Math.floor((timeJS / timeWasm) * 10) / 10;

    document.getElementById('f-desc').innerText = `WebAssembly is ${times}x faster that JavaScript`;
    document.getElementById('f-result').innerText = `Fibonacci number #${fiboNumber} is ${resultWasm}`;
});

init();
