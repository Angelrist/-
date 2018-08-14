//设置标题rgb色
var words=document.getElementsByClassName("word");
for (var i=0;i<words.length;i++) {
	words[i].style.color="rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}