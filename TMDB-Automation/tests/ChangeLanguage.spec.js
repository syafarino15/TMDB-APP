const { test, expect } = require('@playwright/test');

test('Pengguna mengubah bahasa menjadi bahasa Indonesia', async ({ page }) => {


    await page.goto('https://www.themoviedb.org/'); // Given: Pengguna berada di halaman dashboard

    await page.locator('.translate div:has-text("EN")').click(); // When: Pengguna mengklik ikon bahasa pada navbar halaman dashboard
    await page.getByRole('option', { name: 'English (en-US)' }).click(); // And: Pengguna mengklik bagian bahasa default
    await page.getByRole('option', { name: 'Indonesian (id-ID)' }).click(); // And: Pengguna memilih bahasa Indonesia
    await page.getByRole('link', { name: 'RELOAD PAGE' }).click(); // And: Pengguna mengklik tombol muat ulang halaman

    const welcomeHeading = await page.getByRole('heading', { name: 'Selamat datang' }); // Then: Judul di halaman utama ditampilkan dalam bahasa Indonesia
    await expect(welcomeHeading).toBeVisible();
});

test('Mengubah bahasa menjadi bahasa Indonesia setelah login di halaman dashboard', async ({ page }) => {

    await page.goto('https://www.themoviedb.org/u/Syafarino_15');  // Given Pengguna berada di halaman profil 

    await page.locator('.translate div:has-text("EN")').click(); // When: Pengguna mengklik ikon bahasa pada navbar halaman dashboard
    await page.getByRole('option', { name: 'English (en-US)' }).click(); // And: Pengguna mengklik bagian bahasa default
    await page.getByRole('option', { name: 'Indonesian (id-ID)' }).click(); // And: Pengguna memilih bahasa Indonesia
    await page.getByRole('link', { name: 'RELOAD PAGE' }).click(); // And: Pengguna mengklik tombol muat ulang halaman

    await expect(page.getByRole('link', { name: 'Lists' })).toBeVisible();// Then Sub Menu dan konten ditampilkan dalam bahasa Indonesia
});