"use client";
export default function LanguageSwitch({ languages = [], selected, onChange }) {
  return (
    <div className="lang-switch my-3">
      <label className="me-2">Language:</label>
      <select
        value={selected}
        onChange={e => onChange(e.target.value)}
        className="form-select d-inline-block w-auto"
      >
        {languages.map(lang => (
          <option value={lang.code} key={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
