document.getElementById('home-window button').addEventListener('click', function() {
    openPopup();
});
document.getElementById('start button').addEventListener('click', function() {
    startGame();
});
document.getElementById('start button').addEventListener('click', function() {
    QRcodestartGame();
});
document.getElementById('settings').addEventListener('click', function() {
    location.href = 'https://sakitibi-com9.webnode.jp/page/24/bf921c72-d969-5837-122a-20ba91bad023/';
});
document.getElementById('exit').addEventListener('click', function() {
    location.href = 'https://github.com/sakitibi/TrainBuildersWeb';
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
    let qrcode = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000" preserveAspectRatio="xMidYMid meet"><metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata><g><rect x="0" y="0" width="240" height="240" fill="#ffffff" /><g transform="translate(0.000000,240.000000) scale(0.050000,-0.050000)"fill="#000000" stroke="none"><path d="M420 3960 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420zm720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/><path d="M660 3960 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/><path d="M1380 4320 l0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -180 0 -18060 0 60 0 0 60 0 60 120 0 120 0 0 -60 0 -60 -60 0 -60 0 0 -300 0 -300 -60 0-60 0 0 -120 0 -120 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -60 0 -60 00 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0-60 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 180 0 180 -240 0 -240 0 0 -180 0-180 120 0 120 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0-60 120 0 120 0 0 -60 0 -60 120 0 120 0 0 -120 0 -120 60 0 60 0 0 60 0 6060 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 060 0 60 -120 0 -120 0 0 -60 0 -60 -60 0 -60 0 0 120 0 120 60 0 60 0 0 60 060 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 -120 0 -120 60 060 0 0 -120 0 -120 180 0 180 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 60 0 60 00 -120 0 -120 120 0 120 0 0 -120 0 -120 60 0 60 0 0 120 0 120 60 0 60 0 0-60 0 -60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0-60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 120 0 120-60 0 -60 0 0 60 0 60 -120 0 -120 0 0 -60 0 -60 -60 0 -60 0 0 180 0 180 -600 -60 0 0 -120 0 -120 -120 0 -120 0 0 -60 0 -60 -120 0 -120 0 0 60 0 60 600 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -240 0 -240 0 0 60 0 60 -60 0 -60 0 060 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -120 0 -120 0 0 60 0 60-120 0 -120 0 0 60 0 60 -60 0 -60 0 0 120 0 120 -60 0 -60 0 0 -120 0 -12060 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 240 0 240 0 0 -60 0 -60 120 0120 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 -120 0 -120 -60 0-60 0 0 60 0 60 -180 0 -180 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 00 60 0 60 60 0 60 0 0 -60 0 -60 180 0 180 0 0 60 0 60 60 0 60 0 0 -60 0 -60120 0 120 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 600 60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 -120 0-120 60 0 60 0 0 60 0 60 240 0 240 0 0 -60 0 -60 120 0 120 0 0 120 0 120 600 60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 120 0 120 0 0 -180 0 -180 -60 0 -600 0 -180 0 -180 -60 0 -60 0 0 -180 0 -180 -60 0 -60 0 0 240 0 240 -60 0 -600 0 -120 0 -120 -120 0 -120 0 0 60 0 60 60 0 60 0 0 120 0 120 -120 0 -120 00 -60 0 -60 60 0 60 0 0 -60 0 -60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0 -600 -60 -180 0 -180 0 0 -60 0 -60 240 0 240 0 0 -180 0 -180 360 0 360 0 0 600 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120 60 060 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 120 0 120 0 0 60 0 60 60 0 60 0 0-120 0 -120 60 0 60 0 0 180 0 180 -120 0 -120 0 0 60 0 60 240 0 240 0 0 600 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60120 0 120 0 0 -60 0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120 60 0 600 0 60 0 60 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 120 0 120 120 0 120 0 060 0 60 60 0 60 0 0 300 0 300 -60 0 -60 0 0 60 0 60 60 0 60 0 0 60 0 60 -600 -60 0 0 60 0 60 -60 0 -60 0 0 180 0 180 60 0 60 0 0 60 0 60 -60 0 -60 0 0-60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0-60 -120 0 -120 0 0 180 0 180 60 0 60 0 0 120 0 120 120 0 120 0 0 60 0 6060 0 60 0 0 -60 0 -60 60 0 60 0 0 180 0 180 -60 0 -60 0 0 -60 0 -60 -60 0-60 0 0 60 0 60 -180 0 -180 0 0 -60 0 -60 180 0 180 0 0 -60 0 -60 -120 0-120 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 -60 0 -60 00 60 0 60 -60 0 -60 0 0 120 0 120 -60 0 -60 0 0 -120 0 -120 -60 0 -60 0 0180 0 180 120 0 120 0 0 120 0 120 -60 0 -60 0 0 180 0 180 -360 0 -360 0 0-60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 -60 0-60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 120 0120 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -120 0 -120 0 0 -60 0 -60 -60 0-60 0 0 -60 0 -60 -60 0 -60 0 0 120 0 120 60 0 60 0 0 60 0 60 -60 0 -60 0 060 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0 120 -60 0 -60 0 0 -60 0 -60-60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0-60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 -60z m1440 -120 l0-60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m240 0 l0 -60 60 0 60 0 0 -60 0-60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -180 0 -18060 0 60 0 0 -120 0 -120 -60 0 -60 0 0 -180 0 -180 120 0 120 0 0 -180 0 -18060 0 60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0-60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 00 -60 0 -60 120 0 120 0 0 -60 0 -60 60 0 60 0 0 120 0 120 60 0 60 0 0 -60 0-60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 120 0 1200 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 120 0 120 60 0 60 0 0-120 0 -120 -60 0 -60 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 -120 0 -120 0 0-60 0 -60 60 0 60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 060 -60 0 -60 0 0 60 0 60 -120 0 -120 0 0 60 0 60 -60 0 -60 0 0 -60 0 -60-60 0 -60 0 0 -240 0 -240 -60 0 -60 0 0 240 0 240 -60 0 -60 0 0 60 0 60 600 60 0 0 -60 0 -60 60 0 60 0 0 120 0 120 -120 0 -120 0 0 60 0 60 -60 0 -600 0 -120 0 -120 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 600 60 -120 0 -120 0 0 120 0 120 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 060 -120 0 -120 0 0 60 0 60 -120 0 -120 0 0 120 0 120 60 0 60 0 0 60 0 60120 0 120 0 0 -60 0 -60 120 0 120 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 0 600 0 -120 0 -120 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 120 0120 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 1200 120 0 0 60 0 60 -180 0 -180 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -600 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0-120 0 -120 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 120 0 120 0 0 120 0120 120 0 120 0 0 300 0 300 -60 0 -60 0 0 -120 0 -120 -60 0 -60 0 0 120 0120 60 0 60 0 0 60 0 60 60 0 60 0 0 60 0 60 120 0 120 0 0 -60 0 -60 -120 0-120 0 0 -60 0 -60 60 0 60 0 0 -180 0 -180 300 0 300 0 0 60 0 60 -60 0 -600 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60 0 -60 60 0 60 0 0 60 0 6060 0 60 0 0 120 0 120 60 0 60 0 0 180 0 180 60 0 60 0 0 -60z m-1080 -120 l0-60 -60 0 -60 0 0 -60 0 -60 -60 0 -60 0 0 120 0 120 120 0 120 0 0 -60zm1440 -780 l0 -120 -60 0 -60 0 0 120 0 120 60 0 60 0 0 -120z m-2760 -60 l0-60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m1200 0 l0 -60 -60 0 -60 0 0 600 60 60 0 60 0 0 -60z m-960 -300 l0 -120 -60 0 -60 0 0 120 0 120 60 0 60 00 -120z m360 60 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m2160 0 l0-60 -120 0 -120 0 0 60 0 60 120 0 120 0 0 -60z m360 0 l0 -60 -60 0 -60 0 0-120 0 -120 -120 0 -120 0 0 60 0 60 60 0 60 0 0 120 0 120 120 0 120 0 0 -60zm-2520 -480 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m2400 0 l0 -60 600 60 0 0 -60 0 -60 -60 0 -60 0 0 60 0 60 -60 0 -60 0 0 60 0 60 60 0 60 0 0-60z m-600 -240 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m-600 -240 l0-60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z m-1080 -420 l0 -120 -120 0 -1200 0 60 0 60 60 0 60 0 0 60 0 60 60 0 60 0 0 -120z m2400 -420 l0 -180 -180 0-180 0 0 180 0 180 180 0 180 0 0 -180z m-600 -240 l0 -60 -60 0 -60 0 0 60 060 60 0 60 0 0 -60z m240 -240 l0 -60 -60 0 -60 0 0 60 0 60 60 0 60 0 0 -60z"/><path d="M3060 3960 l0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 060 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M2820 3600 l0 -60 -60 0 -60 0 0 -60 0 -60 60 0 60 0 0 60 0 60 60 060 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M2940 3360 l0 -60 -120 0 -120 0 0 -60 0 -60 120 0 120 0 0 60 0 6060 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M2820 3000 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M2220 2520 l0 -60 120 0 120 0 0 60 0 60 -120 0 -120 0 0 -60z"/><path d="M3300 1920 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M3540 1800 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M3900 1800 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M3900 1560 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M3540 1200 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M3540 3960 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420zm720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/><path d="M3780 3960 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/><path d="M1380 3600 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M1380 3360 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M1500 2280 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M1380 2040 l0 -60 120 0 120 0 0 60 0 60 -120 0 -120 0 0 -60z"/><path d="M1740 2040 l0 -60 60 0 60 0 0 60 0 60 -60 0 -60 0 0 -60z"/><path d="M540 1920 l0 -60 -60 0 -60 0 0 -60 0 -60 180 0 180 0 0 120 0 120-120 0 -120 0 0 -60z"/><path d="M420 840 l0 -420 420 0 420 0 0 420 0 420 -420 0 -420 0 0 -420zm720 0 l0 -300 -300 0 -300 0 0 300 0 300 300 0 300 0 0 -300z"/><path d="M660 840 l0 -180 180 0 180 0 0 180 0 180 -180 0 -180 0 0 -180z"/><path d="M1380 660 l0 -240 60 0 60 0 0 60 0 60 120 0 120 0 0 -60 0 -60 60 060 0 0 60 0 60 60 0 60 0 0 60 0 60 -240 0 -240 0 0 120 0 120 -60 0 -60 0 0-240z"/><path d="M3780 480 l0 -60 180 0 180 0 0 60 0 60 -180 0 -180 0 0 -60z"/></g></g></svg>';
    file.innerHTML = "このQRコードを読み取って下さい";
    filepath.innerHTML = `${qrcode}`;
}
