function calculate() {
  const username = document.getElementById('username').value.trim();
  const platform = document.getElementById('platform').value;
  const resultDiv = document.getElementById('result');

  if (!username) {
    resultDiv.innerHTML = '<p style="color: red;">Iltimos, nikni kiriting!</p>';
    return;
  }

  // Toza nikni shakllantirish
  const cleanUsername = username.replace(/^@/, '');

  let followers, views, earnings, platformName;

  if (platform === 'tiktok') {
    platformName = 'TikTok';
    followers = Math.floor(Math.random() * 80000) + 1500;
    views = followers * (Math.floor(Math.random() * 4) + 2);
    earnings = ((views / 1000) * 0.03).toFixed(2);
  } else if (platform === 'instagram') {
    platformName = 'Instagram';
    followers = Math.floor(Math.random() * 50000) + 1000;
    views = followers * (Math.floor(Math.random() * 3) + 1);
    earnings = ((followers / 1000) * 4.5).toFixed(2);
  } else if (platform === 'youtube') {
    platformName = 'YouTube';
    followers = Math.floor(Math.random() * 30000) + 500;
    views = followers * (Math.floor(Math.random() * 8) + 2);
    earnings = ((views / 1000) * 1.8).toFixed(2);
  }

  resultDiv.innerHTML = `
    <p><strong>Platforma:</strong> ${platformName}</p>
    <p><strong>Profil:</strong> @${cleanUsername}</p>
    <p><strong>Obunachilar:</strong> ~${followers.toLocaleString()} ta</p>
    <p><strong>O'rtacha ko'rishlar:</strong> ~${views.toLocaleString()} marta</p>
    <p><strong>Taxminiy daromad:</strong> $${earnings}</p>
  `;
}
