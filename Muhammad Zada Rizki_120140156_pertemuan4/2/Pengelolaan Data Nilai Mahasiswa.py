# Data mahasiswa
mahasiswa = [
    {"nama": "Andi", "nim": "001", "nilai_uts": 85, "nilai_uas": 90, "nilai_tugas": 80},
    {"nama": "Budi", "nim": "002", "nilai_uts": 75, "nilai_uas": 80, "nilai_tugas": 70},
    {"nama": "Cici", "nim": "003", "nilai_uts": 65, "nilai_uas": 70, "nilai_tugas": 60},
    {"nama": "Dedi", "nim": "004", "nilai_uts": 55, "nilai_uas": 60, "nilai_tugas": 50},
    {"nama": "Euis", "nim": "005", "nilai_uts": 45, "nilai_uas": 50, "nilai_tugas": 40}
]

# Hitung nilai akhir dan tentukan grade
for m in mahasiswa:
    nilai_akhir = 0.3 * m["nilai_uts"] + 0.4 * m["nilai_uas"] + 0.3 * m["nilai_tugas"]
    m["nilai_akhir"] = nilai_akhir
    
    if nilai_akhir >= 80:
        m["grade"] = "A"
    elif 70 <= nilai_akhir < 80:
        m["grade"] = "B"
    elif 60 <= nilai_akhir < 70:
        m["grade"] = "C"
    elif 50 <= nilai_akhir < 60:
        m["grade"] = "D"
    else:
        m["grade"] = "E"

# Tampilkan data dalam tabel
print("\nDaftar Nilai Mahasiswa")
print("="*60)
print("| {:<5} | {:<10} | {:<10} | {:<8} | {:<8} | {:<12} | {:<5} |".format(
    "NIM", "Nama", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"))
print("="*60)

for m in mahasiswa:
    print("| {:<5} | {:<10} | {:<8.1f} | {:<8.1f} | {:<8.1f} | {:<12.1f} | {:<5} |".format(
        m["nim"], m["nama"], m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"], m["nilai_akhir"], m["grade"]))
print("="*60)

# Cari nilai tertinggi dan terendah
tertinggi = max(mahasiswa, key=lambda x: x["nilai_akhir"])
terendah = min(mahasiswa, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan Nilai Tertinggi:")
print(f"Nama: {tertinggi['nama']}, NIM: {tertinggi['nim']}, Nilai Akhir: {tertinggi['nilai_akhir']:.1f}, Grade: {tertinggi['grade']}")

print("\nMahasiswa dengan Nilai Terendah:")
print(f"Nama: {terendah['nama']}, NIM: {terendah['nim']}, Nilai Akhir: {terendah['nilai_akhir']:.1f}, Grade: {terendah['grade']}")