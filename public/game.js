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

		// calculate score
		if (currentStrokeIndex !== 0 && parseInt(currentStrokeIndex % 2) === 1) {
			score = calculateScoreByFrameIndex(currentFrameIndex, gameModel.getStrokeList(), gameModel.getScoreList());
			gameModel.insertScoreList(score);
			gameModel.updateCurrentScore(score);
		}

		returnObject.strokeIndex = currentStrokeIndex;
		returnObject.frameIndex = currentFrameIndex;
		returnObject.stroke = stroke;
		returnObject.score = score;

		console.log('currentStrokeIndex', currentStrokeIndex);
		console.log('currentFrameIndex', currentFrameIndex);
		console.log('stroke', stroke);
		console.log('score', score);

		if (checkEndgame()) {
			returnObject.isFinished = gameModel.toggleGame().getIsFinished();
		}

		return returnObject;
    }


    function checkEndgame() {
        var strokeIndex = gameModel.getStrokeIndex();
        var strokeList = gameModel.getStrokeList();

        if (strokeIndex == 19 && strokeList[18] + strokeList[19] != 10) { // final stroke 1
            gameModel.increseFrameIndex();
            console.log('finish type 1');
			return true;
        } else if (strokeIndex == 20) { // final stroke 2
            gameModel.increseFrameIndex();
            console.log('finish type 2');
			return true;
        } else {
			// console.log('false');
			return false;
		}
    }

    function calculateScoreByFrameIndex(frameIndex, strokeList, scoreList) {
        var score = 0;
        if (frameIndex === 0) { // first frame
            score = strokeList[0] + strokeList[1];
        } else if (frameIndex == 9) { // final frame
            score = strokeList[18] + strokeList[19] + strokeList[20];
        } else {
            if (strokeList[2 * (frameIndex - 1)] == 10) { // strike
                score = scoreList[frameIndex - 1] + 2 * strokeList[2 * frameIndex] + 2 * strokeList[2 * frameIndex + 1];
                console.log("# strike");
            } else if (strokeList[2 * (frameIndex - 1)] + strokeList[2 * (frameIndex - 1) + 1] == 10) { // spare
                score = scoreList[frameIndex - 1] + 2 * strokeList[2 * frameIndex] + strokeList[2 * frameIndex + 1];
                console.log("# spare");
            } else {
                score = scoreList[frameIndex - 1] + strokeList[2 * frameIndex] + strokeList[2 * frameIndex + 1];
            }
        }
		console.log('score : ', score);
        return score;
    }

    function checkStrike() {
        return false;
    }

    function checkSplit() {
        return false;
    }

    function isFinalFrame() {
        return false;
    }

    return {
		insertStroke : insertStroke,
        calculateScoreByFrameIndex : calculateScoreByFrameIndex,
    };

}
