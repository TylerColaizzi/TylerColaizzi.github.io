function do_function() {
    document.getElementById("text_id").style.fontSize="4em";
    
    if(document.getElementById('fancy_button').checked==true) {
        document.getElementById("text_id").style.fontWeight="bold";
        document.getElementById("text_id").style.color="blue";
        document.getElementById("text_id").style.textDecoration="underline";
    }

    if(document.getElementById('boring_button').checked==true) {
        document.getElementById("text_id").style.fontWeight="normal";
    }
}

function moo() {
    var text=document.getElementById("text_id").value;
    var uppercase_text=text.toUpperCase();
    var split_text=uppercase_text.split(".");
    concat_text=split_text.join("_Moo");
    document.getElementById("text_id").value=concat_text;
}
