export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-pox-brown">
      <div className="text-center">
        <div className="text-4xl mb-4 animate-bounce">🌽</div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-pox-cream tracking-tight mb-3">
          P<span className="text-pox-gold">o</span>xahuac
        </h2>
        <div className="w-48 h-1 bg-pox-dark-surface rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-pox-gold rounded-full"
            style={{
              animation: "loading-bar 1.5s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes loading-bar {
            0% { width: 0%; margin-left: 0; }
            50% { width: 70%; margin-left: 15%; }
            100% { width: 0%; margin-left: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
}
