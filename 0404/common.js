// 変数 const let var
// 配列 ['りんご', 'メロン']
// 繰り返し　for while
// 条件分岐　if switch
// データの型 string int float bool
// 関数 function
// オブジェクト {name: '赤嶺'}
// DOM操作 document.getElment〜

// 変数
const egg = 'たまご'; // 変数を宣言、代入する

const moji = '文字列'; // 文字列 string
const numbers = 10; // 数字 int
const syosu = 0.001; // 小数 float
let marubatsu = true; // true or false bool


const a = 10; // constant variable 定数

let b = 100;
console.log(b);
b = 200;
console.log(b);


var c = 2;
c = 300;
var c = '文字';

// 配列 オブジェクト
const numbers2 = [1, 2, 3, 4];
console.log(numbers2);

const result = numbers2[2] * numbers2[3];
console.log(result);

const info = {
  name: 'あかみね',// name = key, 'あかみね' = value
  address: '東京都港区',
  tel: '03-1234-5678'
}
console.log(info);

console.log(info.tel); // key

let ifA = 1;
let ifB = 20;

if(ifA > 20) {
  console.log("ifAは20より大きいです");
} else if(ifA < 8) {
  console.log("ifAは8より小さいです");
} else {
  console.log("ifAは8と20の間です");
}

const forSample = [1,2,3,4,5,6];

for(let i = 0; i < forSample.length; i++) {
  console.log("forSampleは", forSample[i]);
}

forSample.forEach(function(item){
  console.log("forSampleをforEachでまわすと次のとおり ", item);
});

  const header1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');

  function bgColor(el) {
    el.style.backgroundColor = '#ff0000';
  }

  // function bgColor() {
  //   header1.style.backgroundColor = '#ff0000';
  // }

  header1.addEventListener('click', function(){
    bgColor(h2);
  });

  // bgColor();

  // bgColor(h2);

  // header1.addEventListener('click', function(){
  //   header1.style.backgroundColor = '#ff0000';
  // });

