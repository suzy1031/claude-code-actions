# Claude Code Actions

Hello, claude code actions!!

## Calculator Functions (src/culc.ts)

This module provides basic arithmetic calculation functions.

### Functions

#### `add(a: number, b: number): number`

2つの数値を受け取り、その合計を返す関数

**Parameters:**
- `a` - 第1引数（数値）
- `b` - 第2引数（数値）

**Returns:**
- 2つの引数の合計

**Usage Example:**
```typescript
import { add } from './src/culc';

const result = add(5, 3);
console.log(result); // 8
```

#### `subtract(a: number, b: number): number`

2つの数値を受け取り、その差を返す関数

**Parameters:**
- `a` - 第1引数（被減数）
- `b` - 第2引数（減数）

**Returns:**
- 2つの引数の差（a - b）

**Throws:**
- `Error` - 結果がマイナスになる場合

**Usage Example:**
```typescript
import { subtract } from './src/culc';

// 正常なケース
const result1 = subtract(10, 3);
console.log(result1); // 7

// エラーが発生するケース
try {
  const result2 = subtract(3, 10);
} catch (error) {
  console.error(error.message); // '引き算の結果がマイナスになりました'
}
```

### Complete Usage Example

```typescript
import { add, subtract } from './src/culc';

// 加算の例
const sum = add(15, 25);
console.log(`15 + 25 = ${sum}`); // 15 + 25 = 40

// 減算の例（正常）
const difference = subtract(50, 20);
console.log(`50 - 20 = ${difference}`); // 50 - 20 = 30

// エラーハンドリングを含む減算の例
function safeSutract(a: number, b: number): number | null {
  try {
    return subtract(a, b);
  } catch (error) {
    console.error(`計算エラー: ${error.message}`);
    return null;
  }
}

const safeResult = safeSutract(5, 10);
console.log(safeResult); // null (エラーが発生)
```
