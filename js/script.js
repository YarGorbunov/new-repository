var i=0;
var n=2;
var left = document.querySelector('.slleft');
var right = document.querySelector('.slright');
var slcontent = [];
for (var m=0;m<n;m++) {
	slcontent[m] = document.querySelector('#slcontent' + m);
	slcontent[m].style.display = 'none';
	if (m==0) slcontent[m].style.display = 'block';
}
function slmove(j) {
  slcontent[Math.abs(i%n)].style.display = 'none';
  slcontent[Math.abs((i+j)%n)].style.display = 'block';
  i+=j;
}
