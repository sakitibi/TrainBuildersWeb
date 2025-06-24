document.getElementById('home-window button').addEventListener('click', function() {
    openPopup();
});
document.getElementById('start button').addEventListener('click', function() {
    startGame();
});
document.getElementById('qrcode').addEventListener('click', function() {
    QRcodestartGame();
});
document.getElementById('settings').addEventListener('click', function() {
    location.href = 'https://sakitibi-com9.webnode.jp/page/24/bf921c72-d969-5837-122a-20ba91bad023/';
});
document.getElementById('exit').addEventListener('click', function() {
    location.href = 'https://github.com/sakitibi/TrainBuildersWeb';
});
document.getElementById('follow-youtube').addEventListener('click', function() {
    FollowYoutube();
});
document.getElementById('follow-x').addEventListener('click', function() {
    location.href = "https://x.com/torebiru";
});
document.getElementById('documents').addEventListener('click', function() {
    location.href = "./docs";
});

function openPopup() {
    var uaOs = window.navigator.userAgent.toLowerCase();
    if (uaOs.indexOf("mac os x") !== -1) {
        window.open("https://sakitibi-com9.webnode.jp/api/trainbuilders/login/24ac77a0-013e-45ae-97d1-b6cc59fb958a/", "popupWindow", "width=800,height=600");
    } else {
        alert("エラーメッセージ このOSは対応していません");
    }
}
function startGame(){
    let file = document.getElementById('file');
    let filepath = document.getElementById('filepath');
    if(window.confirm("アプリ版ですか?")){
        location.href = "trainbuilders://";
    } else {
        file.innerHTML = "このURLを開いて下さい";
        filepath.innerHTML = "file:///Applications/TrainBuilders.app/Contents/Resources/index.html";
    } 
}
function QRcodestartGame(){
    let file = document.getElementById('file');
    let filepath = document.getElementById('filepath');
    if(window.confirm("アプリ版ですか?")){
        file.innerHTML = "このQRコードを読み取って下さい";
        filepath.innerHTML = '<img src="./8e364128e0f6ae414e0c2bfa4620af0009999f37.png" alt="trainbuilders://"  onselectstart="return false;" onmousedown="return false;" />';
    } else {
        file.innerHTML = "このQRコードを読み取って下さい";
        filepath.innerHTML = '<img src="./QR_629278.svg" alt="file:///Applications/TrainBuilders.app/Contents/Resources/index.html"  onselectstart="return false;" onmousedown="return false;" />';
    }
}
function FollowYoutube(){
    let Dev = KaikiIkki(2);
    if (Dev === 0){
        location.href = "https://youtube.com/channel/UCJcP2mfDCtKnADrbDDjT_8g/?sub_confirmation=1";
    } else {
        location.href = "https://youtube.com/@torebiru/?sub_confirmation=1";
    }
}

// 他と絶対かぶらない変数名に変更！
const ultraUniqueLoadingScreenEl = document.querySelector(".loading");
let ultraUniqueRandomSpeed = KaikiIkki(101 / 10);
let ultraUniqueCooldown = KaikiIkki(20 + 2);
let ultraUniqueImageSwitch = KaikiIkki(2);
let ultraUniqueImageContainer = document.getElementById("image-container");
let ultraUniqueProgress = 0;
let ultraUniqueProgressFill = document.getElementById('progress-fill');
let ultraUniqueProgressText = document.getElementById('progress-text');

if (ultraUniqueImageSwitch === 1 && ultraUniqueImageContainer) {
  ultraUniqueImageContainer.innerHTML = `
    <img 
      id="loading-image" 
      src="https://cnts-1.accounts.expo2025.or.jp/auth/asset/img/logo_01.png" 
      onselect="return false" 
      onmousedown="return false"
    >
  `;
}

// プログレスバーを更新するタイマー
const ultraUniqueProgressInterval = setInterval(() => {
  ultraUniqueRandomSpeed = KaikiIkki(101 / 10);
  if (ultraUniqueProgress <= 100) {
    ultraUniqueProgressText.innerHTML = `${ultraUniqueProgress}%`; 
  }
  if (ultraUniqueProgress >= 40 && ultraUniqueCooldown > 0) {
    ultraUniqueCooldown -= 1;
  } else if (ultraUniqueProgress >= 100) {
    ultraUniqueProgress = 100;
    ultraUniqueProgressText.innerHTML = '100%';
    clearInterval(ultraUniqueProgressInterval);
    ultraUniqueLoadingScreenEl.classList.add("loaded");

  } else {
    ultraUniqueProgress += KaikiIkki(ultraUniqueRandomSpeed); // ランダムに進む
  }
  ultraUniqueProgressFill.style.width = ultraUniqueProgress + '%';
}, 200);

while (ultraUniqueProgress >= 100) {
  ultraUniqueProgressText.innerHTML = '100%';
}
while (ultraUniqueProgress === 40 && ultraUniqueCooldown > 0) {
  ultraUniqueProgress = 40;
}
