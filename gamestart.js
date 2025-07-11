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
    location.href = 'https://sakitibi-com9.webnode.jp/page/24/b961c547-90b1-0d30-a87e-8bb1aa67eca9/';
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
        filepath.innerHTML = (`
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000"
          preserveAspectRatio="xMidYMid meet">
          <metadata>
          CopyRight Train Builder</metadata><g><rect x="0" y="0" width="240" height="240" fill="#ffffff" />
          <g transform="translate(0.000000,240.000000) scale(0.050000,-0.050000)"
          fill="#000000" stroke="none">
          <path d="M420 3960 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420z
          m720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/>
          <path d="M660 3960 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/>
          <path d="M1380 4320 l0 -60 120 0 120 0 0 60 0 60 -120 0 -120 0 0 -60z"/>
          <path d="M1980 4260 l0 -120 -120 0 -120 0 0 -120 0 -120 -60 0 -60 0 0 60 0
          60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -180 0 -180 60 0 60 0 0 -60 0 -60
          -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0
          -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0
          -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60
          0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 -60
          0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 -180 0 -180 300 0
          300 0 0 -60 0 -60 -180 0 -180 0 0 -60 0 -60 -300 0 -300 0 0 -120 0 -120 -60
          0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -180 0 -180
          0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0 60 0 60 120 0 120 0 0 60
          0 60 -240 0 -240 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 -120 0
          -120 -120 0 -120 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 -120 0 -120 0 0 -120
          0 -120 120 0 120 0 0 -60 0 -60 -60 0 -60 0 0 -120 0 -120 -60 0 -60 0 0 -180
          0 -180 60 0 60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -120
          0 -120 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 120 0 120
          0 0 -60 0 -60 60 0 60 0 0 60 0 60 120 0 120 0 0 -60 0 -60 120 0 120 0 0 -60
          0 -60 180 0 180 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0
          -60 -60 0 -60 0 0 -240 0 -240 60 0 60 0 0 240 0 240 120 0 120 0 0 60 0 60
          60 0 60 0 0 120 0 120 60 0 60 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 60 0 60
          0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0
          -60 0 -60 -60 0 -60 0 0 -60 0 -60 360 0 360 0 0 60 0 60 60 0 60 0 0 -60 0
          -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120 60 0 60 0 0 -60 0 -60 60 0
          60 0 0 -60 0 -60 120 0 120 0 0 60 0 60 60 0 60 0 0 -120 0 -120 60 0 60 0 0
          180 0 180 -120 0 -120 0 0 60 0 60 240 0 240 0 0 60 0 60 60 0 60 0 0 -60 0
          -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60
          60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120 60 0 60 0 0 60 0 60 -120 0 -120
          0 0 60 0 60 -60 0 -60 0 0 120 0 120 120 0 120 0 0 60 0 60 60 0 60 0 0 300 0
          300 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -60 0
          -60 0 0 180 0 180 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0
          -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 180
          0 180 60 0 60 0 0 120 0 120 120 0 120 0 0 60 0 60 60 0 60 0 0 -60 0 -60 60
          0 60 0 0 180 0 180 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -180 0
          -180 0 0 -60 0 -60 180 0 180 0 0 -60 0 -60 -120 0 -120 0 0 -60 0 -60 -60 0
          -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0
          120 0 120 -60 0 -60 0 0 -120 0 -120 -60 0 -60 0 0 180 0 180 120 0 120 0 0
          120 0 120 -60 0 -60 0 0 180 0 180 -360 0 -360 0 0 -60 0 -60 -60 0 -60 0 0
          60 0 60 -60 0 -60 0 0 -180 0 -180 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 60
          0 60 -60 0 -60 0 0 180 0 180 -60 0 -60 0 0 -120z m840 -60 l0 -60 -60 0 -60
          0 0 60 0 60 60 0 60 0 0 -60z m240 0 l0 -60 60 0 60 0 0 -60 0 -60 60 0 60 0
          0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -180 0 -180 60 0 60 0 0
          -120 0 -120 -60 0 -60 0 0 -180 0 -180 120 0 120 0 0 -180 0 -180 60 0 60 0 0
          -60 0 -60 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0 -60 0
          -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60
          120 0 120 0 0 -60 0 -60 60 0 60 0 0 120 0 120 60 0 60 0 0 -60 0 -60 60 0 60
          0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 120 0 120 0 0 -60 0
          -60 -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 120 0 120 60 0 60 0 0 -120 0 -120
          -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 -120 0 -120 0 0 -60 0 -60
          60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0
          -60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0
          0 -240 0 -240 -60 0 -60 0 0 240 0 240 -60 0 -60 0 0 -180 0 -180 -60 0 -60 0
          0 -180 0 -180 -60 0 -60 0 0 -180 0 -180 -60 0 -60 0 0 240 0 240 -60 0 -60 0
          0 -120 0 -120 -120 0 -120 0 0 60 0 60 60 0 60 0 0 120 0 120 -120 0 -120 0 0
          60 0 60 -120 0 -120 0 0 60 0 60 120 0 120 0 0 -60 0 -60 180 0 180 0 0 120 0
          120 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60
          -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -120 0 -120 0 0 60 0 60 -60
          0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -120 0
          -120 0 0 120 0 120 180 0 180 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 120 0 120
          0 0 -60 0 -60 60 0 60 0 0 60 0 60 120 0 120 0 0 60 0 60 60 0 60 0 0 60 0 60
          -60 0 -60 0 0 120 0 120 60 0 60 0 0 -120 0 -120 60 0 60 0 0 60 0 60 60 0 60
          0 0 60 0 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60
          60 0 60 0 0 60 0 60 -120 0 -120 0 0 120 0 120 -60 0 -60 0 0 -60 0 -60 -60 0
          -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -120 0 -120 0 0 60 0 60 -60 0 -60 0
          0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -180 0 -180 0 0
          -60 0 -60 180 0 180 0 0 -60 0 -60 -180 0 -180 0 0 60 0 60 -60 0 -60 0 0 180
          0 180 -120 0 -120 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -240 0 -240 0 0 -60 0
          -60 -60 0 -60 0 0 120 0 120 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0
          60 0 0 60 0 60 180 0 180 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0
          -60 0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60
          60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 180 0 180 0
          0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -180 0 -180 60 0 60 0 0 -60
          0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 60 0
          60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 120 0 120 60 0 60 0 0 -120 0
          -120 -60 0 -60 0 0 -120 0 -120 60 0 60 0 0 60 0 60 60 0 60 0 0 120 0 120 60
          0 60 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0
          -120 0 -120 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120
          -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 120 0
          120 0 0 60 0 60 120 0 120 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0
          60 0 60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 120 0
          120 120 0 120 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60
          0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 60 0 60 0 0 180 0 180 60 0 60 0 0 -60z
          m-1080 -240 l0 -60 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 -120 0 -120 -60 0
          -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0
          60 0 60 120 0 120 0 0 120 0 120 60 0 60 0 0 -60z m1440 -660 l0 -120 -60 0
          -60 0 0 120 0 120 60 0 60 0 0 -120z m-2160 -60 l0 -60 -60 0 -60 0 0 60 0 60
          60 0 60 0 0 -60z m2160 -240 l0 -60 -120 0 -120 0 0 60 0 60 120 0 120 0 0
          -60z m360 0 l0 -60 -60 0 -60 0 0 -120 0 -120 -120 0 -120 0 0 60 0 60 60 0
          60 0 0 120 0 120 120 0 120 0 0 -60z m-120 -480 l0 -60 60 0 60 0 0 -60 0 -60
          -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m-600 -240 l0
          -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m720 -1080 l0 -180 -180 0 -180 0
          0 180 0 180 180 0 180 0 0 -180z m-600 -240 l0 -60 -60 0 -60 0 0 60 0 60 60
          0 60 0 0 -60z m240 -240 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z"/>
          <path d="M3060 3960 l0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0
          60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M2700 3840 l0 -60 -120 0 -120 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60
          60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0
          120 0 120 -60 0 -60 0 0 -60z m120 -240 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60
          0 0 -60z"/>
          <path d="M2940 3360 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M2820 3000 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M1140 2640 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M2220 2520 l0 -60 -120 0 -120 0 0 -60 0 -60 120 0 120 0 0 60 0 60
          120 0 120 0 0 60 0 60 -120 0 -120 0 0 -60z"/>
          <path d="M1140 2400 l0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60
          60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0
          -60z"/>
          <path d="M1740 2400 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M2340 1860 l0 -120 60 0 60 0 0 120 0 120 -60 0 -60 0 0 -120z"/>
          <path d="M2940 1860 l0 -120 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60
          60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0
          -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 120 0 120 60 0 60 0
          0 60 0 60 -60 0 -60 0 0 60 0 60 120 0 120 0 0 60 0 60 60 0 60 0 0 -60 0 -60
          60 0 60 0 0 120 0 120 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -120 0
          -120 0 0 60 0 60 -60 0 -60 0 0 -120z"/>
          <path d="M3540 1800 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M3900 1800 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M1140 1680 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M2100 1680 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M3900 1560 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M3540 1200 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M3540 3960 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420z
          m720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/>
          <path d="M3780 3960 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/>
          <path d="M420 840 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420z
          m720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/>
          <path d="M660 840 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/>
          <path d="M1980 960 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/>
          <path d="M1860 720 l0 -60 -60 0 -60 0 0 -120 0 -120 60 0 60 0 0 60 0 60 60
          0 60 0 0 120 0 120 -60 0 -60 0 0 -60z"/>
          <path d="M3780 480 l0 -60 180 0 180 0 0 60 0 60 -180 0 -180 0 0 -60z"/>
          </g>
          </g></svg>
        `);
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
