"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { setField, searchTrips } from "@/store/features/search.slice";
import api from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";
import { FmdGood, Route, Search, WomanOutlined } from "@mui/icons-material";
import CustomDatePicker from "@/components/common/CustomDatePicker";
import CustomSelect from "@/components/common/CustomSelect";
export default function SearchPanel() {
  const dispatch = useDispatch();
  const s = useSelector((st) => st.search);
  const [cities, setCities] = useState([]);
  const [womenOnly, setWomenOnly] = useState(false);
  const [tripType, setTripType] = useState("single_trip");
  const today = new Date();
  const [journeyDate, setJourneyDate] = useState(null);
  const [fromCity, setFromCity] = useState(null);
  const [toCity, setToCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(ENDPOINTS.CITIES).then(({ data }) => setCities(data.items || []));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      searchTrips({
        from: s.from,
        to: s.to,
        date: s.departDate,
        returnDate: s.tripType === "roundtrip" ? s.returnDate : "",
        pax: s.pax,
        type: s.tripType,
        womenOnly,
      }),
    );
    window.location.hash = "destinations";
  };

  return (
    <section id="search" className="search-panel  container container-narrow ">
      <div className="searchPanelFront bg-white shadow ">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="btn-group outline-0 border-0 gap-2 rounded-4">
            <Button
              className={`btn border-0 rounded-4 px-4 ${tripType == "single_trip" ? "bg-primary text-light " : "text-dark bg-light"}`}
              onClick={() => setTripType("single_trip")}
              type="button"
            >
              Single Trip
            </Button>
            <Button
              className={`btn border-0 rounded-4 px-4 ${tripType == "round_trip" ? "bg-primary text-light " : "text-dark bg-light"}`}
              onClick={() => setTripType("round_trip")}
              type="button"
            >
              Round Trip
            </Button>
          </div>
          {tripType === "round_trip" && (
            <div className="women-only-section">
              <div
                className={`women-radio  rounded-pill  p-2 px-4 d-flex justify-content-center align-items-center  ${womenOnly ? "active" : "border"}`}
                onClick={() => setWomenOnly(!womenOnly)}
              >
                <div className="circle">{womenOnly && <div className="dot"></div>}</div>

                <WomanOutlined fontSize="small" className="ms-2\" />
                <span className="ms-2">Women Only</span>
              </div>
            </div>
          )}
        </div>
        <form
          className="row  gap-0 d-flex justify-content-center align-items-center"
          onSubmit={onSubmit}
        >
          <div className="col-12 col-md-3">
            <div className=" w-100 d-flex align-items-center gap-1 position-relative">
              <span className="icon">
                <FmdGood />
              </span>
              <div className="d-block w-100">
                <CustomSelect
                  options={cities}
                  value={fromCity}
                  onChange={(value) => setFromCity(value)}
                  placeholder={loading ? "Loading..." : "From"}
                  isSearchable={true}
                  isDisabled={loading || !!error}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className=" d-flex align-items-center gap-1 position-relative">
              <span className="icon">
                <Route />
              </span>
              <div className="d-block w-100">
                <CustomSelect
                  options={cities}
                  value={toCity}
                  onChange={(value) => setToCity(value)}
                  placeholder={loading ? "Loading..." : "To"}
                  isSearchable={true}
                  isDisabled={loading || !!error}
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="input-with-icon  journey_date d-flex align-items-center gap-2 position-relative">
              <span className="icon">
                <CalendarMonthIcon />
              </span>
              <CustomDatePicker
                selected={journeyDate}
                onChange={(d) => setJourneyDate(d)}
                placeholder="Jouney Date"
              />
            </div>
          </div>
          {tripType !== "round_trip" && (
            <div className="col-6 col-md-3 women-only-section">
              <div
                className={`women-radio  rounded-pill  p-2 px-4 d-flex justify-content-center align-items-center  ${womenOnly ? "active" : "border"}`}
                onClick={() => setWomenOnly(!womenOnly)}
              >
                <div className="circle">{womenOnly && <div className="dot"></div>}</div>

                <WomanOutlined fontSize="small" className="ms-2\" />
                <span className="ms-2">Women Only</span>
              </div>
            </div>
          )}

          {/* Show return date only for roundtrip */}
          {tripType === "round_trip" && (
            <div className="col-6 col-md-3">
              <div className="input-with-icon  journey_date d-flex align-items-center gap-2 position-relative">
                <span className="icon">
                  <CalendarMonthIcon />
                </span>
                <CustomDatePicker
                  selected={journeyDate}
                  onChange={(d) => setJourneyDate(d)}
                  placeholder="Jouney Date"
                />
              </div>
            </div>
          )}

          <div className="col-12 col-md-5 mt-3   mb-0 mx-auto d-grid my-auto">
            <Button
              variant="btn-gradient"
              className="search-btn  border shadow-none outline-0 d-flex justify-content-center align-items-center"
              type="submit"
            >
              <Search />
              Search
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
