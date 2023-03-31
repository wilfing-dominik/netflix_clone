function MainMenu({ customClass }) {
  return (
    <ul className={customClass}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/tv-shows">TV Shows</a>
      </li>
      <li>
        <a href="/movies">Movies</a>
      </li>
      <li>
        <a href="/trending">New & Popular</a>
      </li>
      <li>
        <a href="/my-list">My List</a>
      </li>
      <li>
        <a href="/browse-language">Browse by languages</a>
      </li>
    </ul>
  );
}

export default MainMenu;
