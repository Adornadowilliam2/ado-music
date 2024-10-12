import React from "react";

export default function Navbar({
  setSearch,
  search,
  appear,
  filteredTracks,
  setFilteredTracks,
  setAppear,
  allTracks,
  rows,
  Link,
}) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/album">Albums</Link>
          </li>
          <li>
            <Link to="/artist">Artist</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
