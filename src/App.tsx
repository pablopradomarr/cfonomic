import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import CasosDeExito from "./pages/CasosDeExito";
import { CasoTuricleta, CasoImpasto } from "./pages/CasosDetalle";
import Recursos from "./pages/Recursos";
import { ValoracionPyme, CalcularCAC, CajaNegogio, RentabilidadEmpresa, UnitEconomics, CuantoDineroGano, ComoCalcularEBITDA } from "./pages/RecursoPages";
import DiagnosticoFinanciero from "./pages/DiagnosticoFinanciero";
import Glosario from "./pages/Glosario";
import Equipo from "./pages/Equipo";
import Contacto from "./pages/Contacto";
import CiudadPage from "./pages/CiudadPage";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import AvisoLegal from "./pages/AvisoLegal";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/casos-de-exito" element={<CasosDeExito />} />
            <Route path="/casos-de-exito/turicleta" element={<CasoTuricleta />} />
            <Route path="/casos-de-exito/impasto" element={<CasoImpasto />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/cuanto-vale-mi-pyme" element={<ValoracionPyme />} />
            <Route path="/calcular-cac-cuanto-me-cuesta-conseguir-un-cliente" element={<CalcularCAC />} />
            <Route path="/cuanta-caja-genera-o-pierde-mi-negocio" element={<CajaNegogio />} />
            <Route path="/calcular-rentabilidad-mi-empresa" element={<RentabilidadEmpresa />} />
            <Route path="/unit-economics" element={<UnitEconomics />} />
            <Route path="/cuanto-dinero-gano-con-mi-empresa" element={<CuantoDineroGano />} />
            <Route path="/como-calcular-ebitda-pyme" element={<ComoCalcularEBITDA />} />
            <Route path="/diagnostico-financiero" element={<DiagnosticoFinanciero />} />
            <Route path="/glosario" element={<Glosario />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/director-financiero-externo-madrid" element={<CiudadPage city="Madrid" />} />
            <Route path="/director-financiero-externo-barcelona" element={<CiudadPage city="Barcelona" />} />
            <Route path="/director-financiero-externo-valencia" element={<CiudadPage city="Valencia" />} />
            <Route path="/director-financiero-externo-sevilla" element={<CiudadPage city="Sevilla" />} />
            <Route path="/director-financiero-externo-malaga" element={<CiudadPage city="Málaga" />} />
            <Route path="/director-financiero-externo-bilbao" element={<CiudadPage city="Bilbao" />} />
            <Route path="/director-financiero-externo-zaragoza" element={<CiudadPage city="Zaragoza" />} />
            <Route path="/director-financiero-externo-valladolid" element={<CiudadPage city="Valladolid" />} />
            <Route path="/director-financiero-externo-alicante" element={<CiudadPage city="Alicante" />} />
            <Route path="/director-financiero-externo-murcia" element={<CiudadPage city="Murcia" />} />
            <Route path="/director-financiero-externo-oviedo" element={<CiudadPage city="Oviedo" />} />
            <Route path="/director-financiero-externo-jerez-de-la-frontera" element={<CiudadPage city="Jerez de la Frontera" />} />
            <Route path="/director-financiero-externo-cadiz" element={<CiudadPage city="Cádiz" />} />
            <Route path="/director-financiero-externo-leon" element={<CiudadPage city="León" />} />
            <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
