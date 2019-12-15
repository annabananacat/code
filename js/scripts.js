// business logic:

// user-interface logic:

$(document).ready(function() {
	$("form#quiz").submit(function(event) {
		event.preventDefault();
    var drawnTo = $("input:radio[name=question1]:checked").val();
    var idealTrip = $("input:radio[name=question2]:checked").val();
    var dreamCompany = $("input:radio[name=question3]:checked").val();
    var favoriteActivity = $("input:radio[name=question4]:checked").val();
		var descibedAs = $("input:radio[name=question5]:checked").val();



    var result1;
      if (drawnTo === "Art") {
        result1 = 0;
      } else if (drawnTo === "Object orientation") {
        result1 = 1;
      } else if (drawnTo === "Patterns and complex situations") {
        result1 = 2;
      } else if (drawnTo === "Math and special effects") {
        result1 = 3;
			} else if (drawnTo === "Web applications") {
        result1 = 4;
			} else if (drawnTo === "Databases") {
        result1 = 5;
			}

    var result2;
      if (idealTrip === "Paris") {
        result2 = 0;
      } else if (idealTrip === "China") {
        result2 = 1;
      } else if (idealTrip === "Italy") {
        result2 = 2;
      } else if (idealTrip === "Germany") {
        result2 = 3;
  		} else if (idealTrip === "Japan") {
        result2 = 4;
  		} else if (idealTrip === "Spain") {
        result2 = 5;
  		}

    var result3;
      if (dreamCompany === "Amazon") {
        result3 = 0;
      } else if (dreamCompany === "Airbnb") {
        result3 = 1;
      } else if (dreamCompany === "Wikipedia") {
        result3 = 2;
      } else if (dreamCompany === "Facebook") {
        result3 = 3;
      } else if (dreamCompany === "Apple") {
        result3 = 4;
      }  else if (dreamCompany === "Netflix") {
        result3 = 5;
      }

    var result4;
      if (favoriteActivity === "Crafts") {
        result4 = 0;
      } else if (favoriteActivity === "Creating easy to use situations") {
        result4 = 1;
      } else if (favoriteActivity === "Blogging") {
        result4 = 2;
      } else if (favoriteActivity === "Solving puzzles") {
        result4 = 3;
      } else if (favoriteActivity === "Playing games") {
        result4 = 4;
      } else if (favoriteActivity === "Playing around with building stuff") {
        result4 = 5;
      }
		var result5;
	     if (descibedAs === "Artistic") {
	       result5 = 0;
	     } else if (descibedAs === "Logical") {
	       result5 = 1;
	     } else if (descibedAs === "A deep thinker") {
	        result5 = 2;
	     } else if (descibedAs === "Problem solving") {
	        result5 = 3;
	     } else if (descibedAs === "Creative") {
	        result5 = 4;
	     } else if (descibedAs === "Diplomatic") {
	       result5 = 5;
	     }

    var result6 = result1 + result2 + result3 + result4 + result5;

    var result;
      if (result6 <= 1) {
        result = "HTML";
      } else if (result6 > 1 && result6 <= 6) {
        result = "Ruby";
      } else if (result6 > 6 && result6 <= 12) {
        result = "PHP";
      } else if (result6 > 12 && result6 <=18) {
        result = "JavaScript";
      } else if (result6 > 18 && result6 <=24) {
        result = "Script";
      }  else if (result6 > 24 && result6 <=30) {
        result = "SQL";
      }

		$("#output").text(result);
	});
});
