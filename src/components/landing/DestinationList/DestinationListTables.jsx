"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular } from "@/store/features/landing.slice";

function Column({ title, items }) {
  return (
    <div className="col-12 col-lg-4 mb-4">
      <div className="col-title">{title}</div>
      {items.map((it) => (
        <div key={`${title}-${it.id}`} className="list-item">
          <span>{`Bus Tickets ${it.from} - ${it.to}`}</span>
          <span>€{it.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default function DestinationListTables() {
  const dispatch = useDispatch();
  let popular = useSelector((s) => s.landing.popular);

  if (!popular?.length) {
    popular = [
      { id: 1, from: "Chisinau", to: "Bucharest", price: 40 },
      { id: 2, from: "Chisinau", to: "Iasi", price: 22 },
      { id: 3, from: "Chisinau", to: "Cluj-Napoca", price: 48 },
      { id: 4, from: "Chisinau", to: "Timisoara", price: 52 },
      { id: 5, from: "Chisinau", to: "Sibiu", price: 35 },
      { id: 6, from: "Chisinau", to: "Brasov", price: 31 },
      { id: 7, from: "Chisinau", to: "Galati", price: 20 },
      { id: 8, from: "Chisinau", to: "Pitesti", price: 28 },
      { id: 9, from: "Chisinau", to: "Constanta", price: 55 },
    ];
  }

  useEffect(() => {
    if (!popular?.length) dispatch(fetchPopular());
  }, [dispatch, popular]);

  const a = popular.slice(0, 6);
  const b = [...popular].reverse().slice(0, 6);
  const c = popular.slice(0, 6).map((x, i) => ({ ...x, price: Math.max(20, x.price - 5 - i) }));

  return (
    <section className="dest-list py-5">
      <div className="container container-narrow">
        <h3 className="mb-4">Destination list</h3>
        <div className="row">
          <Column title="Departure from Moldova" items={a} />
          <Column title="Depart home" items={b} />
          <Column title="Round-trip offers" items={c} />
        </div>
      </div>
    </section>
  );
}
