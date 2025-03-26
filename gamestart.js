document.getElementById('home-window button').addEventListener('click', function() {
    openPopup();
    // Add your game start logic here
    });
document.getElementById('settings').addEventListener('click', function() {
    location.href = 'https://sakitibi-com9.webnode.jp/page/24/bf921c72-d969-5837-122a-20ba91bad023/';
    // Add your settings logic here
});
document.getElementById('exit').addEventListener('click', function() {
    location.href = 'https://github.com/sakitibi/TrainBuildersWeb';
    // Add your settings logic here
});

function openPopup() {
  window.open("https://sakitibi-com9.webnode.jp/api/trainbuilders/login/24ac77a0-013e-45ae-97d1-b6cc59fb958a/", "popupWindow", "width=800,height=500");
}
