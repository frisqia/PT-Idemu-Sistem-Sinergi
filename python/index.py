def hitung_gaji(jam_kerja, tarif_per_jam):
    if jam_kerja <= 40:
        gaji = jam_kerja * tarif_per_jam
    else:
        gaji_lembur = (jam_kerja - 40) * (tarif_per_jam * 1.5)
        gaji = (40 * tarif_per_jam) + gaji_lembur
    return gaji

# Meminta input dari pengguna
jam_kerja = float(input("Masukkan jumlah jam kerja: "))
tarif_per_jam = float(input("Masukkan tarif per jam: "))

# Menghitung gaji
gaji = hitung_gaji(jam_kerja, tarif_per_jam)

# Menampilkan gaji
print(f"Gaji karyawan: {gaji}")
