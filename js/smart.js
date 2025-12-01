document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelector(".logout-btn");
    const pageOverlay = document.querySelector(".page-overlay");
    const closeIcon = document.querySelector(".cross-icon");
    const deleteIcon=document.querySelector(".delete-icon");
    const deleteUser=document.querySelector(".for-delete");
    const crossIcon = document.querySelector(".delete-cross");
    const addUserBtn = document.querySelector(".btn-add-user");
    const addUserPopup = document.querySelector(".add-user");
    const addUserCross = document.querySelector(".cross-icon-add");
    const editIcons = document.querySelector(".edit-icon");
    const editUser = document.querySelector(".edit-user");
    const crossEdit = document.querySelector(".cross-icon-edit");
    

    // Showing banner
    logoutBtn.addEventListener("click", (e) => {
        pageOverlay.style.display = "block";
    });

    

    // Hiding banner when clicking cross
    closeIcon.addEventListener("click", () => {
        pageOverlay.style.display = "none"; 
    });


    //for delete user
    deleteIcon.addEventListener("click",()=>{
        deleteUser.style.display = "block";
    });
    crossIcon.addEventListener("click",()=>{
        deleteUser.style.display="none";
    })

    // for add new user

            addUserBtn.addEventListener("click", function (e) {
                e.preventDefault();
         addUserPopup.style.display = "block";
});

// Hide popup by clicking cross icon
        addUserCross.addEventListener("click", function () {
        addUserPopup.style.display = "none";
});

//for edit user
        editIcons.addEventListener("click",() =>{
            editUser.style.display="block";
        });
        crossEdit.addEventListener("click",() => {
            editUser.style.display="none";
        });
    
});
