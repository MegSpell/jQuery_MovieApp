$(document).ready(function () {
  // Attach a click event listener to the submit button
  $("#submit").click(function (event) {
    // Prevent the default form submission which would cause a page refresh
    event.preventDefault();

    // Get the values entered by the user in the movie and rating input fields
    const movie = $("#movie").val();
    const rating = $("#rating").val();

    // Validate the movie and rating inputs are more than 2 characters and between 1 and 10
    if (movie.length < 2) {
      alert("Movie title must be at least 2 characters long!");
      return;
    }

    if (rating < 1 || rating > 10) {
      alert("Whoops, Rating must be between 1 and 10!");
      return;
    }

    // Check if both movie and rating fields have values( dont really need this if as I put required in the html form)
    if (movie && rating) {
      // If both fields have values, add the movie and rating to the table
      addMovieToTable(movie, rating);

      // Clear the input fields after adding the entry to the table
      $("#movie").val("");
      $("#rating").val("");
    } else {
      // If either field is empty, show an alert to the user
      alert("Whoops, You forgot to enter both a movie and rating!");
    }
  });

  // Use event delegation to handle click events on the newly added delete buttons
  $("#movieList").on("click", ".delete", function () {
    // Remove the closest table row to the clicked delete button
    $(this).closest("tr").remove();
  });

  // Function to add a movie and its rating to the table
  function addMovieToTable(movie, rating) {
    // Create a new table row with the movie name, rating, and a delete button
    const row = `
            <tr>
                <td>${movie}</td>
                <td>${rating}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
        `;
    // Append the new row to the table body with id 'movieList'
    $("#movieList").append(row);
  }
});
