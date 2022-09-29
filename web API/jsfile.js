
function handleSubmit () {
    const AGEE = document.getElementById('age').value;
    const FULLNAME = document.getElementById('fname').value;
    localStorage.setItem("AGE", AGEE);
    sessionStorage.setItem("FULLNAME", FULLNAME);
    return;
    }