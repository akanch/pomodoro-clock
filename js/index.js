$(document).ready(function() {
  let buzzer = $("#buzzer")[0];
  let count = parseInt($("#num").html());
  let breakCount = parseInt($("#breakNum").html());
  $("#reset").hide();
  $("#minus5Clock").click(function() {
    if (count > 5) {
      count -= 5;
      $("#num").html(count);
    }
  });
  $("#start").click(function() {
    let counter = setInterval(timer, 1000);
    count *= 60;
    breakCount *= 60;
    const setSession = count;
    const setBreak = breakCount;
    function timer() {
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #breakNum").hide();
      $("#timeType").show();
      $("#timeType").html("Session Time: ");
      count -= 1;
      if (count===0) {
        buzzer.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();
      }
      if (count%60 >= 10) {
        $("#num").html(Math.floor(count/60)+":"+count%60);
      } else {
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
      }
      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $("#breakNum").show();
        breakCount -= 1;
        if(breakCount === 0) {
          clearInterval(startBreak);
          $("#reset").show();
          $("#breakNum, #timeType").hide();
          buzzer.play();
        }
        if (breakCount%60 >= 10) {
          $("#breakNum").html(Math.floor(breakCount/60)+":"+breakCount%60);
        } else {
          $("#breakNum").html(Math.floor(breakCount/60)+":"+"0"+breakCount%60);
        }
      }
    }
    $("#reset").click(function() {
      count = setSession / 60;
      breakCount = setBreak / 60;
      $("#num").html(count);
      $("#breakNum").html(breakCount);
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
      $("#reset, #timeType").hide();
    });
  });
  $("#add5Clock").click(function() {
    count += 5;
    $("#num").html(count);
  });
  $("#minus5Break").click(function() {
    if (breakCount > 5) {
      breakCount -= 5;
      $("#breakNum").html(breakCount);
    }
  });
  $("#add5Break").click(function() {
    breakCount += 5;
    $("#breakNum").html(breakCount);
  });
});