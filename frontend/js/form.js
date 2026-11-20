const kategoriSelect = document.getElementById("id_kategori");
const alatSelect = document.getElementById("id_alat");

let daftarAlat = [];

async function loadAlat() {
    try {
        const response = await fetch("http://localhost:5000/api/alat");

        const alat = await response.json();

        daftarAlat = alat;

        console.log("Data alat dari Backend:", daftarAlat);

    } catch (error) {
        console.error("Gagal mengambil data alat:", error);
    }
}

loadAlat();
