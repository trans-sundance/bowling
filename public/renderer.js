function Renderer() {
	var index = 0;
	for (var i = 0; i < 9; i++) {
		$('#score_' + i).html(" ");
	}

	function updateScore(index, score) {
		$('#score_' + index).html(score);
		$('#frame_count').html('frame count : ' + (index+1));
		console.log(index, score);
	}

	function updateStroke(index, stroke) {
		$('#stroke_' + index).html(stroke);
		$('#stroke_count').html('stroke count : ' + (index+1));
		// console.log(index, strokeList);
	}

	function setOnclickEvent(clickFunction) {
		$("#stroke_button").on('click', function() {
			var stroke = parseInt($('#stroke_input').val());
			var obj = clickFunction(stroke);

			if (obj.isFinished()) {
				console.log('game fin');
				$(this).off('click');
			} else {
				updateStroke(obj.strokeIndex, obj.stroke);
				updateScore(obj.frameIndex, obj.score);

			}
		});
	}

	return {
		setOnclickEvent : setOnclickEvent,
		updateStroke : updateStroke,
		updateScore : updateScore
	};
}