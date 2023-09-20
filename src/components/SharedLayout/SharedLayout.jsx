import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";
import { Header } from "../../components/Header/Header";
import Loader from "../../components/Loader";

export default function SharedLayout() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
