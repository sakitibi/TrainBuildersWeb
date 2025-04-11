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
  window.open("https://sakitibi-com9.webnode.jp/api/trainbuilders/login/24ac77a0-013e-45ae-97d1-b6cc59fb958a/", "popupWindow", "width=800,height=600");
}
function startGame(){
    let file = document.getElementById('file');
    let filepath = document.getElementById('filepath');
    file.innerHTML = "このURLを開いて下さい";
    filepath.innerHTML = "file:///Applications/TrainBuilders.app/Contents/Resources/.start.html";
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
        location.href = "https://youtube.com/@12nintvSakitibi";
    } else {
        location.href = "https://youtube.com/@torebiru";
    }
}
