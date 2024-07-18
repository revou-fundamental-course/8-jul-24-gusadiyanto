// Ini file code javascript
document.addEventListener('DOMContentLoaded', () => {
    const tinggiBadan = document.getElementById('input-tinggi-badan');
    const usia = document.getElementById('input-usia');
    const beratBadan = document.getElementById('input-berat-badan');
    const hasilBmi = document.querySelector('.hasil-bmi');
    const kategoriBmi = document.querySelector('.kategori-bmi');
    
    // Hasil klasifikasi BMI
    function klasifikasiBmi(bmi) {
        if(bmi < 18.5) {
            return "Kekurangan Berat Badan" ;
        } else if (bmi >= 18 && bmi <=24.9) {
            return "Normal (Ideal)";
        } else if (bmi >= 25 && bmi <=29.9) {
            return "Kelebihan Berat Badan";
        } else if (bmi > 30) {
            return "Kegemukan (Obesitas)"
        }
    }
    
    // Perhitungan BMI
    function hitungBmi(event) {
        event.preventDefault();
        const tbdn = parseFloat(tinggiBadan.value) / 100;
        const bbdn = parseFloat(beratBadan.value);
        const bmi = bbdn / (tbdn * tbdn);
        const umur = parseFloat(usia.value);
        let kategori = '';
        let jenisKelamin = document.querySelector("input[name=gender]:checked")?.value;

        if (isNaN(tbdn) || isNaN(bbdn) || isNaN(umur) || tbdn > 3 || bbdn > 200 || jenisKelamin==undefined) {
            alert('Pastikan semua isian terisi dengan benar!');
            return;
        } 
         
        hasilBmi.textContent = bmi.toFixed(1);
        kategoriBmi.textContent = `${klasifikasiBmi(parseFloat(bmi))}`;
    }
    
    // Button reset form (clear form)
    function resetForm() {
        document.getElementById('bmi-form').reset();
        hasilBmi.textContent = '0.0';
        kategoriBmi.textContent = '';
        jenisKelaminOutputElement.textContent = '';
    }
    
    // Event submit dan reset
    document.getElementById('bmi-form').addEventListener('submit', hitungBmi);
    document.getElementById('reset-button').addEventListener('click', resetForm);
});