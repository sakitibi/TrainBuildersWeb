document.getElementById('home-window button').addEventListener('click', function() {
    openPopup();
});
document.getElementById('home-window button').addEventListener('click', function() {
    startGame();
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
    alert("このURLをコピーして開いて下さい\nfile:///Applications/TrainBuilders.app/Contents/Resources/.start.html");
}
