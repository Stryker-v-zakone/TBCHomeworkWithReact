import { DynamicIcon } from './DynamicIcon';

export const SearchBar = ({
  value,
  onChange,
  onClear,
  placeholder = 'ძებნა სახელით, ელ-ფოსტით, კომპანიით...',
  count,
  className = ''
}) => {
  return (
    <div className={`search-bar-wrapper ${className}`.trim()}>
      <div className="search-input-box">
        <span className="search-icon">
          <DynamicIcon name="Search" size={18} />
        </span>
        <input
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
        />
        {value && (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onClear}
            title="გასუფთავება"
            aria-label="Clear search"
          >
            <DynamicIcon name="X" size={16} />
          </button>
        )}
      </div>

      {typeof count === 'number' && (
        <div className="search-count-badge">
          ნაპოვნია: <strong>{count}</strong>
        </div>
      )}
    </div>
  );
};
