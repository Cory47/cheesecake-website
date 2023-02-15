$(document).ready(function () {
    $("form").submit(function () {
        //Gets lots of variables within the form
        var quantity = document.getElementById("Quantity").value
        var textarea = document.getElementById('textareainput');
        var textValue=textarea.value;
        var flavor = document.getElementsByName('flavor');

        //recieve the post request
        $.post( "./orders", function(data) {
            console.log(data.data);

            //update the list at the bottom
            var list = document.getElementById("ordersList");
            while(document.getElementById("item")) {
                document.getElementById("item").remove();
                console.log("test");
            }
            var i = 0;
            while (data.data[i]) {
                list.innerHTML += "<li>" + data.data[i].topping + " : " + data.data[i].quantity + "</li>";
                i++;
            }
          });
        
        var thankyoumessage = "Thank you for placing your order!";
        document.getElementById("thankyoutext").innerHTML += thankyoumessage;
        document.getElementById("thankyoutext").innerHTML += "Quantity: " + quantity;
        
        //Loop through the radio buttons
        for(i = 0; i < flavor.length; i++) {
            if(flavor[i].checked){
                document.getElementById("thankyoutext").innerHTML += "Flavor : "+ flavor[i].value;
            }
        }
        //print out the notes into the thank you text
        document.getElementById("thankyoutext").innerHTML += "Notes: " + textValue;
        
        //Final check for vegan 
        var word = 'vegan';
        if (textValue.indexOf(word)!=-1){
            alert('WARNING: This Cheesecake Contains Dairy')
        }
        $("form").remove()
    });
});