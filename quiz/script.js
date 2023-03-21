$(document).ready(function() {
  var current_question = 1;
  
    $('.question').hide();
    $('#q' + current_question).show();
  
    $('input[type=radio]').change(function() {
        var answer = $('input[name=q' + current_question + ']:checked').val();
        
        if (answer) {
          current_question += 1;
          console.log(current_question);
          updateProgressBar(current_question,5)
          
          if (current_question <= $('.question').length) {
            $('.question').hide();
            $('#q' + current_question).show();
          } else {
            var q1_answer = $('input[name=q1]:checked').val();
            var q2_answer = $('input[name=q2]:checked').val();
            var q3_answer = $('input[name=q3]:checked').val();
            var q4_answer = $('input[name=q4]:checked').val();
            var score = 0;
            
            if (q1_answer == 'sim') {
              score += 1;
            }
            
            if (q2_answer == 'sim') {
              score += 1;
            }
            
            if (q3_answer == 'sim') {
              score += 1;
            }
            
            if (q4_answer == 'sim') {
              score += 1;
            }
            
       
            
            

            $('#result').css('display', 'block')
            $('#q4').css('display', 'none')

            setTimeout(function() {
                window.location.href = "https://probarrigazero.com/lp";
            }, 7000); // 10 seconds in milliseconds

          }

 


        }

        

    });
});


function updateProgressBar(currentStep, totalSteps) {
  var percentComplete = Math.round((currentStep / totalSteps) * 100);
  $('#progress-bar').animate({
      width: percentComplete + '%',      
    }, 200); // 1 second animation
}