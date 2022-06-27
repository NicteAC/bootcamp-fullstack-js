var A = [1, 2], B = [];
for (var i = 0; i < A.length; i++) {
B.push(sumarDos(A[i]));
};
function sumarDos(x) {
return x + 2;
};
console.log(B)