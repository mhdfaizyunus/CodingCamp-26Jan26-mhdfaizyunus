welcomeMessage();

// function to display welcome message
function welcomeMessage() {
    // prompt user for their name
   let userResponse = prompt("Welcome to Faiz Company! What is your name?.");

    // handle case where user cancels or enters empty name
   if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
   } 

    // display welcome message on the webpage
    document.getElementById("welcome-speech").innerText = `Hello, ${userResponse}! Welcome to Faiz Company.`;
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    // Mencegah halaman refresh saat submit
    event.preventDefault();

    // Ambil data dari input
    const nama = document.getElementById('input-nama').value;
    const tanggal = document.getElementById('input-tanggal').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById('input-pesan').value;

    // 1. Validasi: Cek apakah ada form yang kosong
    if (!nama || !tanggal || !gender || !pesan) {
        alert("Form tidak boleh kosong! Harap isi semua kolom.");
        return; // Berhenti di sini jika ada yang kosong
    }

    // 2. Ambil waktu saat ini
    const now = new Date();
    const timeString = now.toString();

    // 3. Update tampilan data di sebelah kanan
    document.getElementById('current-time').innerText = timeString;
    
    const outputContainer = document.getElementById('output-data');
    outputContainer.innerHTML = `
        <p><strong>Nama :</strong> ${nama}</p>
        <p><strong>Tanggal Lahir :</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin :</strong> ${gender.value}</p>
        <p><strong>Pesan :</strong> ${pesan}</p>
    `;

    // Opsional: Reset form setelah berhasil submit
    // this.reset();
});

