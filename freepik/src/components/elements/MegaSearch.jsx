import AssetsIcon from "../ui/icons/AssetsIcon";
import DropDownIcon from "../ui/icons/DropDownIcon";
import SearchIcon from "../ui/icons/SearchIcon";
import UploadImageIcon from "../ui/icons/UploadImageIcon";
import styles from "./megaSearch.module.css";
function MegaSearch() {
  return (
    <div className={styles.megaSearch}>
      <form>
        <div>
          <button>
            <AssetsIcon />
            <span>Assets</span>
            <DropDownIcon />
          </button>
          <input type="text" placeholder="Search assets" />
          <button>X</button>
          <button>
            <UploadImageIcon />
          </button>
          <button>
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default MegaSearch;
