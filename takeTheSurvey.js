var subjectObject = {
    "Technology": {
      "Google": ["Data Analyst", "Software Engineer", "Operations Manager"],
      "Apple": ["Data Analyst", "Software Engineer", "Operations Manager"],
      "Facebook": ["Data Analyst", "Software Engineer", "Operations Manager"],
      "Linkedln": ["Data Analyst", "Software Engineer", "Operations Manager"],
      "Samsung": ["Data Analyst", "Software Engineer", "Operations Manager"],
      "Microsoft": ["Data Analyst", "Software Engineer", "Operations Manager"]

    },
    "Buisness/Finance": {
      "Omnicom Group": ["Marketing", "Advertisment", "Sales", "Finance"],
      "Bank of America": ["Marketing", "Advertisment", "Sales", "Finance"],
      "WPP": ["Marketing", "Advertisment", "Sales", "Finance"],
      "Chase": ["Marketing", "Advertisment", "Sales", "Finance"]
      
    },
    "Healthcare": {
      "CVS Health Corp.": ["Pharmacist", "Nurse", "Doctor", "Therapist"],
      "UnitedHealth Group Inc.": ["Pharmacist", "Nurse", "Doctor", "Therapist"],
      "Cardinal Health Inc.": ["Pharmacist", "Nurse", "Doctor", "Therapist"],
      "Pfizer": ["Pharmacist", "Nurse", "Doctor", "Therapist"],
    }
  }
  window.onload = function() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }