// 导入所需的模块
import readline from 'readline';

// 创建读取用户输入的接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 读取第一个数字
rl.question('请输入第一个数字：', (num1) => {
  // 读取操作符
  rl.question('请输入操作符（+、-、*、/）：', (operator) => {
    // 读取第二个数字
    rl.question('请输入第二个数字：', (num2) => {
      // 将输入的数字转换为数值类型
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      
      let result = 0;
      
      // 根据操作符执行相应的计算
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          if (number2 !== 0) {
            result = number1 / number2;
          } else {
            console.log('错误：除数不能为0');
            rl.close();
            return;
          }
          break;
        default:
          console.log('错误：无效的操作符');
          rl.close();
          return;
      }
      
      // 输出结果
      console.log('结果：', result);
      
      // 关闭读取接口
      rl.close();
    });
  });
});
