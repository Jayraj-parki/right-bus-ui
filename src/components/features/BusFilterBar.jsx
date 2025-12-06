"use client";
import CustomSelect from "@/components/common/CustomSelect";
import Input from "@/components/common/Input";

export default function BusFilterBar({ filters, onFilter }) {
  return (
    <div className="filter-bar bg-white shadow-sm rounded-4 px-4 py-3 mb-4 d-flex gap-3 flex-wrap align-items-center">
      <CustomSelect
        options={filters.busTypes}
        value={filters.selectedBusType}
        onChange={(v) => onFilter("busType", v)}
        placeholder="Bus type"
        isSearchable={false}
      />
      <CustomSelect
        options={filters.timing}
        value={filters.selectedTime}
        onChange={(v) => onFilter("time", v)}
        placeholder="Timing"
      />
      <CustomSelect
        options={filters.stops}
        value={filters.selectedStop}
        onChange={(v) => onFilter("stop", v)}
        placeholder="Boarding"
      />
      <CustomSelect
        options={filters.drops}
        value={filters.selectedDrop}
        onChange={(v) => onFilter("drop", v)}
        placeholder="Dropping"
      />
      <Input
        type="number"
        placeholder="Max price"
        value={filters.maxPrice}
        onChange={(e) => onFilter("maxPrice", +e.target.value)}
        className="w-100"
      />
      <Input
        type="number"
        placeholder="Min rating"
        step="0.1"
        max={5}
        min={1}
        value={filters.minRating}
        onChange={(e) => onFilter("minRating", +e.target.value)}
        className="w-100"
      />
    </div>
  );
}
