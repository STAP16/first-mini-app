import { useEffect, useState } from "react";
import { Navbar } from "./components/NavBar/NavBar";
import { Loader } from "./components/Loader/Loader";
import Profile from "./pages/Profile";

function App() {
  const [initData, setInitData] = useState(null);
  const [theme, setTheme] = useState(null);
  const [page, setPage] = useState("profile");

  useEffect(() => {
    const tg = window.Telegram.WebApp;

    tg.ready(); // сообщаем Telegram, что приложение загружено

    setInitData(tg.initDataUnsafe);
    setTheme(tg.colorScheme); // данные юзера
  }, []);

  const user = initData?.user;

  if (!user) return <Loader />;

  return (
    <div className="page">
      {page == "profile" && <Profile user={user} />}
      <Navbar />
    </div>
  );
}

export default App;
