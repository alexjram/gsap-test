import { Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import {
  AnimatedFeatureCardsView,
  MicroInteractionButtonView,
  ImageGalleryRevealView,
  StorytellingHeroView,
  AnimatedExplainerView,
  CharacterWalkCycleView,
  HorizontalScrollView,
  ParallaxLandingView,
  PinnedSidebarView,
  TextRevealView,
  SvgPathDrawingView,
  DraggableDashboardView,
  MorphingIconView,
  ParticleSystemView,
  DataVisualizationView,
  SpriteAnimationView,
  DrawingPlaybackView,
  PhysicsAnimationView,
  GenerativeArtView,
  CanvasTextScrambleView,
} from "@/views";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Routes>
          {/* Redirect root to first project */}
          <Route path="/" element={<Navigate to="/level1/feature-cards" replace />} />

          {/* Level 1 - Foundations */}
          <Route path="/level1/feature-cards" element={<AnimatedFeatureCardsView />} />
          <Route path="/level1/micro-button" element={<MicroInteractionButtonView />} />
          <Route path="/level1/gallery-reveal" element={<ImageGalleryRevealView />} />

          {/* Level 2 - Timeline */}
          <Route path="/level2/hero-section" element={<StorytellingHeroView />} />
          <Route path="/level2/explainer" element={<AnimatedExplainerView />} />
          <Route path="/level2/walk-cycle" element={<CharacterWalkCycleView />} />

          {/* Level 3 - Scroll */}
          <Route path="/level3/horizontal-scroll" element={<HorizontalScrollView />} />
          <Route path="/level3/parallax" element={<ParallaxLandingView />} />
          <Route path="/level3/pinned-sidebar" element={<PinnedSidebarView />} />

          {/* Level 4 - Advanced */}
          <Route path="/level4/text-reveal" element={<TextRevealView />} />
          <Route path="/level4/svg-drawing" element={<SvgPathDrawingView />} />
          <Route path="/level4/draggable" element={<DraggableDashboardView />} />
          <Route path="/level4/morph-icon" element={<MorphingIconView />} />

          {/* Level 5 - Canvas & GSAP */}
          <Route path="/level5/particles" element={<ParticleSystemView />} />
          <Route path="/level5/data-viz" element={<DataVisualizationView />} />
          <Route path="/level5/sprite" element={<SpriteAnimationView />} />
          <Route path="/level5/drawing" element={<DrawingPlaybackView />} />
          <Route path="/level5/physics" element={<PhysicsAnimationView />} />
          <Route path="/level5/generative" element={<GenerativeArtView />} />
          <Route path="/level5/text-scramble" element={<CanvasTextScrambleView />} />
        </Routes>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default App;