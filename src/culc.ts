/**
 * 2つの数値を受け取り、その合計を返す関数
 * @param a 第1引数 - 数値
 * @param b 第2引数 - 数値  
 * @returns 2つの引数の合計
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 2つの数値を受け取り、その差を返す関数
 * @param a 第1引数 - 数値（被減数）
 * @param b 第2引数 - 数値（減数）
 * @returns 2つの引数の差（a - b）
 * @throws {Error} 結果がマイナスになる場合
 */
export function subtract(a: number, b: number): number {
  const result = a - b;
  if (result < 0) {
    throw new Error('引き算の結果がマイナスになりました');
  }
  return result;
}

/**
 * 2つの数値を受け取り、その積を返す関数
 * @param a 第1引数 - 数値
 * @param b 第2引数 - 数値
 * @returns 2つの引数の積（a × b）
 * @throws {Error} 結果がマイナスになる場合
 */
export function multiply(a: number, b: number): number {
  const result = a * b;
  if (result < 0) {
    throw new Error('掛け算の結果がマイナスになりました');
  }
  return result;
}

/**
 * 3つの引数を受け取り、操作タイプに応じて対応する関数を実行する統合関数
 * @param operation 実行する操作タイプ ('add' | 'subtract' | 'multiply')
 * @param a 第1数値引数
 * @param b 第2数値引数
 * @returns 指定された操作の結果
 * @throws {Error} 無効な操作タイプが指定された場合、または各関数でエラーが発生した場合
 */
export function calculate(operation: 'add' | 'subtract' | 'multiply', a: number, b: number): number {
  switch (operation) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    default:
      throw new Error(`無効な操作タイプです: ${operation}`);
  }
}