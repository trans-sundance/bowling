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

		var strokeIndex = gameModel.getStrokeIndex();
		var strokeList = gameModel.getStrokeList();
		var frameIndex = gameModel.getFrameIndex();
		var scoreList = gameModel.getScoreList();
		var score = 0;

        if (frameIndex == 9) { // final frame
            gameModel.insertStrokeList(stroke);
        } else if (stroke == 10 && parseInt(strokeIndex % 2) === 0) { // strike
            gameModel.insertStrokeList(10);
            gameModel.insertStrokeList(0);
            gameModel.increasStrokeIndex();
            gameModel.increseFrameIndex();
        } else if (parseInt(strokeIndex % 2) === 1) { // even index
            gameModel.insertStrokeList(stroke);
            gameModel.increseFrameIndex();
        } else {
            gameModel.insertStrokeList(stroke);
        }
        gameModel.increasStrokeIndex();

		if (checkEndgame()) {
			returnObject.isFinished = gameModel.toggleGame().getIsFinished();

		} else {
			if (parseInt(strokeIndex % 2) === 0) {
				score = calculateScoreByFrameIndex(frameIndex, strokeList, scoreList);
				gameModel.insertScoreList(score);
				gameModel.updateCurrentScore(score);
				gameModel.increseFrameIndex();
			}
			gameModel.updateFrameIndex(frameIndex);
			gameModel.updateStrokeIndex(strokeIndex);
		}

		returnObject.strokeIndex = strokeIndex;
		returnObject.frameIndex = frameIndex;
		returnObject.stroke = stroke;
		returnObject.score = score;

		console.log(strokeIndex, strokeList);
		console.log(frameIndex, scoreList);

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
			return false;
		}
    }

    function calculateScoreByFrameIndex(frameIndex, strokeList, scoreList) {
        var ret = 0;
        var i = frameIndex;

        if (i === 0) { // first frame
            ret = strokeList[2 * i] + strokeList[2 * i + 1];
        } else if (i == 9) { // final frame
            ret = strokeList[18] + strokeList[19] + strokeList[20];
        } else {
            if (strokeList[2 * (i - 1)] == 10) { // strike
                ret = scoreList[i - 1] + 2 * strokeList[2 * i] + 2 * strokeList[2 * i + 1];
                console.log("# strike");
            } else if (strokeList[2 * (i - 1)] + strokeList[2 * (i - 1) + 1] == 10) { // spare
                ret = scoreList[i - 1] + 2 * strokeList[2 * i] + strokeList[2 * i + 1];
                console.log("# spare");
            } else {
                ret = scoreList[i - 1] + strokeList[2 * i] + strokeList[2 * i + 1];
            }
        }
        // scoreList.push(ret);
        return ret;
    }

	function test() {
		var strokeIndex = gameModel.getStrokeIndex();
		var strokeList = gameModel.getStrokeList();
		var frameIndex = gameModel.getFrameIndex();
		var scoreList = gameModel.getScoreList();

		updateStroke(strokeIndex, strokeList);
		gameModel.increasStrokeIndex();

		if (parseInt(strokeIndex % 2) === 0) {
			var score = game.calculateScoreByFrameIndex(frameIndex, strokeList, scoreList);
			gameModel.insertScoreList(score);
			updateScore(frameIndex, score);
			gameModel.increseFrameIndex();
		}
		gameModel.updateFrameIndex(frameIndex);
		gameModel.updateStrokeIndex(strokeIndex);
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
