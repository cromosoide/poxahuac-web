export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-pox-brown">
      <div className="text-center">
        <img src="/images/logo/poxahuac_isotipo_blanco.png" alt="" className="w-16 h-16 mb-4 animate-bounce mx-auto" />
        <img src="/images/logo/poxahuac_logo_blanco.png" alt="Poxahuac" className="h-8 mb-3 mx-auto" />
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
