import { FEATURES_ENABLED } from "@/constants/features";
export default function useFeature(feature) {
  return !!FEATURES_ENABLED[feature];
}
