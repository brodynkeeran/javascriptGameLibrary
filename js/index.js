const games = [
    { name: "AI Chess", file: "ai_chess.html" },
    { name: "Asteroid Blues", file: "asteroidBlues.html" },
    { name: "Asteroids", file: "asteroids.html" },
    { name: "Blackjack (Twenty-One)", file: "twentyone.html" },
    { name: "AI Chess (Mobile)", file: "mobile.html" },
    { name: "Pac-Man", file: "pacman.html" },
    { name: "Poker", file: "poker.html" },
  ];

  const searchInput = document.getElementById('searchInput');
  const gameList = document.getElementById('gameList');

  function renderList(query = '') {
    gameList.innerHTML = '';
    const filteredGames = games
      .filter(game => game.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));

    filteredGames.forEach(game => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = game.file;
      a.textContent = game.name;
      li.appendChild(a);
      gameList.appendChild(li);
    });
  }

  searchInput.addEventListener('input', () => {
    renderList(searchInput.value);
  });

  // Initial render
  renderList();