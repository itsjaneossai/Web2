<script>
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let message = document.getElementById('message');

        if (username.length < 8 || username.length > 16) {
            message.textContent = "Username must be between 8 and 16 characters.";
            message.className = "error";
            return;
        }

        if (password.length < 12 || password.length > 16) {
            message.textContent = "Password must be between 12 and 16 characters.";
            message.className = "error";
            return;
        }

        message.textContent = "Login successful!";
        message.className = "success";
    });
</script>