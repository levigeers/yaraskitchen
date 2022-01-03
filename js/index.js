document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector('#loginButton');
    const contentButton = document.querySelector('#contentButton')
    const profileButton = document.querySelector('#profileButton');

    $.ajax({
        method: "post",
        url: "../../php/index.php",
        data: {action: "checkSession"},
        success : function(result){
            const splitResult = result.split('-');

            if (splitResult[0] === "active") {
                loginButton.classList.add('page--hidden');
                profileButton.classList.remove('page--hidden');

                if (splitResult[1] === '1') {                    
                    contentButton.classList.remove('page--hidden');
                }
            } 
            else if (splitResult[0] === "inactive") {
                loginButton.classList.remove('page--hidden');
            }
        }, 
        error : function(jqXHR, exception) {
            console.log(exception);
        }
    });
});