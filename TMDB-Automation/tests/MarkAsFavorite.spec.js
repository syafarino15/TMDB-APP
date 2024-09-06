const { test, expect } = require('@playwright/test');

test('Tandai sebagai favorit setelah pengguna masuk', async ({ page }) => {

    await page.goto('https://www.themoviedb.org/');  // Given Pengguna berada di halaman profil 

    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('syafarino_15');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('010502');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Lists' })).toBeVisible();

    await page.getByLabel('Home').click(); // When: Pengguna mengklik logo untuk kembali ke beranda

    await page.getByRole('heading', { name: 'Welcome.' }).toBeVisible();// Verifikasi berhasil ke halaman beranda

    await page.getByRole('image', { name: 'Trap' }).click(); // And Pengguna mengklik salah satu film
    await page.locator('#favourite').click(); // And Pengguna mengklik ikon tandai sebagai favorit

    await expect(page.locator('#k-tooltip-content:has-text("Remove from your favorite list")')).toBeVisible();// Then Ikon favorit aktif ditampilkan dan tooltip muncul dengan perintah untuk menghapus dari favorit

});