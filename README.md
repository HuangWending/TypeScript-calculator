# TypeScript-calculator
TypeScript计算器程序
import readline from 'readline';: 导入Node.js内置的readline模块，用于读取用户的输入。

const rl = readline.createInterface({ ... });: 创建一个readline接口，指定使用标准输入作为输入源，标准输出作为输出目标。

rl.question('请输入第一个数字：', (num1) => { ... });: 提示用户输入第一个数字，并在用户输入后执行回调函数，将输入的数字作为参数传递给回调函数中的num1参数。

rl.question('请输入操作符（+、-、*、/）：', (operator) => { ... });: 提示用户输入操作符，并在用户输入后执行回调函数，将输入的操作符作为参数传递给回调函数中的operator参数。

rl.question('请输入第二个数字：', (num2) => { ... });: 提示用户输入第二个数字，并在用户输入后执行回调函数，将输入的数字作为参数传递给回调函数中的num2参数。

const number1 = parseFloat(num1);: 将输入的第一个数字转换为浮点数类型，存储在number1变量中。

const number2 = parseFloat(num2);: 将输入的第二个数字转换为浮点数类型，存储在number2变量中。

let result = 0;: 声明一个名为result的变量，用于存储计算结果，默认值为0。

switch (operator) { ... }: 根据输入的操作符进行条件分支选择，根据不同的操作符执行相应的计算，并将结果存储在result变量中。

console.log('结果：', result);: 输出计算结果到控制台。

rl.close();: 关闭readline接口，结束程序的执行。
