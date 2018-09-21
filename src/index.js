module.exports = function solveEquation(equation) {
	var e=equation;
	var a=(e.slice(0,e.indexOf('x^2')-3));
	var b=(e.substr(e.indexOf('x^2')+4,1)+e.slice(e.indexOf('x^2')+6,e.indexOf('x',e.indexOf('x^2')+3)-3));
	var c=(e.substr(e.indexOf('x',e.indexOf('x^2')+3)+2,1)+e.slice(e.indexOf('x',e.indexOf('x^2')+3)+4));
	b=b/a;
	c=c/a;
	a=1;
	x1=(-b+Math.sqrt(b*b-4*c))/2;
	x2=-x1-b;
	var arr=[x1,x2];
	arr.sort(function(i,j){
	return i-j;
});
	return arr;
}
