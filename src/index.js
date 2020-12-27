
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix && matrix.length > 0){
    let arr = matrix.reduce((sum, elem, i) => {
      return (i%2 === 1)? (sum + ',' + elem.reverse()) : (sum + ',' +  elem);
    },);
           
    return arr.split(',').map(elem => { return +elem;});
  } else {
      return [];
  }   
}
