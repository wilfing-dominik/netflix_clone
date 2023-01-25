function MainMenu({ customClass }) {
  return (
    <ul className={customClass}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">TV Shows</a>
      </li>
      <li>
        <a href="/">Movies</a>
      </li>
      <li>
        <a href="/">New & Popular</a>
      </li>
      <li>
        <a href="/">My List</a>
      </li>
      <li>
        <a href="/">Browse by languages</a>
      </li>
    </ul>
  );
}

export default MainMenu;
