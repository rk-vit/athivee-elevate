import { useEffect, useRef } from "react"

export default function HeroBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let time = 0

    const animate = () => {
      // soft fade for motion trails
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2.5

      // concentric animated rings
      for (let i = 0; i < 4; i++) {
        const radius =
          80 +
          i * 110 +
          Math.sin(time * 0.0003 + i * Math.PI) * 40

        const opacity = 0.12 * (1 - i * 0.22)

        ctx.strokeStyle = `rgba(30, 64, 175, ${opacity})`
        ctx.lineWidth = 2.5
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      // floating particles
      for (let i = 0; i < 6; i++) {
        const x = centerX + Math.cos(time * 0.0002 + i) * 320
        const y = centerY + Math.sin(time * 0.0003 + i) * 320
        const size = 2 + Math.sin(time * 0.0005 + i) * 1.5

        ctx.fillStyle = `rgba(30, 64, 175, ${
          0.25 + Math.sin(time * 0.001 + i) * 0.15
        })`

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      time++
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />

      {/* Ambient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-red-300 rounded-full blur-3xl opacity-20" />
    </>
  )
}
