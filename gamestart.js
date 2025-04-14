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
    file.innerHTML = "このURLを開いて下さい";
    filepath.innerHTML = "file:///Applications/TrainBuilders.app/Contents/Resources/index.html";
}
function QRcodestartGame(){
    let file = document.getElementById('file');
    let filepath = document.getElementById('filepath');
    file.innerHTML = "このQRコードを読み取って下さい";
    filepath.innerHTML = '<img src="./QR_354266.svg" alt=""  onselectstart="return false;" onmousedown="return false;" />';
}
function FollowYoutube(){
    let Dev = Math.floor(Math.random() * 2);
    if (Dev === 0){
        location.href = "https://youtube.com/@12nintvSakitibi/?sub_confirmation=1";
    } else {
        location.href = "https://youtube.com/@torebiru/?sub_confirmation=1";
    }
}

// 他と絶対かぶらない変数名に変更！
const loadingScreenElement = document.querySelector(".loading");
let loadRandomTime = Math.floor(Math.random() * 101 / 10);
let yonjuu = Math.floor(Math.random() * 20 + 2);
let progress = 0;
const fill = document.getElementById('progress-fill');
const interval = setInterval(() => {
  progress += Math.random() * loadRandomTime; // ランダムに進む
  loadRandomTime = Math.floor(Math.random() * 101 / 10);
  if (progress >= 40 && yonjuu > 0) {
    progress = 40;
    yonjuu = yonjuu - 1;
  }
  if (progress >= 110) {
    progress = 110;
    clearInterval(interval);
    loadingScreenElement.classList.add("loaded");
  }
  fill.style.width = progress + '%';
}, 200);
