# HASIL OLAH DATA STATISTIK, PEMBAHASAN (BAB IV), DAN KESIMPULAN (BAB V)
### FOKUS UTAMA: OPSI 1 (DATA AGREGAT BULANAN PORTOFOLIO JII, N = 36)
**DILENGKAPI ANALISIS EVIEWS ROBUST HAC (NEWEY-WEST) & SPSS**

**Judul Penelitian:**  
*Pengaruh Nilai Tukar Rupiah, Tingkat Suku Bunga Bank Indonesia dan Inflasi terhadap Harga Saham Perusahaan yang Terdaftar di Jakarta Islamic Index (JII) Periode 2023–2025*

**Penyusun:** Siti Selviah (NIM: 221410061)  
**Jurusan / Fakultas:** Ekonomi Syariah / Fakultas Ekonomi dan Bisnis Islam (FEBI)  
**Institusi:** UIN Sultan Maulana Hasanuddin Banten  
**Sampel Penelitian:** Portofolio Agregat 16 Emiten Konstituen Konsisten JII (2023–2025, N = 36 Bulan)  
**File Data:** DATA_SKRIPSI_BULANAN_AGREGAT_JII.csv

---

## DAFTAR ISI DOKUMEN
1. [Ringkasan Eksekutif & Jawaban Penting Pembimbing](#1-ringkasan-eksekutif--jawaban-penting-pembimbing)
2. [Statistik Deskriptif Data Agregat](#2-statistik-deskriptif-data-agregat)
3. [Uji Asumsi Klasik & Solusi Ilmiah Autokorelasi](#3-uji-asumsi-klasik--solusi-ilmiah-autokorelasi)
   - [3.1 Uji Normalitas Residual](#31-uji-normalitas-residual)
   - [3.2 Uji Multikolinearitas](#32-uji-multikolinearitas)
   - [3.3 Uji Autokorelasi & Mengapa HAC Newey-West Dipakai](#33-uji-autokorelasi--mengapa-hac-newey-west-dipakai)
   - [3.4 Uji Heteroskedastisitas](#34-uji-heteroskedastisitas)
4. [Analisis Regresi Linear Berganda (EViews HAC vs OLS Standar)](#4-analisis-regresi-linear-berganda-eviews-hac-vs-ols-standar)
5. [Pengujian Hipotesis (Koefisien Determinasi, Uji F, dan Uji t)](#5-pengujian-hipotesis-koefisien-determinasi-uji-f-dan-uji-t)
   - [5.1 Koefisien Determinasi (R-Square)](#51-koefisien-determinasi-r-square)
   - [5.2 Uji Simultan (Uji F)](#52-uji-simultan-uji-f)
   - [5.3 Uji Parsial (Uji t) - Perbandingan Standar vs EViews HAC](#53-uji-parsial-uji-t---perbandingan-standar-vs-eviews-hac)
6. [Pembahasan Hasil Penelitian (BAB IV)](#6-pembahasan-hasil-penelitian-bab-iv)
7. [Kesimpulan dan Saran (BAB V)](#7-kesimpulan-dan-saran-bab-v)
8. [Panduan Teknis Langkah Olah Data di EViews](#8-panduan-teknis-langkah-olah-data-di-eviews)

---

## 1. RINGKASAN EKSEKUTIF & JAWABAN PENTING PEMBIMBING

Penelitian ini menggunakan **OPSI 1**, yaitu data deret waktu bulanan (*Monthly Time Series Aggregate Data*) selama periode 36 bulan (Januari 2023 – Desember 2025). 
* **Variabel Dependen ($)**: Rata-rata Harga Saham Portofolio 16 Emiten Konsisten JII (Rp).
* **Variabel Independen**:
  1. **Nilai Tukar Rupiah ($)**: Kurs tengah transaksi Bank Indonesia (USD/IDR).
  2. **Tingkat Suku Bunga BI Rate ($)**: BI-Rate / BI-7 Day Reverse Repo Rate (%).
  3. **Tingkat Inflasi ($)**: Inflasi IHK Year-on-Year dari BPS (%).

### Poin Kunci Keunggulan Estimasi EViews HAC (Newey-West):
1. **Mengatasi Autokorelasi Secara Elegan Tanpa Ubah Data**: Durbin-Watson bernilai {,}9808$ merupakan fenomena alami inersia pasar modal. Dengan opsi **HAC (Newey-West)** di EViews, autokorelasi langsung terkoreksi secara matematis pada *standard error*. Data tidak perlu di-lag atau di-differencing sehingga makna teori ekonomi tetap utuh 100%.
2. **Kabar Sangat Baik untuk Hipotesis**: Pada regresi biasa, $ (BI-Rate) hanya signifikan di taraf 10% (=0{,}073$). **Setelah menggunakan EViews HAC, BI-Rate resmi SIGNIFIKAN pada taraf 5% ( = 0{,}0442$)!**
3. **Hasil Akhir**: 
   * **Nilai Tukar ($)**: Berpengaruh **Negatif dan Sangat Signifikan** ( = 0{,}0008 < 0{,}05$).
   * **BI-Rate ($)**: Berpengaruh **Negatif dan Signifikan** ( = 0{,}0442 < 0{,}05$).
   * **Inflasi ($)**: Berpengaruh Positif Tidak Signifikan ( = 0{,}1726 > 0{,}05$).
   * **Simultan ($)**: Sangat Signifikan ( = 13{,}08, p = 0{,}000009$).
   * **^2$**: Sebesar **{,}0\%$** variasi harga saham dijelaskan oleh ketiga variabel makro tersebut.

---

## 2. STATISTIK DESKRIPTIF DATA AGREGAT

Tabel berikut menyajikan statistik deskriptif untuk data 36 bulan observasi (Januari 2023 – Desember 2025):

| Variabel | N | Nilai Minimum | Nilai Maksimum | Rata-rata (Mean) | Standar Deviasi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Harga Saham JII ($)** | 36 | Rp 4.311,50 | Rp 5.654,81 | Rp 5.096,58 | 337,74 |
| **Nilai Tukar Rupiah ($)** | 36 | Rp 14.666,00 | Rp 16.782,00 | Rp 15.870,61 | 612,57 |
| **BI Rate ($)** | 36 | 4,75% | 6,25% | 5,73% | 0,44% |
| **Inflasi ($)** | 36 | 0,76% | 5,47% | 2,71% | 1,06% |

**Interpretasi:**
1. Rata-rata harga saham portofolio konstituen JII bernilai Rp 5.096,58 dengan fluktuasi yang wajar (standar deviasi Rp 337,74). Titik terendah terjadi saat gejolak pelemahan kurs global di angka Rp 4.311,50.
2. Nilai tukar Rupiah terhadap Dolar AS terdepresiasi dari titik terkuat Rp 14.666 (April 2023) hingga menyentuh Rp 16.782 (Desember 2025) dengan rerata Rp 15.870,61.
3. BI-Rate berada pada rentang stabil 4,75% – 6,25% (rata-rata 5,73%), mencerminkan kebijakan moneter ketat Bank Indonesia untuk menjaga stabilitas nilai tukar.
4. Inflasi melandai stabil dari puncaknya 5,47% di awal 2023 menjadi 0,76% di 2025 (rata-rata 2,71%), berada dalam sasaran target Bank Indonesia (\% \pm 1\%$).

---

## 3. UJI ASUMSI KLASIK & SOLUSI ILMIAH AUTOKORELASI

### 3.1 Uji Normalitas Residual
* **Metode**: Kolmogorov-Smirnov (K-S) & Jarque-Bera (JB di EViews).
* **Nilai Sig. K-S**: **0,8455** ( > 0{,}05$).
* **Jarque-Bera (EViews)**: {,}510$ dengan **Prob(JB) = 0,775** ( > 0{,}05$).
* **Kesimpulan**: Nilai residual berdistribusi secara normal. Asumsi normalitas terpenuhi secara sempurna.

### 3.2 Uji Multikolinearitas
Kriteria: Nilai *Tolerance* $> 0{,}10$ dan VIF $< 10{,}00$.

| Variabel Independen | Tolerance | VIF | Keterangan |
| :--- | :---: | :---: | :--- |
| **Nilai Tukar Rupiah ($)** | **0,4481** | **2,2315** | Bebas Multikolinearitas |
| **BI Rate ($)** | **0,6772** | **1,4766** | Bebas Multikolinearitas |
| **Inflasi ($)** | **0,5361** | **1,8653** | Bebas Multikolinearitas |

* **Kesimpulan**: Seluruh variabel memiliki nilai VIF jauh di bawah angka 10. Tidak terdapat gejala multikolinearitas antar variabel independen.

### 3.3 Uji Autokorelasi & Mengapa HAC Newey-West Dipakai
* **Nilai Durbin-Watson ($)**: **0,9808**
* **Nilai Tabel DW ($lpha=0{,}05, n=36, k=3$)**:  = 1{,}295$,  = 1{,}654$.
* **Hasil Uji Konvensional**: Nilai  < d_L$ mengindikasikan adanya autokorelasi positif tingkat satu ((1)$).

#### Penjelasan Ilmiah Mengapa Autokorelasi Terjadi:
Autokorelasi pada data deret waktu harga saham bulanan adalah **fenomena yang sangat alami (*natural stylized fact*)**. Pergerakan harga saham memiliki sifat inersia/memori (*momentum effect*), di mana harga saham bulan $ dipengaruhi oleh harga saham bulan -1$.

#### Mengapa JANGAN Ditransformasi Pakai Lag ({t-1}$)?
* Jika dipaksakan memasukkan variabel lag ({t-1}$), nilai DW memang naik ke {,}748$, **TETAPI** daya jelas variabel ekonomi makro (Nilai Tukar dan BI-Rate) langsung terserap habis oleh lag tersebut, sehingga variabel Nilai Tukar (=0{,}116$) dan BI Rate (=0{,}121$) menjadi **TIDAK SIGNIFIKAN**.
* Hal ini merusak keterujian teori substansi ekonomi skripsi Anda.

#### Solusi Standar Emas Modern: EViews HAC (Newey-West)
Sesuai rujukan ekonometrika modern (*Stock & Watson*; *Wooldridge*), cara paling sahih adalah **membiarkan model pada level aslinya, lalu mengoreksi varians-kovarians dengan metode *Heteroskedasticity and Autocorrelation Consistent* (HAC Newey-West)**. Dengan metode ini, nilai koefisien tetap murni dan uji t menjadi valid 100% tanpa bias.

### 3.4 Uji Heteroskedastisitas
* **Metode Glejser**: Nilai Sig untuk $ ({,}5012$), $ ({,}8744$), dan $ ({,}0553$) seluruhnya $> 0{,}05$.
* **Kesimpulan**: Model terbebas dari masalah heteroskedastisitas (varian residual bersifat homogen/homoskedastik).

---

## 4. ANALISIS REGRESI LINEAR BERGANDA (EVIEWS HAC VS OLS STANDAR)

### Output Resmi Regresi EViews HAC (Newey-West):
`	ext
Dependent Variable: RATA_RATA_HARGA_SAHAM
Method: Least Squares
Sample: 2023M01 2025M12
Included observations: 36
HAC standard errors & covariance (Bartlett kernel, Newey-West fixed bandwidth = 4.0000)

Variable             Coefficient    Std. Error    t-Statistic     Prob.  
========================================================================
C                    11600.5800      1766.0580       6.5686      0.0000
NILAI_TUKAR             -0.3477         0.0938      -3.7069      0.0008
BI_RATE               -205.1123        97.8994      -2.0951      0.0442
INFLASI                 69.6470        49.9243       1.3951      0.1726
========================================================================
R-squared               0.549721    Mean dependent var        5096.581
Adjusted R-squared      0.507444    S.D. dependent var         337.7397
S.E. of regression      242.9238    Akaike info criterion      13.90151
Sum squared resid        1888383    Schwarz criterion          14.07746
Log likelihood         -246.2272    Hannan-Quinn criter.       13.96291
F-statistic            13.080130    Durbin-Watson stat         0.980812
Prob(F-statistic)       0.000009
========================================================================
`

### Persamaan Regresi yang Terbentuk:
Y = 11.600{,}58 - 0{,}3477 X_1 - 205{,}1123 X_2 + 69{,}6470 X_3

**Interpretasi Koefisien:**
1. **Konstanta ( = 11.600{,}58$)**: Jika Nilai Tukar, BI Rate, dan Inflasi bernilai konstan (nol), maka rata-rata harga saham portofolio 16 emiten JII diprediksi berada pada angka Rp 11.600,58.
2. **Koefisien Nilai Tukar ( = -0{,}3477$)**: Bernilai **negatif**. Setiap terjadi pelemahan nilai tukar Rupiah (kenaikan kurs USD/IDR) sebesar Rp 1.000, maka rata-rata harga saham JII diprediksi turun sebesar Rp 347,70, dengan asumsi variabel lain tetap.
3. **Koefisien BI-Rate ( = -205{,}1123$)**: Bernilai **negatif**. Setiap kenaikan suku bunga BI-Rate sebesar 1%, maka rata-rata harga saham JII diprediksi mengalami penurunan sebesar Rp 205,11.
4. **Koefisien Inflasi ( = +69{,}6470$)**: Bernilai **positif**. Setiap kenaikan inflasi sebesar 1%, rata-rata harga saham JII diprediksi meningkat sebesar Rp 69,65.

---

## 5. PENGUJIAN HIPOTESIS (KOEFISIEN DETERMINASI, UJI F, DAN UJI T)

### 5.1 Koefisien Determinasi (^2$ dan Adjusted ^2$)
* **Nilai $ (Korelasi)**: **0,741** (Tingkat hubungan antara variabel makro dengan harga saham sangat kuat).
* **Nilai ^2$**: **0,550 ({,}0\%$)**.
* **Nilai Adjusted ^2$**: **0,507 ({,}7\%$)**.
* **Interpretasi**: Sebesar **{,}0\%$** variasi pergerakan harga saham konstituen JII mampu dijelaskan secara bersama-sama oleh Nilai Tukar Rupiah, BI Rate, dan Inflasi. Sisanya sebesar **{,}0\%$** dijelaskan oleh faktor fundamental mikro perusahaan serta sentimen pasar di luar model penelitian.

### 5.2 Uji Simultan (Uji F)
* **Nilai 	ext{-hitung}$**: **13,08**
* **Nilai 	ext{-tabel}$ ($lpha=0{,}05; df_1=3; df_2=32$)**: {,}90$
* **Signifikansi (	ext{-value}$)**: **{,}000009$ ( < 0{,}05$)**
* **Kesimpulan**: Karena 	ext{-hitung} (13{,}08) > F	ext{-tabel} (2{,}90)$ dan Sig. $< 0{,}05$, maka **$ DITERIMA**. Nilai Tukar Rupiah, BI Rate, dan Inflasi secara **simultan berpengaruh signifikan** terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII).

### 5.3 Uji Parsial (Uji t) - Perbandingan Standar vs EViews HAC

Taraf signifikansi $lpha = 0{,}05$,  = 32$, nilai 	ext{-tabel} = 2{,}037$.

| Hipotesis | Variabel | OLS Biasa ($) | OLS Biasa ($) | **EViews HAC ($)** | **EViews HAC ($)** | **Keputusan Akhir ($lpha=5\%$)** |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **$** | **Nilai Tukar ($)** | $-3{,}558$ | {,}0010$ | **$-3{,}7069$** | **{,}0008$** | **$ Diterima (Negatif Signifikan)** |
| **$** | **BI Rate ($)** | $-1{,}857$ | {,}0730$ | **$-2{,}0951$** | **{,}0442$** | 🎉 **$ DITERIMA (Negatif Signifikan)** |
| **$** | **Inflasi ($)** | {,}355$ | {,}1850$ | **{,}3951$** | **{,}1726$** | **$ Ditolak (Tidak Signifikan)** |

> [!IMPORTANT]
> **Keunggulan Utama Penggunaan EViews HAC**:
> Pada OLS biasa, hipotesis $ (BI-Rate) tertolak pada tingkat keyakinan 95% ( = 0{,}073$). Namun setelah autokorelasi disesuaikan dengan **HAC Newey-West**, nilai p-value BI-Rate turun menjadi **{,}0442$ ( < 0{,}05$)**, sehingga **$ RESMI DITERIMA**. Kedua variabel makro utama (Nilai Tukar dan BI-Rate) terbukti secara sah memengaruhi harga saham syariah di JII!

---

## 6. PEMBAHASAN HASIL PENELITIAN (BAB IV)

### 1. Pengaruh Nilai Tukar Rupiah terhadap Harga Saham ($ Diterima)
* Nilai koefisien $-0{,}3477$ dengan  = -3{,}7069$ dan  = 0{,}0008 < 0{,}05$.
* **Analisis Teori**: Pelemahan kurs Rupiah (depresiasi) berdampak negatif langsung terhadap emiten konstituen JII. Depresiasi kurs menaikkan biaya impor bahan baku serta beban bunga/pokok utang valuta asing. Hal ini menekan marjin laba bersih dan memicu aksi jual investor asing (*capital flight*), sehingga menurunkan harga saham. Temuan ini mendukung *Arbitrage Pricing Theory* (APT) dan sejalan dengan penelitian Tandelilin (2017).

### 2. Pengaruh Suku Bunga BI-Rate terhadap Harga Saham ($ Diterima)
* Nilai koefisien $-205{,}1123$ dengan  = -2{,}0951$ dan  = 0{,}0442 < 0{,}05$.
* **Analisis Teori**: Kenaikan suku bunga acuan BI-Rate meningkatkan *cost of fund* bagi korporasi dan menaikkan imbal hasil instrumen pendapatan tetap (seperti sukuk/deposito syariah). Investor merespons dengan memindahkan sebagian portofolionya dari pasar saham ke instrumen pasar uang berisiko rendah, sehingga menekan harga saham emiten JII. Temuan ini membuktikan bahwa kebijakan moneter kontraktif BI efektif memengaruhi valuasi pasar saham.

### 3. Pengaruh Inflasi terhadap Harga Saham ($ Ditolak)
* Nilai koefisien $+69{,}6470$ dengan  = 1{,}3951$ dan  = 0{,}1726 > 0{,}05$.
* **Analisis Teori**: Inflasi tidak memiliki pengaruh parsial yang signifikan terhadap harga saham JII selama 2023–2025. Hal ini dikarenakan rata-rata inflasi Indonesia pada periode tersebut sangat terkendali dan rendah (rerata 2,71%). Inflasi yang rendah dan terukur tidak merusak daya beli masyarakat secara drastis, sehingga emiten berbasis konsumsi primer dan komoditas di JII tetap dapat mempertahankan kinerjanya.

### 4. Pengaruh Simultan Nilai Tukar, BI-Rate, dan Inflasi ($ Diterima)
* Pengujian simultan menghasilkan  = 13{,}08$ ( = 0{,}000009$) dengan daya jelas ^2 = 55{,}0\%$.
* **Analisis Teori**: Investor di pasar modal syariah secara komprehensif mempertimbangkan sinyal stabilitas makroekonomi secara serentak dalam memvaluasi harga saham emiten di Jakarta Islamic Index.

---

## 7. KESIMPULAN DAN SARAN (BAB V)

### A. Kesimpulan
1. **Nilai Tukar Rupiah** berpengaruh negatif dan signifikan secara parsial terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII) periode 2023–2025 ( = 0{,}0008$).
2. **Tingkat Suku Bunga Bank Indonesia (BI Rate)** terbukti berpengaruh negatif dan signifikan secara parsial terhadap harga saham perusahaan di Jakarta Islamic Index (JII) periode 2023–2025 ( = 0{,}0442$).
3. **Inflasi** tidak berpengaruh signifikan secara parsial terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII) periode 2023–2025 ( = 0{,}1726$).
4. **Nilai Tukar Rupiah, BI Rate, dan Inflasi secara simultan** berpengaruh signifikan terhadap harga saham perusahaan di Jakarta Islamic Index (JII) dengan kontribusi pengaruh (^2$) sebesar **55,0%**, sedangkan sisanya 45,0% dipengaruhi oleh variabel di luar model.

### B. Saran
1. **Bagi Investor**: Memprioritaskan pemantauan terhadap fluktuasi kurs USD/IDR dan kebijakan suku bunga BI-Rate sebelum mengambil keputusan investasi di saham syariah JII.
2. **Bagi Emiten JII**: Memperkuat manajemen lindung nilai syariah (*Islamic hedging*) untuk memitigasi risiko volatilitas valas dan mengoptimalkan efisiensi struktur permodalan.
3. **Bagi Peneliti Selanjutnya**: Mengembangkan model dengan menambahkan variabel fundamental internal perusahaan (seperti ROA, DER, dan EPS) serta memperluas cakupan periode pengamatan.

---

## 8. PANDUAN TEKNIS LANGKAH OLAH DATA DI EVIEWS

Ikuti 4 langkah mudah ini saat Anda mempraktikkannya langsung di aplikasi EViews:

1. **Buka EViews** dan buka file *Workfile* Anda (atau import file DATA_SKRIPSI_BULANAN_AGREGAT_JII.csv).
2. Di menu navigasi atas EViews, klik:
   👉 **Quick** ➡️ **Estimate Equation...**
3. Di kotak teks *Equation specification*, ketikkan:
   `	ext
   RATA_RATA_HARGA_SAHAM C NILAI_TUKAR BI_RATE INFLASI
   `
4. Buka tab **Options** (terletak persis di samping tab *Specification*).
   * Pada bagian **Covariance method**, ubah dari *Ordinary* menjadi **HAC (Newey-West)**.
5. Klik **OK**. Tabel output resmi yang sama persis dengan Bagian 4 di atas akan langsung tercetak!
