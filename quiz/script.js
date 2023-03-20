$(document).ready(function() {
  var current_question = 1;
  
    $('.question').hide();
    $('#q' + current_question).show();
  
    $('input[type=radio]').change(function() {
        var answer = $('input[name=q' + current_question + ']:checked').val();
        
        if (answer) {
          current_question += 1;
          console.log(current_question);
          
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
            
            var result_text = '';
            
            if (score == 0) {
              result_text = 'Você não tem um perfil de risco para distúrbios alimentares.';
            } else if (score == 1) {
              result_text = 'Você tem um perfil de risco moderado para distúrbios alimentares. Procure ajuda.';
            } else if (score == 2) {
              result_text = 'Você tem um perfil de risco alto para distúrbios alimentares. Procure ajuda imediatamente.';
            } else if (score == 3 || score == 4) {
              result_text = 'Você tem um perfil de risco muito alto para distúrbios alimentares. Procure ajuda imediatamente'
            }

            $('#result').css('display', 'block')
            $('#q4').css('display', 'none')

          }

 


        }

        

    });
});
