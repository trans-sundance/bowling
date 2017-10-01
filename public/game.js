function Game(model) {
    var gameModel = model;

    function insertStroke(stroke) {
		var returnObject = {
			isFinished:false,
			strokeIndex:0,
			frameIndex:0,
			stroke:0,
			score:0
		};

		var currentStrokeIndex = gameModel.getStrokeIndex();
		var currentFrameIndex = gameModel.getFrameIndex();
		var score = gameModel.getCurrentScore();

		// check stroke index & frame index
		gameModel.insertStrokeList(stroke);
        if (stroke == 10 && parseInt(currentStrokeIndex % 2) === 0) { // strike
            gameModel.insertStrokeList(0);
            gameModel.increasStrokeIndex();
            gameModel.increseFrameIndex();
        } else if (parseInt(currentStrokeIndex % 2) === 1) { // even index
            gameModel.increseFrameIndex();
        }
		gameModel.increasStrokeIndex();

		var afterFrameIndex = gameModel.getFrameIndex();

		// calculate score
		if (currentFrameIndex + 1 === afterFrameIndex) {
			score = calculateScoreByFrameIndex(currentFrameIndex, gameModel.getStrokeList(), gameModel.getScoreList());
			gameModel.insertScoreList(score);
			gameModel.updateCurrentScore(score);
		}

		returnObject.strokeIndex = currentStrokeIndex;
		returnObject.frameIndex = currentFrameIndex;
		returnObject.stroke = stroke;
		returnObject.score = score;

		// console.log('currentStrokeIndex', gameModel.getStrokeIndex());
		// console.log('currentFrameIndex', gameModel.getFrameIndex());
		// console.log('stroke', stroke);
		// console.log('score', score);

		if (checkEndgame(currentStrokeIndex, gameModel.getStrokeList())) {
			returnObject.isFinished = gameModel.toggleGame();
		}

		return returnObject;
    }


    function checkEndgame(strokeIndex, strokeList) {
        if (strokeIndex == 19 && strokeList[18] + strokeList[19] != 10) { // final stroke 1
            // gameModel.increseFrameIndex();
            console.log('finish type 1');
			return true;
        } else if (strokeIndex == 20) { // final stroke 2
            // gameModel.increseFrameIndex();
            console.log('finish type 2');
			return true;
        } else {
			// console.log('false');
			return false;
		}
    }

    function calculateScoreByFrameIndex(frameIndex, strokeList, scoreList) {
        var score = 0;
		score = calculateNormalScore(scoreList, strokeList, frameIndex);

		if (checkStrike(strokeList, frameIndex)) { // strike
			score += strokeList[2 * frameIndex] + strokeList[2 * frameIndex + 1];
			console.log("# strike");
		} else if (checkSplit(strokeList, frameIndex)) { // spare
			score += strokeList[2 * frameIndex];
			console.log("# spare");
		}

		if (frameIndex === 9 && (checkStrike(strokeList, frameIndex) || checkSplit(strokeList, frameIndex))) {
			console.log('last luck!!');
			score += strokeList[20];
		}
		console.log('score : ', score);
        return score;
    }

    function checkStrike(strokeList, frameIndex) {
		return (strokeList[2 * (frameIndex - 1)] == 10);
    }

    function checkSplit(strokeList, frameIndex) {
        return (strokeList[2 * (frameIndex - 1)] + strokeList[2 * (frameIndex - 1) + 1] == 10);
    }

    function calculateNormalScore(scoreList, strokeList, frameIndex) {
		var score = 0;
		if (frameIndex > 0) {
			score += scoreList[frameIndex - 1];
		}
		score += strokeList[2 * frameIndex] + strokeList[2 * frameIndex + 1];
		return score;
	}

    return {
		insertStroke : insertStroke,
        calculateScoreByFrameIndex : calculateScoreByFrameIndex,
    };

}
