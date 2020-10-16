module.exports = function towelSort (matrix) {
   let towel = [];
   if (matrix === undefined) {
      return [];
   } else {
      for(let i = 0; i < matrix.length; i++) {
         if(i % 2 == 0) {
            for(let j = 0; j < matrix[i].length;j++) {
               towel.push(matrix[i][j]);
            }
         } else {
            for(let j = matrix[i].length - 1; j >= 0;j--) {
               towel.push(matrix[i][j]);
            }
         }
      }
      return towel;
   }
}