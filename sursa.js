let privateKey = "";
 
/* Get form data */
function getData() {
    return {
        fullname: document.getElementById("fullname").value,
        birthday: document.getElementById("birthday").value,
        yearlevel: document.getElementById("yearlevel").value,
        gender: document.getElementById("gender").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
}

/* Encryption RSA-1024 */
function encryptRSA1024() {

    const data = getData();
    const rsa = new JSEncrypt({ default_key_size: 1024 });
    /* Get RSA key */
    rsa.getKey();
    /* get private key */
    privateKey = rsa.getPrivateKey();

    /* Encrypt data */
    const encrypted = {
        fullname: rsa.encrypt(data.fullname),
        birthday: rsa.encrypt(data.birthday),
        yearlevel: rsa.encrypt(data.yearlevel),
        gender: rsa.encrypt(data.gender),
        username: rsa.encrypt(data.username),
        password: rsa.encrypt(data.password)
    };

    /* Show encrypted data */
    document.getElementById("encrypted").textContent = 
        JSON.stringify(encrypted, null, 2);
    /* Clear decrypted data */
    document.getElementById("decrypted").textContent = "";
    
    document.getElementById("message").textContent =  
        "RSA-1024 Secure Data Encryption Completed.";
}

/* Encrypt RSA-3072 */
function encryptRSA3072() {

    const data = getData();
    const rsa = new JSEncrypt({ default_key_size: 3072 });

    /* Get RSA key */
    rsa.getKey();

    /* Get private key */
    privateKey = rsa.getPrivateKey();

    /* Encrypt data */
    const encrypted = {
        fullname: rsa.encrypt(data.fullname),
        birthday: rsa.encrypt(data.birthday),
        yearlevel: rsa.encrypt(data.yearlevel),
        gender: rsa.encrypt(data.gender),
        username: rsa.encrypt(data.username),
        password: rsa.encrypt(data.password)
    };

    /* Show encrypted data */
    document.getElementById("encrypted").textContent = 
        JSON.stringify(encrypted, null, 2);
    
    document.getElementById("decrypted").textContent = "";

    document.getElementById("message").textContent = 
        "RSA-3072 Secure Data Encryption Completed.";
}

/* Decrypt data*/
function decryptData() {

    const encryptedText = document.getElementById("encrypted").textContent;

    /* Check encryption*/
    if (encryptedText === "" || privateKey === "") {

        document.getElementById("message").textContent = 
            "Encrypt before decrypting.";
        return;
    }

    /* Encrypted data */
    const encrypted = JSON.parse(encryptedText);
    const rsa = new JSEncrypt();

    /* Private key */
    rsa.setPrivateKey(privateKey);

    /* Decrypt data */
    const decrypted = {
        fullname: rsa.decrypt(encrypted.fullname),
        birthday: rsa.decrypt(encrypted.birthday),
        yearlevel: rsa.decrypt(encrypted.yearlevel),
        gender: rsa.decrypt(encrypted.gender),
        username: rsa.decrypt(encrypted.username),
        password: rsa.decrypt(encrypted.password)
    };

    /* Show decrypted data */
    document.getElementById("decrypted").textContent = 
        JSON.stringify(decrypted, null, 2);
    document.getElementById("message").textContent = 
        "Successfully Decrypt.";
}