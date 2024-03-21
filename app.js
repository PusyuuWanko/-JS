const 日本語定数 = "プシュー";
console.log(日本語定数);
const エレメント = document.querySelector("content");
エレメント.innerHTML = 日本語定数;
エレメント.innerHTML += "<br><a href='http://21emon.wjg.jp' target='_blank'>プシューわんこ/の提供するプシューゲートウェイへ行く</a>";

function 何() {
  エレメント.innerHTML = "関数くんをよんだ？";
}
setTimeout(何(), 5000);
