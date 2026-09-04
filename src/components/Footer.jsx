import tmdbLogo from "../assets/TMDB-logo.svg";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <img
            src={tmdbLogo}
            alt="TMDB logo"
            className="h-4 w-auto"
          />

          <p className="text-sm text-muted">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;