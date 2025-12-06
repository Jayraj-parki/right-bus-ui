/**
 * @typedef {Object} SearchState
 * @property {"passengers"|"parcels"} tab
 * @property {"oneway"|"roundtrip"} tripType
 * @property {string} from
 * @property {string} to
 * @property {string} departDate
 * @property {string} returnDate
 * @property {number} pax
 * @property {Array<any>} results
 */

export const SearchTab = Object.freeze({
    PASSENGERS: "passengers",
    PARCELS: "parcels"
});

export const SearchTripType = Object.freeze({
    ONEWAY: "oneway",
    ROUNDTRIP: "roundtrip"
});

/** @type {SearchState} */
export const defaultSearchState = {
    tab: SearchTab.PASSENGERS,
    tripType: SearchTripType.ONEWAY,
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    pax: 1,
    results: []
};
