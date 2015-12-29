var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //原数组
// var arrCopy = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; //复制原数组
var arrCopy = arr.concat([]); //连接一个空数组
console.log(arrCopy);
var count = 1;
var newArrCopy = new Array(); //存放数组 arrCopy 中不重复的元素
var times = new Array(); //存放数组 arrCopy 中不重复元素出现的次数
for (var i = 0; i < arrCopy.length; i++) {
	for (var j = i + 1; j < arrCopy.length; j++) {
		if (arrCopy[i] == arrCopy[j]) {
			count++;
			arrCopy.splice(j, 1); //每找到一个相同的元素，就把它移除掉
			j--;
		}
	}
	newArrCopy[i] = arrCopy[i]; //将当前的元素存入到 newArrCopy 数组中
	times[i] = count; //将当前元素的个数存入 times 数组中
	count = 1; //将 count 重新赋值，进入下一个元素的判断
}
// console.log(newArrCopy);
// console.log(times);
var max = 0;
for (var m = 1; m < times.length; m++) {
	if (times[m] > times[max]) {
		max = m; //找出 times 数组中最大数值的下标
	}
}
// console.log(max);
document.write("出现最多的字母：", newArrCopy[max] + "<br />" + "<br />");
document.write("出现的次数：", times[max] + " 次" + "<br />" + "<br />");
for (var n = 0; n < arr.length; n++) {
	if (arr[n] == newArrCopy[max]) {
		document.write("出现的位置（下标）：", n + "<br />");
	}
}