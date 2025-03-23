function validateForm(event) {
    event.preventDefault(); // Mencegah refresh halaman
    let isValid = true;

    // Ambil nilai input
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Ambil elemen untuk menampilkan error
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const formMessage = document.getElementById("formMessage");

    // Reset pesan error
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    formMessage.textContent = "";

    // Validasi Nama
    if (name.length <= 3) {
      nameError.textContent = "Nama harus lebih dari 3 karakter.";
      isValid = false;
    }

    // Validasi Email (menggunakan regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Masukkan email yang valid.";
      isValid = false;
    }

    // Validasi Password
    if (password.length < 8) {
      passwordError.textContent = "Password harus minimal 8 karakter.";
      isValid = false;
    }

    // Jika validasi sukses
    if (isValid) {
      formMessage.textContent = "Form berhasil divalidasi!";
      formMessage.classList.remove("error");
      formMessage.classList.add("success");
    }
  }

// Tambahkan event listener untuk submit form
document.getElementById("form").addEventListener("submit", validateForm);