var segment = require("../index.js");
segment.taggerLoadDict("./dict/jieba.dict.utf8", "./dict/hmm_model.utf8", "./dict/user.dict.utf8");
segment.tag("非阻塞的南京市长江大桥",  function(tl){
	for(var i = 0; i < tl.length; i++) {
		console.log(i + " => " + tl[i]);
	}
});
var tl = segment.tagSync("阻塞的南京市长江大桥");
for(var i = 0; i < tl.length; i++) {
		console.log(i + " == " + tl[i]);
}

