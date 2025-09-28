/**
 * 引数で受け取った文字列をyyyy/mm/dd形式に変換する関数
 * @param dateString 変換対象の日付文字列
 * @returns yyyy/mm/dd形式の日付文字列
 * @throws {Error} 無効な日付文字列が入力された場合
 */
export function formatToYyyyMmDd(dateString: string): string {
  if (!dateString || typeof dateString !== "string") {
    throw new Error("有効な日付文字列を入力してください。");
  }

  // 文字列をトリムして空白文字を除去
  const trimmedString = dateString.trim();

  if (trimmedString === "") {
    throw new Error("空の文字列は変換できません");
  }

  // 様々な区切り文字を統一（ハイフン、スラッシュ、ドット、スペース）
  const normalizedString = trimmedString
    .replace(/[-\.\/\s]+/g, "/")
    .replace(/年|月|日/g, "/") // 日本語の年月日も対応
    .replace(/\/+/g, "/") // 連続するスラッシュを単一に
    .replace(/^\/|\/$/g, ""); // 先頭と末尾のスラッシュを除去

  // 数字のみの文字列（YYYYMMDD形式）の場合
  if (/^\d{8}$/.test(normalizedString)) {
    const year = normalizedString.substring(0, 4);
    const month = normalizedString.substring(4, 6);
    const day = normalizedString.substring(6, 8);
    return validateAndFormatDate(year, month, day);
  }

  // スラッシュで区切られた形式
  const parts = normalizedString.split("/");

  if (parts.length !== 3) {
    throw new Error("日付は年、月、日の3つの部分で構成される必要があります");
  }

  let year: string, month: string, day: string;

  // 各部分が数値かチェック
  if (!parts.every((part) => /^\d+$/.test(part))) {
    throw new Error("日付の各部分は数値である必要があります");
  }

  // 年の位置を判定（4桁の場合は年として扱う）
  const yearIndex = parts.findIndex((part) => part.length === 4);

  if (yearIndex !== -1) {
    // 4桁の年が見つかった場合
    year = parts[yearIndex];
    const remainingParts = parts.filter((_, index) => index !== yearIndex);

    // 月日の順序を判定（より大きな値を日とみなす）
    if (parseInt(remainingParts[0]) > 12) {
      day = remainingParts[0];
      month = remainingParts[1];
    } else if (parseInt(remainingParts[1]) > 12) {
      month = remainingParts[0];
      day = remainingParts[1];
    } else {
      // どちらも12以下の場合は最初を月とみなす
      month = remainingParts[0];
      day = remainingParts[1];
    }
  } else {
    // 4桁の年がない場合、最初の部分を年とみなし、2桁なら20xxとして扱う
    let yearPart = parts[0];
    if (yearPart.length === 2) {
      const yearNum = parseInt(yearPart);
      // 50以上なら19xx、未満なら20xxとして解釈
      yearPart = yearNum >= 50 ? `19${yearPart}` : `20${yearPart}`;
    }
    year = yearPart;
    month = parts[1];
    day = parts[2];
  }

  return validateAndFormatDate(year, month, day);
}

/**
 * 年、月、日の値を検証してフォーマットする内部関数
 * @param year 年の文字列
 * @param month 月の文字列
 * @param day 日の文字列
 * @returns yyyy/mm/dd形式の日付文字列
 * @throws {Error} 無効な日付の場合
 */
function validateAndFormatDate(
  year: string,
  month: string,
  day: string
): string {
  const yearNum = parseInt(year);
  const monthNum = parseInt(month);
  const dayNum = parseInt(day);

  // 基本的な範囲チェック
  if (yearNum < 1000 || yearNum > 9999) {
    throw new Error("年は4桁の数値である必要があります");
  }

  if (monthNum < 1 || monthNum > 12) {
    throw new Error("月は1から12の間の数値である必要があります");
  }

  if (dayNum < 1 || dayNum > 31) {
    throw new Error("日は1から31の間の数値である必要があります");
  }

  // Dateオブジェクトを使って実際の日付として有効かチェック
  const date = new Date(yearNum, monthNum - 1, dayNum);

  if (
    date.getFullYear() !== yearNum ||
    date.getMonth() !== monthNum - 1 ||
    date.getDate() !== dayNum
  ) {
    throw new Error("存在しない日付です");
  }

  // yyyy/mm/dd形式でフォーマット
  const formattedMonth = monthNum.toString().padStart(2, "0");
  const formattedDay = dayNum.toString().padStart(2, "0");

  return `${yearNum}/${formattedMonth}/${formattedDay}`;
}
