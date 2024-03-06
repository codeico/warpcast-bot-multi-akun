# Bot warpcast multi akun

## Cara Pakai

1. Cari Token Akun Warpcast Kalian, buka `https://warpcast.com/` di browser pc kalian

2. Klik login dengan qr
   ![](img/qr.png)


3. Scan dengan aplikasi warpcast di hp kalian

4. Jika sukses login , maka akan masuk ke halaman utama warpcast kalian

5. jika sudah , langkah selanjutnya masuk ke halaman profile kalian.

6. ketik & tahan di keyboard kalian `CTRL + SHIFT + C` / klik kanan lalu inspect || Buka tab `Network` lalu filter `XHR and Fetch`
   ![](img/token_profile1.png)

7. Lalu jika sudah muncul , refresh kembali browser kalian
8. kemudian di tab network akan muncul url profile-casts?id... click tab ini kemudian masuk ke headers scroll kebawah sampai kalian menemukan `Authorization` , kemudian copy valuenay dari `Bearer sampai selesai`
    ![](img/token_profile.png)
9. Copy Bearer kalian kemudian masukkan ke kolom Token
