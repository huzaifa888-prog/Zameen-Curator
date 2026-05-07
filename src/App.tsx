/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OnboardingPage from './components/OnboardingPage';
import HomeDiscoveryPage from './components/HomeDiscoveryPage';
import SearchFilterPage from './components/SearchFilterPage';
import PropertyDetailsPage from './components/PropertyDetailsPage';
import AgentInformationPage from './components/AgentInformationPage';
import SavedPage from './components/SavedPage';
import ChatPage from './components/ChatPage';
import { SavedProvider } from './lib/SavedContext';

export default function App() {
  return (
    <SavedProvider>
      <Router>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/home" element={<HomeDiscoveryPage />} />
          <Route path="/search" element={<SearchFilterPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/agent/:id" element={<AgentInformationPage />} />
          {/* Fallback to onboarding */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </SavedProvider>
  );
}

