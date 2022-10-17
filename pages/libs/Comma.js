// 숫자를 파라미터로 받아서 3자리 마다 콤마를 찍은 문자열로 변환해 주는 함수
// ex) enter: 1234567890 -> "1,234,567,890" 이렇게 반환된다.

export function addCommas(number) {
  try {
    return number.toLocaleString("ko-KR");
  } catch (e) {
    console.error(e);
    return NaN;
  }
}

// 콤마가 찍힌 문자열을 받아서 콤마를 제거해 주는 함수
// ex) enter: "1,234,567,890" -> 1234567890 이렇게 반환된다.
// removeCommas를 사용하는 이유 -> 입력받은 데이터를 백단으로 보낼때 다시 숫자로 보내야 하기 때문임

export function removeCommas(numberString) {
  return numberString.split(",").join();
}
