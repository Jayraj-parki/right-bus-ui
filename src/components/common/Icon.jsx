import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const map = {
  bus: DirectionsBusFilledIcon,
  search: SearchIcon,
  place: PlaceIcon,
  calendar: CalendarMonthIcon,
  people: PeopleAltIcon
};

export default function Icon({ name, ...rest }) {
  const Cmp = map[name] || SearchIcon;
  return <Cmp {...rest} />;
}
