# Cara 1: Import modul secara langsung
import math_operations as mo

# Cara 2: Import fungsi tertentu
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Menggunakan fungsi dari modul
print("=== PERHITUNGAN GEOMETRI ===")
print(f"Luas persegi (sisi=5): {mo.luas_persegi(5)}")
print(f"Keliling persegi (sisi=5): {mo.keliling_persegi(5)}")
print(f"Luas persegi panjang (7x4): {mo.luas_persegi_panjang(7, 4)}")
print(f"Keliling persegi panjang (7x4): {mo.keliling_persegi_panjang(7, 4)}")
print(f"Luas lingkaran (jari-jari=10): {mo.luas_lingkaran(10):.2f}")
print(f"Keliling lingkaran (jari-jari=10): {mo.keliling_lingkaran(10):.2f}")

print("\n=== KONVERSI SUHU ===")
c = 25
print(f"{c}°C = {mo.celsius_ke_fahrenheit(c):.2f}°F (menggunakan modul)")
print(f"{c}°C = {celsius_ke_fahrenheit(c):.2f}°F (menggunakan fungsi langsung)")
print(f"{c}°C = {mo.celsius_ke_kelvin(c):.2f} K (menggunakan modul)")
print(f"{c}°C = {celsius_ke_kelvin(c):.2f} K (menggunakan fungsi langsung)")

print("\n=== KONSTANTA ===")
print(f"Nilai PI: {mo.PI}")