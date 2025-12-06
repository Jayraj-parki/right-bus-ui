import { FEATURES_ENABLED } from "@/constants/features";
export default function useFeatureToggle(feature) {
  return !!FEATURES_ENABLED[feature];
}
