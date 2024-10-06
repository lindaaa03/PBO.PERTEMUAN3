class Kapal {
  constructor(nama, jenis, panjang, lebar) {
    this.nama = nama;
    this.jenis = jenis;
    this.panjang = panjang;
    this.lebar = lebar;
  }

  infokapal() {
    return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} m x ${this.lebar} m.`;
  }
}

class KapalPenumpang extends Kapal {
  constructor(
    nama,
    jenis,
    panjang,
    lebar,
    kapasitasPenumpang,
    kapasitasKendaraan
  ) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasPenumpang = kapasitasPenumpang;
    this.kapasitasKendaraan = kapasitasKendaraan;
  }

  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas ${
      this.kapasitasPenumpang
    } orang dan ${this.kapasitasKendaraan} kendaraan.`;
  }
}

class KapalKargo extends Kapal {
  constructor(nama, jenis, panjang, lebar, kapasitasKargo) {
    super(nama, jenis, panjang, lebar);
    this.kapasitasKargo = kapasitasKargo;
  }

  infokapal() {
    return `${super.infokapal()} Kapal ini memiliki kapasitas kargo ${
      this.kapasitasKargo
    } ton.`;
  }

  infoKargo() {
    return `Kapal ${this.nama} dapat mengangkut ${this.kapasitasKargo} ton barang.`;
  }
}

class KapalPesiar extends Kapal {
  constructor(nama, jenis, panjang, lebar, fasilitas) {
    super(nama, jenis, panjang, lebar);
    this.fasilitas = fasilitas;
  }

  infokapal() {
    return `${super.infokapal()} Kapal ini dilengkapi dengan fasilitas: ${this.fasilitas.join(
      ", "
    )}.`;
  }

  infoFasilitas() {
    return `Fasilitas di kapal ${this.nama}: ${this.fasilitas.join(", ")}.`;
  }
}

const kapalferry = new KapalPenumpang(
  "milik Linda Apriyani",
  "Ferry",
  240,
  32,
  600,
  400
); // Contoh penggunaan
console.log(kapalferry.infokapal());

const kapalkargo = new KapalKargo(
  "Kargo Maersk Triple E Class",
  "Kargo",
  400,
  59,
  100000
);
console.log(kapalkargo.infokapal());
console.log(kapalkargo.infoKargo());

const kapalpesiar = new KapalPesiar("Norwegian Bliss", "Pesiar", 333, 41, [
  "Kolam Renang",
  "Restoran dan Bar",
  "Spa dan Pusat Kebugaran",
  "Teater",
  "Sky Lounge",
  "Pusat Belanja",
  "Water Park",
]);
console.log(kapalpesiar.infokapal());
console.log(kapalpesiar.infoFasilitas());
