let main = document.getElementById("content");
const com = "12ninstudio";
const con2 = "スチ";
const con8 = "ナ";
const con5 = "ザ地";
const con10 = "ilders";
const con7 = "区";
const con3 = "ガ";
const con6 = "を支援しています";
const con1 = "パレ";
const con9 = "inBu";
const con4 = "Tra";

async function loadConfig() {
  try{
      if (window.electronAPI.getLocalIP() != undefined) {
        // ここにコンテンツを記載(難読化の為)
        main.innerHTML = (`
            <h1> ${con3}${con5}${con7}について</h1>
            <main>
                <h2>${com}は${con1}${con2}${con8}${con6}</h2>
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

loadConfig();