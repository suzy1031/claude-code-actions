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