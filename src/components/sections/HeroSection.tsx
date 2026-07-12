import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const heroVideos = [
  "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
  "https://videos.pexels.com/video-files/1739010/1739010-uhd_2560_1440_24fps.mp4",
  "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4",
];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoaded(false);
    video.src = heroVideos[currentVideoIndex];
    video.load();
    video.play().catch(() => { });
    setIsPlaying(true);
  }, [currentVideoIndex]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative w-full h-[85vh] md:rounded-2xl overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Fallback gradient while video loads */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#05073C] via-[#1a1d4e] to-[#2d1b4e] animate-pulse" />
        )}
      </div>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-[5]" />

      {/* Animated Grain Texture */}
      <div
        className="absolute inset-0 z-[6] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-white/25 hover:text-white active:scale-95 transition-all duration-200 border border-white/10"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <FaPause className="text-xs" /> : <FaPlay className="text-xs ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white/80 hover:bg-white/25 hover:text-white active:scale-95 transition-all duration-200 border border-white/10"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
        </button>

        {/* Video Progress Dots */}
        <div className="flex items-center gap-1.5 ml-2">
          {heroVideos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentVideoIndex(idx)}
              className={`rounded-full transition-all duration-300 ${idx === currentVideoIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
              aria-label={`Play video ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-medium tracking-wide uppercase animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EB662B] animate-pulse" />
          Discover the world
        </div>

        {/* Title */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl">
          Your world of
          <span className="block bg-gradient-to-r from-[#EB662B] via-[#f59e0b] to-[#EB662B] bg-clip-text text-transparent">
            joy & adventure
          </span>
        </h1>

        {/* Description */}
        <p className="text-white/75 mt-5 sm:mt-6 max-w-md sm:max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed font-light">
          From local escapes to far-flung adventures, discover journeys made for
          you
        </p>

        {/* CTA Pill */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-md px-5 sm:px-7 py-3.5 rounded-2xl sm:rounded-full shadow-2xl shadow-black/20 w-full max-w-md sm:max-w-fit border border-white/50">
          <span className="text-xs font-semibold text-[#EB662B] tracking-wide uppercase">
            ✦ Explore smarter
          </span>

          <span className="hidden sm:block h-4 w-px bg-gray-300" />

          <span className="text-sm text-gray-700 text-center sm:text-left font-medium">
            Discover destinations, activities & experiences
          </span>
        </div>

        {/* Stats */}
        <div className="mt-10 sm:mt-14 flex items-center gap-6 sm:gap-10">
          {[
            { value: "50K+", label: "Happy Travelers" },
            { value: "1,200+", label: "Destinations" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-white text-xl sm:text-2xl font-bold">{stat.value}</div>
              <div className="text-white/50 text-xs sm:text-sm font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
