document.getElementById('home-window button').addEventListener('click', function() {
    location.href = 'https://github.com/sakitibi/TrainBuildersWeb/releases/download/TBW/TrainBuilders.Web.dmg.zip';
    // Add your game start logic here
    });
document.getElementById('settings').addEventListener('click', function() {
    location.href = 'https://sakitibi-com9.webnode.jp/page/24/bf921c72-d969-5837-122a-20ba91bad023/';
    // Add your settings logic here
});

document.getElementById('exit').addEventListener('click', function() {
    let slp = Math.floor(Math.random() * 9000 + 1000);
    alert('TrainBuilders.appを開きますか?').addEventListener('click', function() {
        slp = Math.floor(Math.random() * 9000 + 1000);
        alert('読み込み中... 絶対に閉じないで下さい！')
        sleep(slp);
        alert('こちらのリンクを開いて下さい file:///TrainBuilders Webフォルダがあるディレクトリのパス/TrainBuilders Web/TrainBuilders.app/start.html');
    });
