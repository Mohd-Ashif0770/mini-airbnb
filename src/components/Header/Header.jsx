import { useCallback, useEffect, useRef, useState } from "react";
import { Globe, Menu, Search } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import HostLoginModal from "../HostLoginModal/HostLoginModal.jsx";
import LanguageRegionModal from "../LanguageRegionModal/LanguageRegionModal.jsx";
import MenuDropdown from "../MenuDropdown/MenuDropdown.jsx";
import SearchDropdown from "../SearchDropdown/SearchDropdown.jsx";

const modes = [
  { label: "Homes", icon: "🏠" },
  { label: "Experiences", icon: "🎈", badge: "NEW" },
  { label: "Services", icon: "🛎️", badge: "NEW" },
];

function Logo() {
  return (
    <a className="w-25" href="/" aria-label="Airbnb home">
      <img src="/images/airbnb-logo.jpg" alt="" />
    </a>
  );
}

function HeaderActions({
  onBecomeHost,
  onChooseRegion,
  onToggleMenu,
  isMenuOpen,
}) {
  return (
    <div className="header-actions">
      <button className="host-link" type="button" onClick={onBecomeHost}>
        Become a host
      </button>
      <button
        className="icon-button globe-button"
        type="button"
        aria-label="Choose language and region"
        onClick={onChooseRegion}
      >
        <Globe size={25} strokeWidth={2} />
      </button>
      <button
        className="icon-button menu-button"
        type="button"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={onToggleMenu}
      >
        <Menu size={25} strokeWidth={2} />
      </button>
    </div>
  );
}

function SearchButton({ onSearch }) {
  return (
    <button
      className="search-button"
      type="button"
      aria-label="Search"
      onClick={onSearch}
    >
      <Search size={26} strokeWidth={2.5} />
    </button>
  );
}

function guestTotal(searchFilters) {
  return Object.values(searchFilters.guests).reduce(
    (total, count) => total + count,
    0,
  );
}

function SearchFieldAnchor({
  type,
  activeSearch,
  onSelectSearch,
  searchFilters,
  onSearchChange,
  onAdvance,
  isClosing,
}) {
  const label = type === "where" ? "Where" : type === "when" ? "When" : "Who";
  const value =
    type === "where"
      ? searchFilters.destination || "Search destinations"
      : type === "when"
        ? searchFilters.when || "7 Jul - 18 Jul"
        : guestTotal(searchFilters)
          ? `${guestTotal(searchFilters)} guest${guestTotal(searchFilters) === 1 ? "" : "s"}`
          : "Add guests";

  return (
    <div
      className={`search-field-anchor ${activeSearch === type ? "is-active" : ""}`}
    >
      <button
        className="search-field"
        type="button"
        onClick={() => onSelectSearch(type)}
      >
        <span className="search-label">{label}</span>
        <span className="search-value">{value}</span>
      </button>
      {activeSearch === type && (
        <SearchDropdown
          type={type}
          searchFilters={searchFilters}
          onSearchChange={onSearchChange}
          onAdvance={onAdvance}
          isClosing={isClosing}
        />
      )}
    </div>
  );
}

function ExpandedSearchBar({
  activeSearch,
  onSelectSearch,
  searchFilters,
  onSearchChange,
  onAdvance,
  onSearch,
  isClosing,
}) {
  return (
    <div className="search-bar expanded-search" role="search">
      <SearchFieldAnchor
        type="where"
        activeSearch={activeSearch}
        onSelectSearch={onSelectSearch}
        searchFilters={searchFilters}
        onSearchChange={onSearchChange}
        onAdvance={onAdvance}
        isClosing={isClosing}
      />

      <SearchFieldAnchor
        type="when"
        activeSearch={activeSearch}
        onSelectSearch={onSelectSearch}
        searchFilters={searchFilters}
        onSearchChange={onSearchChange}
        onAdvance={onAdvance}
        isClosing={isClosing}
      />

      <SearchFieldAnchor
        type="who"
        activeSearch={activeSearch}
        onSelectSearch={onSelectSearch}
        searchFilters={searchFilters}
        onSearchChange={onSearchChange}
        onAdvance={onAdvance}
        isClosing={isClosing}
      />
      <SearchButton onSearch={onSearch} />
    </div>
  );
}

function CompactSearchBar({
  activeSearch,
  onSelectSearch,
  searchFilters,
  onSearch,
}) {
  return (
    <div className="search-bar compact-search" role="search">
      <button
        className={`compact-search-field compact-location ${activeSearch === "where" ? "is-active" : ""}`}
        type="button"
        onClick={() => onSelectSearch("where")}
      >
        <span className="compact-home-icon" aria-hidden="true">
          🏠
        </span>
        <span>{searchFilters.destination || "Anywhere"}</span>
      </button>
      <span className="search-divider" />
      <button
        className={`compact-search-field ${activeSearch === "when" ? "is-active" : ""}`}
        type="button"
        onClick={() => onSelectSearch("when")}
      >
        {searchFilters.when || "9 Jul - 17 Jul"}
      </button>
      <span className="search-divider" />
      <button
        className={`compact-search-field compact-guests ${activeSearch === "who" ? "is-active" : ""}`}
        type="button"
        onClick={() => onSelectSearch("who")}
      >
        {guestTotal(searchFilters)
          ? `${guestTotal(searchFilters)} guest${guestTotal(searchFilters) === 1 ? "" : "s"}`
          : "1 guest"}
      </button>
      <SearchButton onSearch={onSearch} />
    </div>
  );
}

function ModeNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesSelected, setIsServicesSelected] = useState(false);

  useEffect(() => {
    setIsServicesSelected(false);
  }, [location.pathname]);

  const handleModeClick = (index) => {
    if (index === 0) {
      setIsServicesSelected(false);
      if (location.pathname !== "/") {
        navigate("/");
      }
    } else if (index === 1) {
      setIsServicesSelected(false);
      if (location.pathname !== "/experiences") {
        navigate("/experiences");
      }
    } else if (index === 2) {
      setIsServicesSelected(true);
    }
  };

  return (
    <nav className="mode-navigation" aria-label="Explore Airbnb">
      {modes.map((mode, index) => {
        let isActive = false;
        if (isServicesSelected) {
          isActive = index === 2;
        } else {
          if (index === 0 && location.pathname === "/") isActive = true;
          if (index === 1 && location.pathname === "/experiences")
            isActive = true;
        }

        return (
          <button
            className={`mode-item ${isActive ? "is-active" : ""}`}
            type="button"
            key={mode.label}
            onClick={() => handleModeClick(index)}
          >
            <span className="mode-icon" aria-hidden="true">
              {mode.icon}
            </span>
            <span className="mode-label">{mode.label}</span>
            {mode.badge && <span className="new-badge">{mode.badge}</span>}
          </button>
        );
      })}
    </nav>
  );
}

const defaultSearchFilters = {
  destination: "",
  when: "",
  guests: { Adults: 0, Children: 0, Infants: 0, Pets: 0 },
};

export default function Header({
  searchFilters = defaultSearchFilters,
  onSearchChange = () => {},
  onApplySearch = () => {},
}) {
  const [isCompact, setIsCompact] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSearch, setActiveSearch] = useState(null);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const searchCloseTimer = useRef(null);

  const closeSearch = useCallback(() => {
    if (!activeSearch) return;
    setIsSearchClosing(true);
    clearTimeout(searchCloseTimer.current);
    searchCloseTimer.current = setTimeout(() => {
      setActiveSearch(null);
      setIsSearchClosing(false);
    }, 180);
  }, [activeSearch]);

  const selectSearch = useCallback(
    (type) => {
      if (type === null || type === activeSearch) {
        closeSearch();
        return;
      }
      clearTimeout(searchCloseTimer.current);
      setIsSearchClosing(false);
      setActiveSearch(type);
    },
    [activeSearch, closeSearch],
  );

  useEffect(() => {
    return () => clearTimeout(searchCloseTimer.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsCompact(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeMenu = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setIsMenuOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", closeMenu);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!activeSearch) return undefined;

    const closeOutsideSearch = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target))
        closeSearch();
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("mousedown", closeOutsideSearch);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOutsideSearch);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeSearch, closeSearch]);

  return (
    <>
      <header
        className={`site-header ${isCompact ? "is-compact" : "is-expanded"}`}
      >
        <div className="header-shell" ref={searchRef}>
          <div className="header-top">
            <Logo />
            <ModeNavigation />
            <CompactSearchBar
              searchFilters={searchFilters}
              activeSearch={activeSearch}
              onSelectSearch={selectSearch}
              onSearch={() => {
                onApplySearch();
                closeSearch();
              }}
            />
            <div className="header-menu-container" ref={menuRef}>
              <HeaderActions
                onBecomeHost={() => {
                  setIsMenuOpen(false);
                  setActiveSearch(null);
                  setIsLoginOpen(true);
                }}
                onChooseRegion={() => {
                  setIsMenuOpen(false);
                  setActiveSearch(null);
                  setIsRegionOpen(true);
                }}
                onToggleMenu={() => setIsMenuOpen((open) => !open)}
                isMenuOpen={isMenuOpen}
              />
              {isMenuOpen && (
                <MenuDropdown
                  onOpenLogin={() => setIsLoginOpen(true)}
                  onDismiss={() => setIsMenuOpen(false)}
                />
              )}
            </div>
          </div>
          <ExpandedSearchBar
            searchFilters={searchFilters}
            activeSearch={activeSearch}
            onSelectSearch={selectSearch}
            onSearchChange={onSearchChange}
            onAdvance={selectSearch}
            onSearch={() => {
              onApplySearch();
              closeSearch();
            }}
            isClosing={isSearchClosing}
          />
        </div>
      </header>
      <HostLoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <LanguageRegionModal
        isOpen={isRegionOpen}
        onClose={() => setIsRegionOpen(false)}
      />
    </>
  );
}
