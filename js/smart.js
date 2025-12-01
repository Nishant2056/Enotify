document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.querySelectorAll(".logout-btn");
    const pageOverlay = document.querySelector(".page-overlay");
    const closeIcon = document.querySelectorAll(".cross-icon");
    const deleteIcon=document.querySelectorAll(".delete-icon");
    const deleteUser=document.querySelector(".for-delete");
    const crossIcon = document.querySelectorAll(".delete-cross");
    const addUserBtn = document.querySelector(".btn-add-user");
    const addUserPopup = document.querySelector(".add-user");
    const addUserCross = document.querySelector(".cross-icon-add");
    const editIcons = document.querySelectorAll(".edit-icon");
    const editUser = document.querySelector(".edit-user");
    const crossEdit = document.querySelector(".cross-icon-edit");
    

    // Showing banner
    if(logoutBtn){
    logoutBtn.forEach((lb)=>{lb.addEventListener("click", (e) => {
        pageOverlay.style.display = "block";
    });

});

    
    }

    // Hiding banner when clicking cross
    if(closeIcon){
    closeIcon.forEach((ci)=>{ci.addEventListener("click",()=>{
        pageOverlay.style.display = "none";
    });

    });
}


    //for delete user
    if(deleteIcon){
    deleteIcon.forEach((dl)=>{dl.addEventListener("click",()=>{
        deleteUser.style.display = "block";
    });
    });
}
    if(crossIcon){
    crossIcon.forEach((ci)=>{ci.addEventListener("click",()=>{
        deleteUser.style.display="none";
    });
});
}

    // for add new user
if(addUserBtn){
            addUserBtn.addEventListener("click", function (e) {
                e.preventDefault();
         addUserPopup.style.display = "block";
});
}
// Hide popup by clicking cross icon
if(addUserCross){
        addUserCross.addEventListener("click", function () {
        addUserPopup.style.display = "none";
});
}

//for edit user
if(editIcons){
        editIcons.forEach((item)=>{item.addEventListener("click",() =>{
            editUser.style.display="block";
        });
        });
    }
    if(crossEdit){
                crossEdit.addEventListener("click",() => {
            editUser.style.display="none";
        });
    }

        const crossBtn= document.querySelector('.cross-btn');
        const uploadModal = document.querySelector('#upload-file-modal');
        const yesBtn = document.querySelectorAll('.yes-btn');
        const cancelBtn = document.querySelector('.cancel-btn');
        const uploadFile = document.getElementById('inputfile');
        const erroorMsg= document.getElementById('errorMessage');
        const uploadTitle = document.querySelector('.upload-file-title');
        const uploadSpace = document.querySelector('.upload-file-space');
        const uploadImage = document.querySelector('.custom-file-label img');
        const uploadInput =document.querySelector('.custom-file-label')
        const modalBody = document.querySelector('.modal-body p');
        const uploadBtn = document.querySelector('.upload-btn');
        const btnGroups = document.querySelector('.btn-groups')
        const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024 ; // 50 mb in bytes
if(crossBtn){
        crossBtn.addEventListener("click",function(){
            uploadModal.classList.remove('active');
        });
    }
        function uploadDesc(){
            uploadTitle.textContent= 'Upload file';
            uploadSpace.textContent='Upload Excel file upto 50 MB.';
        }
        function uploadError(){
            uploadModal.classList.remove('active');
            btnGroups.classList.remove('active');
            uploadImage.src="images/upload-cloud.svg";
            uploadBtn.style.display='block';
            modalBody.textContent = '';
        }
        if( uploadBtn){
        uploadBtn.addEventListener("click", () => uploadInput.click());
        }
        if(uploadFile){
        uploadFile.addEventListener('change', function(event) {
            const fileInput = event.target;
            uploadDesc();
            if (fileInput.files.length > 0) {
                const fileSize = fileInput.files[0].size;
                const file = fileInput.files[0];
                uploadImage.src="images/ExcelFile_Icon.svg";
                const allowedExtensions = ['.xls', '.xlsx'];
                const fileName = file.name;
                const fileSizeShow = (file.size / (1024 * 1024)).toFixed(2);
                const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
                uploadTitle.textContent = fileName;
                uploadSpace.textContent = fileSizeShow  + 'MB';
                modalBody.textContent = 'Are you sure you want to upload '+ fileName + '?';
                uploadModal.classList.add('active');
                erroorMsg.textContent = '';
                uploadBtn.style.display='none';
                btnGroups.classList.add('active');

            //allow upto 50mb
            if (fileSize > MAX_FILE_SIZE_BYTES) {
                erroorMsg.classList.add('active');
               uploadError()
                erroorMsg.textContent ='File is too large! Maximum allowed size is 50MB.';
                fileInput.value = ''; 
                uploadDesc(); 
            }
            //to check file format
            if (!allowedExtensions.includes(fileExtension)) {
                erroorMsg.classList.add('active');
                uploadError()
                erroorMsg.textContent = 'The file format does not follow the required rules.';
                fileInput.value = ''; 
                uploadDesc();
                
                }
                cancelBtn.addEventListener('click',function(){
                    fileInput.value = ''; 
                    uploadDesc();
                    uploadError()
                });
                yesBtn.forEach((index)=>{index.addEventListener('click',function(){
                    document.querySelector('.maker-table-wrapper').classList.add('active');
                    uploadError()
                    fileInput.value = ''; 
                    uploadDesc();
        });
        });

        }
        

        
 
 
        });
    }


    
});
