$(document).ready(function() {
     
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD2A0TxoHn6hpY3QDxnwQKyfRlDgcuKD2A",
        authDomain: "inputform-3d1c3.firebaseapp.com",
        databaseURL: "https://inputform-3d1c3.firebaseio.com",
        projectId: "inputform-3d1c3",
        storageBucket: "inputform-3d1c3.appspot.com",
        messagingSenderId: "612398159837"
      };
  
    firebase.initializeApp(config);
    //firebase.analytics();

    var database = firebase.database();
    
    //submit button 
      $("#submit").on("click", function(event){
      
          event.preventDefault();

          //assign ID to jQuery variable
        
          var $date = $("#date-input").val().trim();
          var $task = $("#task-link-input").val().trim();
          var $reclassify = $("#reclassification-input").val().trim();
          var $reason = $("#reason-input").val().trim();
          var $reviewBy = $("#peer-review-input").val().trim();
          var $reportBy = $("#reported-by-input").val().trim();
          var $notes = $("#notes-input").val().trim();
          
          //if input fields are blank open alert
          
          if ($date === "" || 
              $task === "" ||
              //$reclassify === "" ||
              $reason === "" ||
              $reviewBy === "" ||
              $reportBy === "") {

              alert("Please Enter Alert Information");

        //store input into object 
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
          
        //push information to database
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
      //retrieve data
      database.ref().on("child_added", function(childSnapshot) {
  
          var date = childSnapshot.val().date;
          var task = childSnapshot.val().taskLink;
          var reclassify = childSnapshot.val().reclassification;
          var reason = childSnapshot.val().reason;
          var reviewBy = childSnapshot.val().reviewBy;
          var reportBy = childSnapshot.val().reportBy;
          var notes = childSnapshot.val().notes;
      
        //append new data to table
          var data = $("<tr>").prepend (
              $("<td>").text(date),
              $("<td>").text(task),
              $("<td>").text(reclassify),
              $("<td>").text(reason),
              $("<td>").text(reviewBy),
              $("<td>").text(reportBy),
              $("<td>").text(notes),
          );
  
          $("#data-table > tbody").prepend(data);

     });
  
  });