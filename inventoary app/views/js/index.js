// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".del").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/delproduct/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newProduct = {
        name: $("#product_name").val().trim(),
        quantity: $("#quantity").val().trim(),
        price: $("#price").val().trim(),
        supplier: $("#supplier").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/addproduct", {
        type: "POST",
        data: newProduct
      }).then(
        function() {
          console.log("created new quote");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".update-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var updatedProduct = {
        name: $("#product_name").val().trim(),
        quantity: $("#quantity").val().trim(),
        price: $("#price").val().trim(),
        supplier: $("#supplier").val().trim(),
      };
  
      var id = $(this).data("id");
  
      // Send the POST request.
      $.ajax("/api/products/" + id, {
        type: "PUT",
        data: updatedProduct
      }).then(
        function() {
          console.log("updated product");
          // Reload the page to get the updated list
          location.assign("/");
        }
      );
    });
  });
  