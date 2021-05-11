  
        function beep() {
        // document.getElementById("beep").play();
}   

        var navbar = document.getElementById("navbar");
        window.addEventListener('scroll', evt=>{
            if(window.scrollY > window.innerHeight - 100 )
            {
                if(!navbar.classList.contains('fixed-top'))
                {
                    beep();
                }
                navbar.classList.add("fixed-top");
            }else{
                if(navbar.classList.contains('fixed-top'))
                {
                    beep();
                }
                navbar.classList.remove("fixed-top");
            }
        });
