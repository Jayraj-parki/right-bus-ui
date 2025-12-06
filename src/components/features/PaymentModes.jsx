"use client";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import UpiIcon from "@mui/icons-material/AccountBalance";
import PaymentIcon from "@mui/icons-material/Payments";

export default function PaymentModes({ onSelect, selected }) {
  const modes = [
    { key: "upi", label: "UPI", icon: <UpiIcon /> },
    { key: "card", label: "Card", icon: <CreditCardIcon /> },
    { key: "wallet", label: "Wallet", icon: <AccountBalanceWalletIcon /> },
    { key: "netbanking", label: "Netbanking", icon: <PaymentIcon /> },
  ];
  return (
    <div className="d-flex gap-3 mt-3 flex-wrap">
      {modes.map((m) => (
        <button
          key={m.key}
          className={`btn border rounded-3 d-flex align-items-center gap-2 ${selected === m.key ? "btn-primary text-light" : "btn-light"}`}
          onClick={() => onSelect(m.key)}
          type="button"
        >
          {m.icon} {m.label}
        </button>
      ))}
    </div>
  );
}
