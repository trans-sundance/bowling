
function GameModel () {
	var frameIndex = 0;
	var finalFrame = 9;
	var totalScore = 0;
	var currentScore = 0;
	var scoreList = [];
	var strokeIndex = 0;
	var strokeList = [];
	var isFinished = false;

	function increasStrokeIndex() {
		strokeIndex++;
	}

	function increseFrameIndex() {
		frameIndex++;
	}

	function updateTotalScore(score) {
		totalScore += score;
	}

	function updateFrameIndex(index) {
		frameIndex = index;
	}

	function updateStrokeIndex(index) {
		strokeIndex = index;
	}
	function updateCurrentScore(score) {
		currentScore = score;
	}

	function insertScoreList(score) {
		scoreList.push(score);
	}

	function insertStrokeList(stroke) {
		strokeList.push(stroke);
	}

	function getFinalFrame() {
		return finalFrame;
	}
	function getFrameIndex() {
		return frameIndex;
	}
	function getStrokeIndex() {
		return strokeIndex;
	}
	function getStrokeList() {
		return strokeList;
	}
	function getTotalScore() {
		return totalScore;
	}
	function getScoreList() {
		return scoreList;
	}
	function getCurrentScore() {
		return currentScore;
	}
	function getIsFinished() {
		return isFinished;
	}
	function toggleGame() {
		isFinished = !isFinished;
	}

	return {
		increseFrameIndex : increseFrameIndex,
		increasStrokeIndex : increasStrokeIndex,
		updateTotalScore : updateTotalScore,
		updateStrokeIndex : updateStrokeIndex,
		updateFrameIndex : updateFrameIndex,
		updateCurrentScore : updateCurrentScore,
		insertStrokeList : insertStrokeList,
		insertScoreList : insertScoreList,
		getFinalFrame : getFinalFrame,
		getFrameIndex : getFrameIndex,
		getStrokeIndex : getStrokeIndex,
		getStrokeList : getStrokeList,
		getTotalScore : getTotalScore,
		getScoreList : getScoreList,
		getCurrentScore : getCurrentScore,
		toggleGame : toggleGame,
		getIsFinished : getIsFinished

	};
}
