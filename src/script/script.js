// cek pin
const pin = "123456";
const inputPin = document.getElementById("pin");

const cekpin = () => {
  if (inputPin.value !== "" && inputPin.value !== 0) {
    if (inputPin.value == pin) {
      window.location.href = "pilihNominal.html";
    } else {
      alert("Pin yang anda masukan salah!");
    }
  } else {
    alert("Pin tidak boleh kosong!");
  }
};

// pilih nominal
const nominal = {
  seratus: "100000",
  duaratus: "200000",
  tigaratus: "300000",
  limaratus: "500000",
  satujuta: "1000000",
  satusetengah: "1500000",
};
// duajuta: "2000000",

const saldo = 1000000;

const pilihNominal = (nominalPilih) => {
    // Cek apakah nominal pecahan 100000 atau 50000
  if (nominalPilih % 100000 == 0 || nominalPilih % 50000 == 0) {
    // cek apakah saldonya cukup untuk tarik tunai atau transaksi
    if (saldo < nominalPilih) {
      alert("Saldo tidak cukup!");
    } else {

      const konfirmasi = 
        confirm(
          `Anda mengambil uang sebesar ${nominalPilih} Saldo anda tinggal ${parseInt(
            saldo - nominalPilih
          )} `
        )
      ;

      if (konfirmasi === true) {
        window.location.href = "ambilKartu.html"
      }
      
    }
  }else{
    alert("Nominal tidak sesuai!")
  }
};

const transaksiLain = () => {
  confirm("Fitur tidak tersedia, Apakah anda ingin membatalkan ?");
};

const inputNominal = document.getElementById("nominal");

