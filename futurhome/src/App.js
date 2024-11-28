import React, { useState, useEffect } from "react";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Modal from "./components/common/Modal";
import LoginForm from "./components/pages/LoginForm";
import SignupForm from "./components/pages/SignupForm";
import OnboardingModal from "./components/common/OnboardingModal";
import CreateAgency from "./components/common/CreateAgency";
import PublishAdModal from "./components/common/PublishAdModal";
import AdsFeed from "./components/pages/AdsFeed";
import SingleAd from "./components/pages/SingleAd";
import Footer from "./components/common/Footer";
import ChatButton from "./components/common/ChatButton";
import Chat from "./components/pages/Chat";
import Notifications from "./components/pages/Notifications";
import Bookmarks from "./components/pages/Bookmarks";
import AgencyProfile from "./components/pages/AgencyProfile";
import UserProfile from "./components/pages/UserProfile";
import Marketplace from "./components/pages/Marketplace";
import Professional from "./components/pages/ProfessionalProfile";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function ChatButtonWithLocation() {
  const location = useLocation();
  return location.pathname !== "/chat" && <ChatButton />;
}

function App() {
  const [modalContent, setModalContent] = useState(null);
  const [isCreateAgencyOpen, setIsCreateAgencyOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    setShowOnboarding(false);
  }, []);

  const openLogin = () => setModalContent("login");
  const openSignup = () => setModalContent("signup");
  const closeModal = () => {
    setModalContent(null);
  };
  const openCreateAgency = () => setIsCreateAgencyOpen(true);
  const closeCreateAgency = () => setIsCreateAgencyOpen(false);

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Navbar
            openLogin={openLogin}
            openSignup={openSignup}
          />
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/ads-feed"
                element={<AdsFeed />}
              />
              <Route
                path="/single-ad"
                element={<SingleAd />}
              />
              <Route
                path="/notifications"
                element={<Notifications selectedNotificationId={[1, 2]} />}
              />
              <Route
                path="/chat"
                element={<Chat selectedChatId={1} />}
              />
              <Route
                path="/bookmarks"
                element={<Bookmarks />}
              />
              <Route
                path="/agency-profile"
                element={<AgencyProfile />}
              />
              <Route
                path="/user-profile"
                element={<UserProfile />}
              />
              <Route
                path="/marketplace"
                element={<Marketplace />}
              />
              <Route
                path="/professional-profile"
                element={<Professional />}
              />
            </Routes>
          </div>
          <PublishAdModal />
          <Modal
            isOpen={modalContent !== null || showOnboarding}
            onClose={() => {
              setModalContent(null);
              setShowOnboarding(false);
            }}
          >
            {modalContent === "login" && (
              <LoginForm
                openSignup={openSignup}
                modalContent={modalContent}
              />
            )}
            {modalContent === "signup" && (
              <SignupForm
                openLogin={openLogin}
                modalContent={modalContent}
                closeModal={closeModal}
                setShowOnboarding={setShowOnboarding}
              />
            )}
            {showOnboarding && (
              <OnboardingModal
                closeModal={() => setShowOnboarding(false)}
                handleOnboardingComplete={(data) =>
                  console.log("Onboarding complete", data)
                }
              />
            )}
          </Modal>

          <CreateAgency
            isOpen={isCreateAgencyOpen}
            setIsOpen={setIsCreateAgencyOpen}
          />
          <ChatButtonWithLocation />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
