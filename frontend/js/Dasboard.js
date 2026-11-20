async function loadalat() {
    try {
        const response = await fetch("http://localhost:5000/api/alat");
        const alat = await response.json();

        console.log("Data alat dari Server:", alat);
        return alat;

    } catch (error) {
        console.error("Gagal mengambil data alat:", error);
    }
}

function renderalat(alatdata) {
    const alat = document.getElementById("data-alat");

    alat.innerHTML = "";

    alatdata.forEach((item, index) => {
        alat.innerHTML += `
            <tr>
                <td class="p-2 ">${index + 1}</td>
                <td>${item.nama_alat}</td>
                <td>${item.nama_kategori}</td>
                <td>${item.stok}</td>
                <td>${item.lokasi}</td>
                <td>${item.kondisi}</td>
                <td>
                    <button data-aksi="pinjam" data-id="${item.id_alat}">
                        Pinjam
                    </button>
                </td>
            </tr>
        `;
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const alat = await loadalat();
    renderalat(alat);

    const tbody = document.getElementById("data-alat");

tbody.addEventListener("click", function(event) {
    const tombol = event.target.closest('button[data-aksi="pinjam"]');

    if (!tombol) return;

    const idAlat = tombol.dataset.id;

    window.location.href = `form.html?id_alat=${idAlat}`;
});
});

