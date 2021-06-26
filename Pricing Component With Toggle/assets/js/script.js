function toggle() {
    const display = document.getElementById("toggle");
    const getText = document.getElementById("price2");
    const getText2 = document.getElementById("pro-price-month");
    const getText3 = document.getElementById("master-price-month");
    const delText = document.getElementById("price");
    const delText2 = document.getElementById("pro-price")
    const delText3 = document.getElementById("master-price")

        if (display.checked == true){
            getText.style.display = "block";
            delText.style.display = "none";
            
            getText2.style.display = "block";
            delText2.style.display = "none";

            getText3.style.display = "block";
            delText3.style.display = "none";
        }
        else {
            getText.style.display = "none";
            delText.style.display = "block";

            getText2.style.display = "none";
            delText2.style.display = "block";
        
            getText3.style.display = "none";
            delText3.style.display = "block";
        }

}