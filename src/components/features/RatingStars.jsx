import StarIcon from "@mui/icons-material/Star";
export default function RatingStars({ rating = 0 }) {
  const fullStars = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span>
      {[...Array(fullStars)].map((_, i) => <StarIcon key={i} fontSize="small" color="warning"/> )}
      {half ? <StarIcon fontSize="small" color="disabled"/> : null}
      {[...Array(5 - fullStars - (half ? 1 : 0))].map((_, i) => <StarIcon key={"empty"+i} fontSize="small" color="disabled"/>)}
    </span>
  );
}
