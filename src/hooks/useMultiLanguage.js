import { useSelector, useDispatch } from "react-redux";
import { setLang } from "@/store/features/profile.slice";
import { LANGUAGES } from "@/constants/languages";

export default function useMultiLanguage() {
  const dispatch = useDispatch();
  const lang = useSelector(s => s.profile.lang);
  const setLanguage = (code) => dispatch(setLang(code));
  return {
    lang,
    setLanguage,
    languages: LANGUAGES
  };
}
