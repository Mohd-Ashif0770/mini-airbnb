import {
  CalendarDays,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { useState } from "react";

const destinations = [
  ["Nearby", "Find what's around you", "blue"],
  ["North Goa, Goa", "Popular beach destination", "coral"],
  ["Mumbai, Maharashtra", "For sights like Gateway of India", "green"],
  ["Udaipur, Rajasthan", "For its stunning architecture", "blue"],
  ["Lonavala, Maharashtra", "For nature lovers", "pink"],
  ["South Goa, Goa", "Popular beach destination", "green"],
];

const months = [
  { name: "July 2026", start: 1, days: 31 },
  { name: "August 2026", start: 6, days: 31 },
];

const flexibleMonths = [
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function WherePanel({ onSearchChange, onAdvance, isClosing }) {
  return (
    <section
      className={`search-dropdown where-dropdown ${isClosing ? "is-closing" : ""}`}
      aria-label="Suggested destinations"
    >
      <h3>Suggested destinations</h3>
      <div className="destination-list">
        {destinations.map(([title, subtitle, color]) => (
          <button
            className="destination-option"
            type="button"
            key={title}
            onClick={() => {
              onSearchChange({ destination: title });
              onAdvance("when");
            }}
          >
            <span className={`destination-icon ${color}`} aria-hidden="true">
              {title === "Nearby" ? <MapPin size={17} /> : "⌂"}
            </span>
            <span>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function MonthCalendar({
  month,
  selectedDays,
  rangeStart,
  rangeEnd,
  onSelect,
}) {
  const days = Array.from({ length: month.start + month.days }, (_, index) =>
    index < month.start ? null : index - month.start + 1,
  );
  return (
    <div className="month-calendar">
      <h4>{month.name}</h4>
      <div className="weekday-row">
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <button
            className={`${selectedDays.includes(day) ? "is-selected" : ""} ${month.name === rangeStart?.month && day >= rangeStart.day && day <= rangeEnd?.day && month.name === rangeEnd?.month ? "in-range" : ""}`}
            type="button"
            key={`${month.name}-${index}`}
            onClick={() => day && onSelect(month.name, day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

function DatesPanel({ mode, setMode, onSearchChange, onAdvance, isClosing }) {
  const [selectedDates, setSelectedDates] = useState({
    "July 2026": [7, 18],
    "August 2026": [],
  });
  const [rangeStart, setRangeStart] = useState({ month: "July 2026", day: 7 });
  const [rangeEnd, setRangeEnd] = useState({ month: "July 2026", day: 18 });
  const [isSelectingRange, setIsSelectingRange] = useState(false);
  const selectDate = (month, day) => {
    if (!isSelectingRange) {
      setRangeStart({ month, day });
      setRangeEnd(null);
      setIsSelectingRange(true);
      setSelectedDates({ [month]: [day] });
      onSearchChange({ when: `${day} ${month}` });
      return;
    }

    const start =
      rangeStart.month === month
        ? Math.min(rangeStart.day, day)
        : rangeStart.day;
    const end =
      rangeStart.month === month ? Math.max(rangeStart.day, day) : day;
    setSelectedDates({ [rangeStart.month]: [rangeStart.day], [month]: [day] });
    setRangeEnd({ month, day: end });
    onSearchChange({ when: `${start} ${rangeStart.month} - ${end} ${month}` });
    onAdvance("who");
    setIsSelectingRange(false);
  };
  return (
    <section
      className={`search-dropdown when-dropdown ${isClosing ? "is-closing" : ""}`}
      aria-label="Choose dates"
    >
      <div className="date-mode-toggle">
        <button
          className={mode === "dates" ? "is-active" : ""}
          type="button"
          onClick={() => setMode("dates")}
        >
          Dates
        </button>
        <button
          className={mode === "flexible" ? "is-active" : ""}
          type="button"
          onClick={() => setMode("flexible")}
        >
          Flexible
        </button>
      </div>
      {mode === "dates" ? (
        <div className="calendar-panels">
          {months.map((month) => (
            <MonthCalendar
              key={month.name}
              month={month}
              selectedDays={selectedDates[month.name] || []}
              rangeStart={rangeStart}
              rangeEnd={rangeEnd}
              onSelect={selectDate}
            />
          ))}
          <button
            className="calendar-next"
            type="button"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      ) : (
        <FlexibleDates onSearchChange={onSearchChange} onAdvance={onAdvance} />
      )}
      {mode === "dates" && (
        <div className="date-presets">
          <button type="button">Exact dates</button>
          <button type="button">± 1 day</button>
          <button type="button">± 2 days</button>
          <button type="button">± 3 days</button>
          <button type="button">± 7 days</button>
          <button type="button">± 14 days</button>
        </div>
      )}
    </section>
  );
}

function FlexibleDates({ onSearchChange, onAdvance }) {
  const [duration, setDuration] = useState("Weekend");
  return (
    <div className="flexible-panel">
      <h3>How long would you like to stay?</h3>
      <div className="flexible-options">
        {["Weekend", "Week", "Month"].map((option) => (
          <button
            className={duration === option ? "is-active" : ""}
            type="button"
            key={option}
            onClick={() => {
              setDuration(option);
              onSearchChange({ when: `${option} in July 2026` });
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <h3>When do you want to go?</h3>
      <div className="flexible-months">
        {flexibleMonths.map((month) => (
          <button
            type="button"
            key={month}
            onClick={() => {
              onSearchChange({ when: `${duration} in ${month} 2026` });
              onAdvance("who");
            }}
          >
            <CalendarDays size={17} />
            <strong>{month}</strong>
            <small>2026</small>
          </button>
        ))}
      </div>
    </div>
  );
}

function WhoPanel({ searchFilters, onSearchChange, isClosing }) {
  const guests = searchFilters.guests;
  const rows = [
    ["Adults", "Ages 13 or above"],
    ["Children", "Ages 2–12"],
    ["Infants", "Under 2"],
    ["Pets", "Bringing a service animal?"],
  ];
  const update = (name, change) =>
    onSearchChange({
      guests: { ...guests, [name]: Math.max(0, guests[name] + change) },
    });
  return (
    <section
      className={`search-dropdown who-dropdown ${isClosing ? "is-closing" : ""}`}
      aria-label="Choose guests"
    >
      {rows.map(([name, description]) => (
        <div className="guest-row" key={name}>
          <span>
            <strong>{name}</strong>
            <small>{description}</small>
          </span>
          <div>
            <button
              type="button"
              aria-label={`Remove ${name}`}
              disabled={!guests[name]}
              onClick={() => update(name, -1)}
            >
              <Minus size={13} />
            </button>
            <b>{guests[name]}</b>
            <button
              type="button"
              aria-label={`Add ${name}`}
              onClick={() => update(name, 1)}
            >
              <Plus size={13} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default function SearchDropdown({
  type,
  searchFilters,
  onSearchChange,
  onAdvance,
  isClosing,
}) {
  const [dateMode, setDateMode] = useState("dates");
  if (type === "where")
    return (
      <WherePanel
        onSearchChange={onSearchChange}
        onAdvance={onAdvance}
        isClosing={isClosing}
      />
    );
  if (type === "when")
    return (
      <DatesPanel
        mode={dateMode}
        setMode={setDateMode}
        onSearchChange={onSearchChange}
        onAdvance={onAdvance}
        isClosing={isClosing}
      />
    );
  return (
    <WhoPanel
      searchFilters={searchFilters}
      onSearchChange={onSearchChange}
      isClosing={isClosing}
    />
  );
}
