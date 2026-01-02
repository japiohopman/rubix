import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Academy from "./pages/Academy";
import Basisartsen from "./pages/Basisartsen";
import Bedrijfsartsen from "./pages/Bedrijfsartsen";
import Contact from "./pages/Contact";
import GezamenlijkeHome from "./pages/GezamenlijkeHome";
import Huisartsen from "./pages/Huisartsen";
import Paramedici from "./pages/Paramedici";
import OverDAIArtsen from "./pages/OverDAIArtsen";
import { useEffect, useState } from "react";
import LogoLoader from "./components/ui/LogoLoader";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={GezamenlijkeHome} />
      <Route path={"/over-dai-artsen"} component={OverDAIArtsen} />
      <Route path={"/huisartsen"} nest component={Huisartsen} />
      <Route path={"/bedrijfsartsen"} nest component={Bedrijfsartsen} />
      <Route path={"/basisartsen"} component={Basisartsen} />
      <Route path={"/paramedici"} component={Paramedici} />
      <Route path={"/academy-inc"} component={Academy} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds for a quick load

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      {loading && <LogoLoader />}
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
