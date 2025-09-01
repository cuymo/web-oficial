import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, PricingPage, NotFound404, FaqsPage } from "@/pages";
import { Header, Footer, PreloadSpinner } from "@/components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula tiempo de carga de 1 segundo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600); // 1000ms = 1s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App relative">
      {/* Preloader */}
      {isLoading && (
        <PreloadSpinner />
      )}

      {/* Contenido de la página */}
      <div className={`page-wrapper relative z-[0] ${isLoading ? "hidden" : ""}`}>
        <Header />
        <main className="main-wrapper relative overflow-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/precios" element={<PricingPage />} />
            <Route path="/preguntas" element={<FaqsPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
