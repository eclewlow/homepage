import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Homepage,
  BlogPage,
  AUSynthesizerPage,
  EurorackQuantizerPage,
  EurorackMosfetPage,
  JuceIWishPage,
  Prophet6SoundLibrarianPage,
  HousePriceEstimatorPage,
  SynthesizerCatalogPage,
  InverseFFTPage,
  WaveEditorPage,
} from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/au-synthesizer" element={<AUSynthesizerPage />} />
      <Route path="/eurorack-quantizer" element={<EurorackQuantizerPage />} />
      <Route path="/eurorack-mosfet" element={<EurorackMosfetPage />} />
      <Route path="/juce-iwish" element={<JuceIWishPage />} />
      <Route path="/inverse-fft" element={<InverseFFTPage />} />
      <Route path="/wave-editor" element={<WaveEditorPage />} />
      <Route
        path="/prophet-6-sound-librarian"
        element={<Prophet6SoundLibrarianPage />}
      />
      <Route
        path="/house-price-estimator"
        element={<HousePriceEstimatorPage />}
      />
      <Route path="/synthesizer-catalog" element={<SynthesizerCatalogPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
