$(document).ready(function() {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD2A0TxoHn6hpY3QDxnwQKyfRlDgcuKD2A",
        authDomain: "inputform-3d1c3.firebaseapp.com",
        databaseURL: "https://inputform-3d1c3.firebaseio.com",
        projectId: "inputform-3d1c3",
        storageBucket: "inputform-3d1c3.appspot.com",
        messagingSenderId: "612398159837",
        appId: "1:612398159837:web:6cb2575df03c5a29cbc834",
        measurementId: "G-2JPCV3KRQV"
      };
  
    firebase.initializeApp(config);
    //firebase.analytics();

    var database = firebase.database();
  
      $("#submit-button").on("click", function(event){
          
          event.preventDefault();
  
          var $date = $("#date").val().trim();
          var $task = $("#task-link").val().trim();
          var $reclassify = $("#reclassification").val().trim();
          var $reason = $("#reason").val().trim();
          var $reviewBy= $("#peer-review").val().trim();
          var $reportBy = $("#reported-by").val().trim();
          var $notes = $("#notes").val().trim();
  
          if ($date === "" || 
              $task === "" ||
              $reclassify === "" ||
              $reason === "" ||
              $reviewBy === "" ||
              $reportBy === "" ||
              $notes === "") {
  
              alert("Please Enter Alert Information");
  
          } else {
  
          var newData = {
              
              date: $date,
              taskLink: $task,
              reclassification: $reclassify,
              reason: $reason,
              reviewBy:  $reviewBy,
              reportBy: $reportBy,
              notes: $notes

              };
  
          database.ref().push(newData);
  
          $("#date-input").val("");
          $("#task-link-input").val("");
          $("#reclassification-input").val("");
          $("#reason-input").val("");
          $("#peer-review-input").val("");
          $("#reported-by-input").val("");
          $("#notes-input").val("");
          };
  
      });
      
      database.ref().on("child_added", function(childSnapshot) {
  
          var date = childSnapshot.val().date;
          var task = childSnapshot.val().taskLink;
          var reclassify = childSnapshot.val().reclassification;
          var reason = childSnapshot.val().reason;
          var reviewBy = childSnapshot.val().reviewBy;
          var reportBy = childSnapshot.val().reportBy;
          var notes = childSnapshot.val().notes;
      
  
          var newData = $("<tr>").append (
              $("<td>").text(date),
              $("<td>").text(task),
              $("<td>").text(reclassify),
              $("<td>").text(reason),
              $("<td>").text(reviewBy),
              $("<td>").text(reportBy),
              $("<td>").text(notes)
          );
  
          $("#data-table > tbody").append(newData);
  
      
     });
  
  });