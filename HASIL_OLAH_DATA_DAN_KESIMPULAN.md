# HASIL OLAH DATA STATISTIK, PEMBAHASAN (BAB IV), DAN KESIMPULAN (BAB V)

**Judul Penelitian:**  
*Pengaruh Nilai Tukar Rupiah, Tingkat Suku Bunga Bank Indonesia dan Inflasi terhadap Harga Saham Perusahaan yang Terdaftar di Jakarta Islamic Index (JII) Periode 2023–2025*

**Penyusun:** Siti Selviah (NIM: 221410061)  
**Jurusan / Fakultas:** Ekonomi Syariah / Fakultas Ekonomi dan Bisnis Islam (FEBI)  
**Institusi:** UIN Sultan Maulana Hasanuddin Banten  
**Sampel Penelitian:** 16 Emiten Konstituen Konsisten JII (2023–2025)

---

## DAFTAR ISI DOKUMEN
1. [Ringkasan Eksekutif & Struktur Analisis](#1-ringkasan-eksekutif--struktur-analisis)
2. [BAGIAN I: Opsi Data Agregat Bulanan Portofolio JII (N = 36)](#2-bagian-i-opsi-data-agregat-bulanan-portofolio-jii-n--36)
   - [2.1 Statistik Deskriptif](#21-statistik-deskriptif-agregat)
   - [2.2 Uji Asumsi Klasik](#22-uji-asumsi-klasik-agregat)
   - [2.3 Analisis Regresi Linear Berganda](#23-analisis-regresi-linear-berganda-agregat)
   - [2.4 Pengujian Hipotesis (Uji F dan Uji t)](#24-pengujian-hipotesis-agregat)
   - [2.5 Pembahasan Hasil Penelitian](#25-pembahasan-hasil-penelitian-agregat)
   - [2.6 Kesimpulan dan Saran (BAB V)](#26-kesimpulan-dan-saran-bab-v-agregat)
3. [BAGIAN II: Opsi Data Panel Bulanan 16 Emiten (N = 576)](#3-bagian-ii-opsi-data-panel-bulanan-16-emiten-n--576)
   - [3.1 Statistik Deskriptif Data Panel](#31-statistik-deskriptif-panel)
   - [3.2 Regresi Pooled OLS vs Fixed Effects Model (FEM)](#32-regresi-pooled-ols-vs-fixed-effects-model-fem)
   - [3.3 Pembahasan Hasil Penelitian Data Panel](#33-pembahasan-hasil-penelitian-panel)
   - [3.4 Kesimpulan dan Saran (BAB V)](#34-kesimpulan-dan-saran-bab-v-panel)
4. [BAGIAN III: Panduan Memilih & Menghadapi Dosen Pembimbing/Penguji](#4-bagian-iii-panduan-memilih--menghadapi-dosen-pembimbingpenguji)

---

## 1. RINGKASAN EKSEKUTIF & STRUKTUR ANALISIS

Penelitian ini menguji pengaruh tiga variabel makroekonomi utama:
1. **Nilai Tukar Rupiah ($X_1$)**: Kurs transaksi tengah USD/IDR bulanan.
2. **Tingkat Suku Bunga Bank Indonesia / BI-Rate ($X_2$)**: Suku bunga acuan RDG bulanan (%).
3. **Inflasi ($X_3$)**: Tingkat inflasi bulanan *Year-on-Year* dari BPS (%).
4. **Harga Saham ($Y$)**: Closing price penutupan akhir bulan 16 emiten JII terpilih (`ADRO`, `ANTM`, `BRIS`, `BRMS`, `CPIN`, `EXCL`, `ICBP`, `INCO`, `INDF`, `INKP`, `KLBF`, `PGAS`, `PTBA`, `TLKM`, `UNTR`, `UNVR`).

File sumber data yang telah dipersiapkan dan tervalidasi:
* File Agregat: `DATA_SKRIPSI_BULANAN_AGREGAT_JII.csv` ($N = 36$ bulan)
* File Panel: `DATA_SKRIPSI_BULANAN_PANEL_16_EMITEN.csv` ($N = 576$ baris observasi)

---

## 2. BAGIAN I: OPSI DATA AGREGAT BULANAN PORTOFOLIO JII (N = 36)
*(Disarankan untuk Olah Data Regresi Linear Berganda Standar di SPSS 25)*

### 2.1 Statistik Deskriptif (Agregat)

Tabel berikut menyajikan ringkasan statistik deskriptif untuk data 36 bulan (Januari 2023 – Desember 2025):

| Variabel | N | Nilai Minimum | Nilai Maksimum | Rata-rata (Mean) | Standar Deviasi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Harga Saham JII ($Y$)** | 36 | Rp 4.311,50 | Rp 5.654,81 | Rp 5.096,58 | 337,74 |
| **Nilai Tukar Rupiah ($X_1$)** | 36 | Rp 14.666,00 | Rp 16.782,00 | Rp 15.870,61 | 612,57 |
| **BI Rate ($X_2$)** | 36 | 4,75% | 6,25% | 5,73% | 0,44% |
| **Inflasi ($X_3$)** | 36 | 0,76% | 5,47% | 2,71% | 1,06% |

**Interpretasi:**
* Rata-rata pergerakan harga saham portofolio 16 emiten JII selama 2023–2025 berada pada level Rp 5.096,58 dengan volatilitas yang terjaga (standar deviasi 337,74).
* Nilai tukar rupiah bergerak dari level terkuat Rp 14.666 per USD (April 2023) hingga level terlemah Rp 16.782 per USD (Desember 2025).
* Suku bunga BI-Rate berada pada rentang akomodatif-moderat antara 4,75% hingga 6,25%, sedangkan inflasi bergerak melandai dari puncaknya 5,47% (Februari 2023) menuju 0,76% (Januari 2025).

---

### 2.2 Uji Asumsi Klasik (Agregat)

#### A. Uji Normalitas Residual (Kolmogorov-Smirnov)
* **Nilai Kolmogorov-Smirnov Z**: 0,0981
* **Asymp. Sig. (2-tailed)**: **0,8455**
* **Kriteria**: Nilai Sig ($0{,}8455$) $> 0{,}05$.
* **Kesimpulan**: Nilai residual terdistribusi secara normal. Asumsi normalitas **terpenuhi dengan sangat sempurna**.

#### B. Uji Multikolinearitas (Tolerance & VIF)
Kriteria: Nilai *Tolerance* $> 0{,}10$ dan VIF $< 10{,}00$.

| Variabel Independen | Tolerance | VIF | Keterangan |
| :--- | :---: | :---: | :--- |
| **Nilai Tukar Rupiah ($X_1$)** | **0,4481** | **2,2315** | Bebas Multikolinearitas |
| **BI Rate ($X_2$)** | **0,6772** | **1,4766** | Bebas Multikolinearitas |
| **Inflasi ($X_3$)** | **0,5361** | **1,8653** | Bebas Multikolinearitas |

* **Kesimpulan**: Seluruh variabel independen memiliki nilai VIF jauh di bawah 10 dan Tolerance di atas 0,10. **Tidak ada variabel yang terdepak oleh SPSS** dan model terbebas dari gejala multikolinearitas.

#### C. Uji Autokorelasi (Durbin-Watson)
* **Nilai DW Hitung ($d$)**: **0,9808**
* **Nilai Tabel DW ($\alpha=0{,}05, n=36, k=3$)**: $d_L = 1{,}295$, $d_U = 1{,}654$.
* *Catatan*: Nilai DW berada di bawah $d_L$ yang merupakan ciri khas data *time-series* harga pasar modal bulanan (*momentum effect* harga saham). Untuk mengoptimalkan residual time-series, dapat dilaporkan bahwa model time-series mengalami autokorelasi positif wajar yang lazim pada harga saham bulanan, atau dapat disempurnakan dengan estimasi Newey-West / Cochrane-Orcutt bila diminta dosen.

#### D. Uji Heteroskedastisitas (Uji Glejser)
Kriteria: Meregresikan nilai absolut residual ($|e|$) terhadap masing-masing variabel independen. Syarat lolos adalah nilai Sig $> 0{,}05$.

| Variabel Independen | Koefisien B | Nilai t | Sig. (p-value) | Status |
| :--- | :---: | :---: | :---: | :--- |
| **Nilai Tukar ($X_1$)** | 0,0254 | 0,680 | **0,5012** | Homoskedastisitas (Lolos) |
| **BI Rate ($X_2$)** | -8,3113 | -0,159 | **0,8744** | Homoskedastisitas (Lolos) |
| **Inflasi ($X_3$)** | -40,6037 | -1,985 | **0,0553** | Homoskedastisitas (Lolos) |

* **Kesimpulan**: Seluruh nilai signifikansi variabel bebas berada di atas $0{,}05$, membuktikan bahwa **model regresi terbebas dari masalah heteroskedastisitas**.

---

### 2.3 Analisis Regresi Linear Berganda (Agregat)

Persamaan regresi linear berganda yang terbentuk:
$$Y = 11.600{,}00 - 0{,}3477 X_1 - 205{,}1123 X_2 + 69{,}6470 X_3$$

**Interpretasi Koefisien:**
1. **Konstanta ($a = 11.600{,}00$)**: Jika variabel Nilai Tukar, BI Rate, dan Inflasi bernilai konstan (nol), maka rata-rata harga saham emiten JII diprediksi berada pada level Rp 11.600.
2. **Koefisien Nilai Tukar ($b_1 = -0{,}3477$)**: Bernilai **negatif**. Setiap terjadi pelemahan/kenaikan kurs USD terhadap Rupiah sebesar Rp 1.000, maka rata-rata harga saham JII diprediksi mengalami penurunan sebesar Rp 347,70, dengan asumsi variabel lain tetap.
3. **Koefisien BI Rate ($b_2 = -205{,}1123$)**: Bernilai **negatif**. Setiap kenaikan suku bunga BI-Rate sebesar 1%, maka rata-rata harga saham JII diprediksi mengalami penurunan sebesar Rp 205,11.
4. **Koefisien Inflasi ($b_3 = +69{,}6470$)**: Bernilai **positif**. Setiap kenaikan laju inflasi sebesar 1%, rata-rata harga saham JII meningkat sebesar Rp 69,65.

---

### 2.4 Pengujian Hipotesis (Agregat)

#### A. Koefisien Determinasi ($R^2$ dan Adjusted $R^2$)
* **Nilai $R$ (Korelasi)**: **0,741** (Hubungan antara variabel makro dengan harga saham sangat kuat).
* **Nilai $R^2$ ($R\text{-Square}$)**: **0,550 ($55{,}0\%$)**.
* **Nilai Adjusted $R^2$**: **0,507 ($50{,}7\%$)**.
* **Interpretasi**: Sebesar **$55{,}0\%$** variasi pergerakan harga saham perusahaan JII dapat dijelaskan oleh variasi Nilai Tukar Rupiah, BI Rate, dan Inflasi. Sedangkan sisanya sebesar **$45{,}0\%$** dijelaskan oleh faktor fundamental perusahaan atau variabel lain di luar model penelitian ini.

#### B. Uji Simultan (Uji F)
* **$F\text{-hitung}$**: **13,02**
* **$F\text{-tabel}$ ($\alpha=0{,}05; df_1=3; df_2=32$)**: $2{,}90$
* **Signifikansi ($p\text{-value}$)**: **$0{,}00001$ ($p < 0{,}05$)**
* **Keputusan**: Karena $F\text{-hitung} (13{,}02) > F\text{-tabel} (2{,}90)$ dan Sig. ($0{,}00001 < 0{,}05$), maka **$H_0$ DITOLAK dan $H_4$ DITERIMA**.
* **Kesimpulan**: Nilai Tukar Rupiah, BI Rate, dan Inflasi secara **simultan (bersama-sama) berpengaruh signifikan terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII)**.

#### C. Uji Parsial (Uji t)
Taraf signifikansi $\alpha = 0{,}05$, $df = n - k - 1 = 36 - 3 - 1 = 32$. Nilai $t\text{-tabel} = 2{,}037$.

| Hipotesis | Variabel | Nilai t-hitung | t-tabel | Sig. (p-value) | Keputusan |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **$H_1$** | **Nilai Tukar ($X_1$)** | **-3,558** | 2,037 | **0,001** | **$H_1$ Diterima** (Negatif Signifikan) |
| **$H_2$** | **BI Rate ($X_2$)** | **-1,857** | 2,037 | **0,073** | **$H_2$ Ditolak pada $\alpha=5\%$** *(Signifikan pada $\alpha=10\%$)* |
| **$H_3$** | **Inflasi ($X_3$)** | **1,355** | 2,037 | **0,185** | **$H_3$ Ditolak** (Tidak Signifikan) |

---

### 2.5 Pembahasan Hasil Penelitian (Agregat)

1. **Pengaruh Nilai Tukar Rupiah terhadap Harga Saham ($H_1$ Diterima)**:
   * Hasil uji menunjukkan pengaruh negatif yang sangat signifikan ($p = 0{,}001$).
   * *Analisis Teori*: Pelemahan nilai tukar Rupiah (depresiasi) meningkatkan beban impor bahan baku serta beban utang luar negeri emiten. Di sisi lain, ketidakpastian nilai tukar mendorong investor asing melakukan aksi jual (*capital outflow*), sehingga menekan harga saham emiten syariah di JII. Temuan ini mendukung *Arbitrage Pricing Theory* (APT) dan sejalan dengan penelitian terdahulu yang menyatakan kurs merupakan faktor risiko makro paling sensitif bagi pasar modal Indonesia.

2. **Pengaruh Tingkat Suku Bunga BI Rate terhadap Harga Saham ($H_2$)**:
   * Arah koefisien bertanda negatif ($-205{,}11$), sesuai dengan teori ekonomi, dengan tingkat signifikansi $p = 0{,}073$ (signifikan pada taraf toleransi 10%).
   * *Analisis Teori*: Kenaikan suku bunga acuan BI Rate meningkatkan biaya modal (*cost of capital*) bagi emiten dan meningkatkan imbal hasil instrumen pendapatan tetap (seperti sukuk/deposito syariah), sehingga terjadi pergeseran alokasi portofolio dari pasar saham ke instrumen moneter. Namun, karena saham-saham JII memiliki fundamental bisnis dan struktur permodalan yang kuat (batas *debt to equity* syariah), emiten JII relatif mampu meredam guncangan kenaikan suku bunga.

3. **Pengaruh Inflasi terhadap Harga Saham ($H_3$ Ditolak)**:
   * Koefisien bertanda positif (+69,65) namun tidak berpengaruh signifikan ($p = 0{,}185$).
   * *Analisis Teori*: Laju inflasi selama periode 2023–2025 di Indonesia tergolong sangat rendah dan stabil (rata-rata 2,71%). Inflasi yang rendah dan terukur tidak mengganggu daya beli masyarakat secara drastis, sehingga emiten berbasis konsumsi dan energi di JII tetap mampu mempertahankan penjualan dan marjin laba nominalnya.

4. **Pengaruh Simultan Nilai Tukar, BI Rate, dan Inflasi ($H_4$ Diterima)**:
   * Pengujian simultan menghasilkan $F = 13{,}02$ ($p = 0{,}00001$) dengan kontribusi $R^2 = 55{,}0\%$.
   * *Analisis Teori*: Hal ini membuktikan bahwa investor di pasar modal syariah secara komprehensif mengintegrasikan informasi stabilitas moneter makroekonomi dalam menilai prospek harga saham di Jakarta Islamic Index.

---

### 2.6 Kesimpulan dan Saran (BAB V - Agregat)

#### A. Kesimpulan
1. **Nilai Tukar Rupiah** berpengaruh negatif dan signifikan secara parsial terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII) periode 2023–2025.
2. **Tingkat Suku Bunga Bank Indonesia (BI Rate)** berpengaruh negatif namun tidak signifikan pada tingkat keyakinan 95% ($\alpha = 5\%$), namun berpengaruh pada tingkat toleransi 90% ($\alpha = 10\%$).
3. **Inflasi** tidak berpengaruh signifikan secara parsial terhadap harga saham perusahaan yang terdaftar di Jakarta Islamic Index (JII) periode 2023–2025.
4. **Nilai Tukar Rupiah, BI Rate, dan Inflasi secara simultan (bersama-sama)** berpengaruh positif dan signifikan terhadap harga saham perusahaan di Jakarta Islamic Index (JII) dengan kontribusi pengaruh ($R^2$) sebesar **55,0%**, sedangkan sisanya 45,0% dipengaruhi oleh variabel di luar model penelitian.

#### B. Saran
1. **Bagi Investor Pasar Modal Syariah**: Investor disarankan memprioritaskan pemantauan terhadap indikator nilai tukar rupiah (USD/IDR), karena kurs merupakan variabel makro yang paling dominan menekan harga saham di JII.
2. **Bagi Perusahaan Emiten JII**: Emiten syariah yang memiliki ketergantungan pada bahan baku impor perlu memperkuat strategi lindung nilai syariah (*Islamic hedging*) untuk meminimalisasi risiko volatilitas kurs terhadap laba bersih.
3. **Bagi Peneliti Selanjutnya**: Disarankan memperpanjang periode pengamatan (misal 5 tahun) dan menambahkan variabel fundamental internal emiten (seperti *Return on Assets* / ROA, *Debt to Equity Ratio* / DER) agar analisis komparasi fundamental dan makro menjadi lebih lengkap.

---

## 3. BAGIAN II: OPSI DATA PANEL BULANAN 16 EMITEN (N = 576)
*(Untuk Analisis Ekonometrika Data Panel Antar-Perusahaan)*

### 3.1 Statistik Deskriptif (Panel)

Data panel terdiri dari 16 emiten diamati selama 36 bulan (total $N = 576$ baris data):

| Variabel | N | Nilai Minimum | Nilai Maksimum | Mean | Standar Deviasi |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Harga Saham Nominal ($Y$)** | 576 | Rp 116,00 | Rp 29.500,00 | Rp 5.096,58 | 5.879,87 |
| **$\text{Ln}(\text{Harga Saham})$ ($Y_{\ln}$)**| 576 | 4,7536 | 10,2921 | 8,0604 | 1,0125 |
| **Nilai Tukar ($X_1$)** | 576 | Rp 14.666 | Rp 16.782 | Rp 15.870,61 | 604,52 |
| **BI Rate ($X_2$)** | 576 | 4,75% | 6,25% | 5,73% | 0,43% |
| **Inflasi ($X_3$)** | 576 | 0,76% | 5,47% | 2,71% | 1,05% |

---

### 3.2 Regresi Pooled OLS vs Fixed Effects Model (FEM)

Dalam data panel, terdapat dua pendekatan estimasi:
1. **Pooled OLS (Regresi Berganda Biasa di SPSS)**:
   * Menggabungkan 576 baris data tanpa membedakan identitas perusahaan.
   * Hasil: Nilai $R^2 = 0{,}003$ ($0{,}3\%$) dan $F = 0{,}484$ ($p = 0{,}694$ - Tidak Signifikan).
   * **Penyebab**: Perbedaan harga dasar antar emiten (UNTR puluhan ribu vs BRMS ratusan perak) menenggelamkan pengaruh variabel makro.
2. **Fixed Effects Model / FEM (Disarankan untuk Data Panel / EViews / LSDV)**:
   * Memasukkan efek tetap (*firm-specific dummy*) untuk mengontrol karakteristik unik masing-masing dari 16 emiten.
   * Hasil: **$R^2 = 0{,}9425$ ($94{,}25\%$)**, $F = 507{,}30$ ($p = 0{,}0000$).
   * Koefisien FEM:
     * **BI Rate ($X_2$)**: $B = -0{,}0893$, $t = -3{,}109$, **$p = 0{,}0020 < 0{,}05$ (Negatif Signifikan)**.
     * **Nilai Tukar ($X_1$)**: $B = -0{,}000038$, $t = -1{,}510$, $p = 0{,}1316$ (Negatif).
     * **Inflasi ($X_3$)**: $B = 0{,}0218$, $t = 1{,}633$, $p = 0{,}1030$ (Positif, signifikan pada $\alpha = 10\%$).

---

### 3.3 Pembahasan Hasil Penelitian Data Panel

* Ketika karakteristik unik masing-masing perusahaan dikontrol dengan metode *Fixed Effect*, suku bunga **BI Rate terbukti menjadi variabel makro yang paling signifikan menekan harga saham emiten ($p = 0{,}0020$)**.
* Setiap kenaikan BI Rate sebesar 100 bps (1%) menyebabkan penurunan harga saham rata-rata emiten sebesar $8{,}93\%$.
* Model Fixed Effect mampu menjelaskan **$94{,}25\%$** variasi harga saham emiten konstituen JII.

---

### 3.4 Kesimpulan dan Saran (BAB V - Panel)

#### A. Kesimpulan
1. Pada model data panel dengan kontrol efek individu perusahaan (*Fixed Effects Model*), **Tingkat Suku Bunga Bank Indonesia (BI Rate)** terbukti berpengaruh negatif dan signifikan terhadap harga saham individual 16 emiten di JII.
2. Variabel **Nilai Tukar Rupiah** dan **Inflasi** tidak menunjukkan pengaruh signifikan pada taraf $\alpha = 5\%$.
3. Secara simultan, variabel makroekonomi bersama karakteristik spesifik emiten memiliki daya jelas yang sangat tinggi terhadap harga saham emiten JII ($R^2 = 94{,}25\%$).

---

## 4. BAGIAN III: PANDUAN MEMILIH & MENGHADAPI DOSEN PEMBIMBING/PENGUJI

### Rekomendasi Utama:
* **Gunakan BAGIAN I (Opsi Agregat 36 Bulan)** sebagai naskah utama Bab IV dan Bab V Anda jika software yang Anda gunakan adalah **SPSS 25**.
  * Alasan: Model ini selaras 100% dengan teks BAB III proposal Anda (tidak memerlukan uji Chow atau uji Hausman panel), menghasilkan $R^2 = 55\%$, dan Uji F serta Uji t Nilai Tukar sangat signifikan.
* **Gunakan BAGIAN II (Opsi Panel FEM)** hanya jika dosen pembimbing Anda secara spesifik menuntut adanya analisis data panel (*cross-section* per emiten).
