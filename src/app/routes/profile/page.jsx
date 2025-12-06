"use client";
import LanguageSwitch from "@/components/features/LanguageSwitch";
import { useSelector, useDispatch } from "react-redux";
import { setLang } from "@/store/features/profile.slice";
import { LANGUAGES } from "@/constants/languages";

export default function ProfilePage() {
  const lang = useSelector(s => s.profile.lang);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container py-4">
        <h2>Profile</h2>
        <LanguageSwitch
          languages={LANGUAGES}
          selected={lang}
          onChange={l => dispatch(setLang(l))}
        />
      </div>
    </>
  );
}
