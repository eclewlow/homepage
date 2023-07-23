import React from "react";
import ReactDOM from "react-dom";
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
  JuceIWishPage,
  Prophet6SoundLibrarianPage,
  HousePriceEstimatorPage,
  SynthesizerCatalogPage,
} from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/au-synthesizer" element={<AUSynthesizerPage />} />
      <Route path="/eurack-quantizer" element={<EurorackQuantizerPage />} />
      <Route path="/juce-iwish" element={<JuceIWishPage />} />
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
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
