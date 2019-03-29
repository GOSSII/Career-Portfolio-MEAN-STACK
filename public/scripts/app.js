// Name: Dipeshpuri Goswami
// Id: 300984229 
// Date 16, Feb 2019 

/* Custome javascript goes here */
// IIFE
(   function(){
    function Start(){
        console.log("%c App Started..")
    }
    $(".btn-danger").click(function(event) {
        if(!confirm("Are you sure???")) {
            event.preventDefault();
            window.location.assign("/contact-list");
        }
    });
    window.addEventListener("load",Start);
})();