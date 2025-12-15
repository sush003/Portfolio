import { useState, useEffect } from "react"

export function LocationTag({
  city = "Nashik",
  country = "IN",
  timezone = "IST",
  className = "text-white"
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-2.5 rounded-full border border-border/10 bg-secondary/5 px-2.5 py-1.5 transition-all duration-500 ease-out hover:border-foreground/20 hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.04)]">
      {/* Live pulse indicator */}
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-1.5 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
      </div>
      {/* Location text */}
      <div className="flex items-center gap-2 overflow-hidden">
        <span
          className={`text-[0.8125rem] font-medium transition-all duration-500 ${className}`}
          style={{
            // color: "white"
            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
            opacity: isHovered ? 0 : 1,
          }}>
          {city}, {country}
        </span>

        <span
          className={`absolute left-9 text-[0.8125rem] font-medium transition-all duration-500 ${className}`}
          style={{
            transform: isHovered ? "translateY(0)" : "translateY(100%)",
            opacity: isHovered ? 1 : 0,
          }}>
          {currentTime} {timezone}
        </span>
      </div>
      {/* Arrow indicator */}
      <svg
        className="h-2.5 w-2.5 text-muted-foreground transition-all duration-300"
        style={{
          transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  );
}
