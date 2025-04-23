const container = document.getElementById('container');

let lineCount = 0;
const maxLines = 20;

// タイピングのように1行ずつ追加していく関数
function typeNextLine() {
  if (lineCount >= maxLines) {
    showFinalMessage();
    return;
  }

  const line = document.createElement('div');
  container.appendChild(line);

  const text = '次はあなたです';
  let index = 0;

  const typer = setInterval(() => {
    line.textContent += text[index++];
    if (index >= text.length) {
      clearInterval(typer);
      lineCount++;
      setTimeout(typeNextLine, 40); // 次の行へ
    }
  }, 50);

  // 自動スクロール（ページ下端でなければゆっくり下げる）
  setTimeout(() => {
    window.scrollBy({ top: 20, behavior: 'smooth' });
  }, 100);
}

// 最後に「みつけました、鈴木さん」を表示
function showFinalMessage() {
  const final = document.createElement('div');
  final.textContent = 'こんにちは、飯山空美さん';
  final.className = 'flash';
  container.appendChild(final);

  // 最後のスクロール
  setTimeout(() => {
    final.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 500);
}

typeNextLine();
