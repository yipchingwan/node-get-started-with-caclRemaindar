// Write your cade below:

function caclRemaindar(a, b) {

	return a%b;
	

};

function caclSum(array) {
	let result=0;
	for(var i=0; i<array.length;i++){
		result+=array[i];
	}
	return result;
};

function caclSumInConditon(array, a) {
	let result=0;
	for(var i=0; i<array.length;i++){
		if(array[i]<a){
			result+=array[i];
		}
		
	}
	return result;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}