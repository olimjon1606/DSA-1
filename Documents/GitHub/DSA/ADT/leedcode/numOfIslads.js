function numIslands(grid){
    if (!grid || grid.length === 0) {
        return 0;
      }
    
      const rows = grid.length;
      const cols = grid[0].length;
      let count = 0;

      function dfs(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
          return;
        }
        grid[row][col] = '0';
        dfs(row+1, col);
        dfs(row-1, col);
        dfs(row, col+1);
        dfs(row, col-1);
      }
      for(let row=0; row<rows; row++){
         for(let col=0; col<cols; col++){
            if(grid[row][col] === '1'){
                count++;
                dfs(row,col);
            }
         }
      }
      return count;

}
const grid = [
['1', '1', '0', '0', '0'],
['1', '1', '0', '0', '0'],
['0', '0', '1', '0', '0'],
['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3