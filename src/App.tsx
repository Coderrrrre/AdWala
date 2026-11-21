import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import {
  AboutPage,
  HistoryPage,
  CulturePage,
  DifferencePage,
  ClientsPage,
  TeamPage,
} from "./pages/AboutPages";
import { ServicesOverviewPage, ServiceDetailPage } from "./pages/ServicePages";
import { BranchPage } from "./pages/BranchPage";
import {
  ContactPage,
  GenerateRevenuePage,
  CareersPage,
  AdvertisingQuotePage,
} from "./pages/ContactPages";
import {
  ResourceCenterPage,
  DownloadsPage,
  BlogListPage,
  BlogDetailPage,
  PayOnlinePage,
} from "./pages/ResourcePages";
import { MockupPage } from "./pages/MockupPage";

export default function App() {
  return (
    <Routes>
      {/* Standalone studio view for Mockup tool (matching reference mockup/index.html) */}
      <Route
        path="/mockup"
        element={
          <Layout hideChrome>
            <MockupPage />
          </Layout>
        }
      />

      {/* Standard site routes with sticky editorial header, left social rail & footer */}
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* About Us (6 pages) */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/our-history" element={<HistoryPage />} />
              <Route path="/culture-and-work-ethics" element={<CulturePage />} />
              <Route path="/what-makes-us-different" element={<DifferencePage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/team" element={<TeamPage />} />

              {/* Services & Assets (8 pages) */}
              <Route path="/services" element={<ServicesOverviewPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />

              {/* Branches (3 pages) */}
              <Route path="/branches/:city" element={<BranchPage />} />

              {/* Contact & Lead Forms (4 pages) */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/generate-revenue" element={<GenerateRevenuePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/advertising-quote" element={<AdvertisingQuotePage />} />

              {/* Resources, Downloads, Blog & Pay Online (5 pages) */}
              <Route path="/resource-center" element={<ResourceCenterPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/pay-online" element={<PayOnlinePage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}
