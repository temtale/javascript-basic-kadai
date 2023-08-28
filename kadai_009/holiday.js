// 祝日の関数宣言
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 配列内の要素の数を調べて格納
let holidaysCount = holidays.length;

// for文で取り出す
for (let i=0;i<holidaysCount;i++){
    console.log(holidays[i]);
}

// カウンタ変数jを宣言、初期化
let j = 0;
// while文で取り出す
while (j < holidaysCount){
    console.log(holidays[j]);
    j++;
}