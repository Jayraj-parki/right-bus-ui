"use client";

import OperatorCompare from "@/components/features/OperatorCompare";
import { useSelector } from "react-redux";

export default function OperatorComparePage() {
  const operators = useSelector(s => s.operator.operators);
  return (
    <>
      <div className="container py-4">
        <OperatorCompare operators={operators} />
      </div>
    </>
  );
}
