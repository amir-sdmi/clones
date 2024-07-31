import { useState } from "react";
import AssetsIcon from "../ui/icons/AssetsIcon";

import CancleIcon from "../ui/icons/CancleIcon";
import DropDownIcon from "../ui/icons/DropDownIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import UploadImageIcon from "../ui/icons/UploadImageIcon";
import styles from "./megaSearch.module.css";
function MegaSearch() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchInput);
  };
  return (
    <div className={styles.megaSearch}>
      <div className={styles.form}>
        <button className={styles.dropdown}>
          <span>
            <AssetsIcon />
          </span>
          <span className={styles.dropdownText}>Assets</span>
          <span>
            <DropDownIcon />
          </span>
        </button>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search assets"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <button onClick={() => setSearchInput("")}>
              <CancleIcon />
            </button>
          )}
        </div>
        <button className={styles.upload}>
          <UploadImageIcon />
        </button>

        <button className={styles.search} onClick={handleSearch}>
          <SearchIcon fillColor="#fff" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default MegaSearch;
