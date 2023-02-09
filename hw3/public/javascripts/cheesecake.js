$(document).ready(function () {
    $("form").submit(function () {
        
        var quantity = document.getElementById("Quantity").value
        var textarea = document.getElementById('textareainput');
        var textValue=textarea.value;
        var flavor = document.getElementsByName('flavor');
        
        var thankyoumessage = "Thank you for placing your order!";
        document.getElementById("thankyoutext").innerHTML += thankyoumessage;
        document.getElementById("thankyoutext").innerHTML += "Quantity: " + quantity;
        
        
        for(i = 0; i < flavor.length; i++) {
            if(flavor[i].checked){
                document.getElementById("thankyoutext").innerHTML += "Flavor : "+ flavor[i].value;
            }
        }

        document.getElementById("thankyoutext").innerHTML += "Notes: " + textValue;
        
        var word = 'vegan';
        if (textValue.indexOf(word)!=-1){
            alert('WARNING: This Cheesecake Contains Dairy')
        }
        $("form").remove()
    });
});