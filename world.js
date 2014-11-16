function World(livingCells){

	this.livingCells = livingCells;
	this.evolve = function() {
		return this;
	};

	function isNeighbor(cell, x, y) {
		if (Math.abs(cell[0] - x) <= 1 &&
			Math.abs(cell[0] - y) <= 1 &&
			(cell[0] - x != 0 || cell[1] - y != 0)) {

		}
	}

	function willSurvive(x,y){
		var neighbourCount = 0;
		for(var i = 0; i < livingCells.length; i++){
			if (isNeighbor(livingCells[i], x, y)) {
				neighbourCount++;
			}
		}
		return (neighbourCount >= 2) && (neighbourCount < 4 );
	}
};


function nextGeneration(w) {
	console.log(w.livingCells);
	setTimeout(function() { nextGeneration(w.evolve()); }, 1000)
}

w = new World([[3,4], [2,3]]);
nextGeneration(w);
