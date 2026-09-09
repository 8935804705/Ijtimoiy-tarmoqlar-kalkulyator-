function calculate() {
  const username = document.getElementById('username').value;
  const platform = document.getElementById('platform').value;
  const resultDiv = document.getElementById('result');

  if (!username) {
    resultDiv.innerHTML = '<p style="color: red;">Iltimos, nikni kiriting!</p>';
    return;
  }

  let followers, views, earnings, platformName;

  if (platform === 'tiktok') {
    platformName = 'TikTok';
    followers = Math.floor(Math.random() * 50000) + 2000;
    views = followers * (Math.floor(Math.random() * 5) + 2);
    earnings = (views / 1000 * 0.03).toFixed(2); // CPM ~$0.03
  } else if (platform === 'instagram') {
    platformName = 'Instagram';
    followers = Math.floor(Math.random() * 30000) + 1000;
    views = followers * (Math.floor(Math.random() * 3) + 1);
    earnings = (followers / 1000 * 5).toFixed(2); // Reklama post narxi
  } else if (platform === 'youtube') {
    platformName = 'YouTube';
    followers = Math.floor(Math.random() * 20000) + 500;
    views = followers * (Math.floor(Math.random() * 10) + 3);
    earnings = (views / 1000 * 1.5).toFixed(2); // Monetizatsiya CPM ~$1.50
  }

  resultDiv.innerHTML = `
    <p><strong>Platforma:</strong> ${platformName}</p>
    <p><strong>Profil:</strong> ${username}</p>
    <p><strong>Obunachilar / A'zolar:</strong> ~${followers.toLocaleString()} ta</p>
    <p><strong>O'rtacha ko'rishlar:</strong> ~${views.toLocaleString()} marta</p>
    <p><strong>Taxminiy daromad:</strong> $${earnings}</p>
  `;
}
