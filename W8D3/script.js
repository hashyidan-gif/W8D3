const formKegiatan = document.getElementById("form-kegiatan");
const inputKegiatan = document.getElementById("input-kegiatan");
const daftarKegiatan = document.getElementById("daftar-kegiatan");

let arrayKegiatan = [];

function muatData() {
  const dataLokal = localStorage.getItem("dataSantri");

  if (dataLokal) {
    arrayKegiatan = JSON.parse(dataLokal);
  }

  tampilkanKegiatan();
}

function tampilkanKegiatan() {
  daftarKegiatan.innerHTML = "";

  arrayKegiatan.forEach((kegiatan, index) => {
    const li = document.createElement("li");
    li.textContent = kegiatan;

    const btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.classList.add("btn-hapus");

    btnHapus.addEventListener("click", function () {
      hapusKegiatan(index);
    });

    li.appendChild(btnHapus);
    daftarKegiatan.appendChild(li);
  });
}

function simpanData() {
  localStorage.setItem("dataSantri", JSON.stringify(arrayKegiatan));
}

formKegiatan.addEventListener("submit", function (e) {
  e.preventDefault();

  const nilaiInput = inputKegiatan.value.trim();

  if (nilaiInput === "") {
    alert("Nama kegiatan tidak boleh kosong!");
    return;
  }

  arrayKegiatan.push(nilaiInput);

  simpanData();
  tampilkanKegiatan();

  inputKegiatan.value = "";
});

function hapusKegiatan(index) {
  arrayKegiatan.splice(index, 1);

  simpanData();
  tampilkanKegiatan();
}

muatData();
