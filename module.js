let main = document.getElementById("content");
const com = "12ninstudio";
const con2 = "スチ";
const con4 = "ナ";
const con5 = "ザ地区";
const con3 = "ガ";
const con6 = "を支援しています";
const con1 = "パレ";

async function loadConfig() {
  try{
      if (window.electronAPI != undefined) {
        // ここにコンテンツを記載(難読化の為)
        main.innerHTML = (`
            <h1> ${con3}${con5}について</h1>
            <main>
                <h2>は${con1}${con2}${con4}${con6}</h2>
                <p>皆様のご理解とご協力をお願いいたします</p>
            </main>
        `);
      } else {
        location.href = 'https://sakitibi.github.io/TrainBuildersWeb/docs';
      }
  } catch {
    location.href = 'https://sakitibi.github.io/TrainBuildersWeb/docs';
  }
}

loadConfig()