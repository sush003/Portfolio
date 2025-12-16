import { useEffect, useRef, useState, useCallback } from "react"

const COLORS = ["#ffffff", "#e0e0e0", "#c0c0c0", "#909090", "#707070"]
const PIXEL_SIZE = 12
const TRAIL_LENGTH = 40
const FADE_SPEED = 0.04

export function PixelCursorTrail() {
  const containerRef = useRef(null)
  const [pixels, setPixels] = useState([])
  const pixelIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef()

  const createPixel = useCallback((x, y) => {
    return {
      id: pixelIdRef.current++,
      x,
      y,
      opacity: 1,
      age: 0,
    }
  }, [])

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const dx = x - lastPositionRef.current.x
    const dy = y - lastPositionRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > PIXEL_SIZE) {
      const newPixel = createPixel(x, y)
      setPixels((prev) => [...prev.slice(-TRAIL_LENGTH), newPixel])
      lastPositionRef.current = { x, y }
    }
  }, [createPixel])

  useEffect(() => {
    const animate = () => {
      setPixels((prev) =>
        prev
          .map((pixel) => ({
            ...pixel,
            opacity: pixel.opacity - FADE_SPEED,
            age: pixel.age + 1,
          }))
          .filter((pixel) => pixel.opacity > 0))
      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    };
  }, [handleMouseMove])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] w-screen h-screen bg-transparent overflow-hidden cursor-none select-none pointer-events-none">
      {pixels.map((pixel, index) => {
        // Calculate size based on age - older pixels are smaller
        const sizeMultiplier = Math.max(0.3, 1 - pixel.age / 100)
        const currentSize = PIXEL_SIZE * sizeMultiplier

        return (
          <div
            key={pixel.id}
            className="absolute pointer-events-none bg-white"
            style={{
              left: pixel.x - currentSize / 2,
              top: pixel.y - currentSize / 2,
              width: currentSize,
              height: currentSize,
              opacity: pixel.opacity,
              transition: "width 0.1s ease-out, height 0.1s ease-out",
            }} />
        );
      })}
    </div>
  );
}