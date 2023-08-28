// h2テキストを取得して定数に代入する
const h2Text = document.getElementById('text');

// ボタンを取得して定数に代入する
const textChangeBtn = document.getElementById('btn');

// ボタンをクリックしたら
textChangeBtn.addEventListener('click', () => {
    // h2テキストの内容と以下の文字列にする
    h2Text.textContent = 'ボタンをクリックしました';
})