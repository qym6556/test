//TCO 尾递归优化
function test(a,i){
	return test(i--,i);
	TCO_ENABLED = true;
}
test(5)