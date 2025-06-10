"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface GridOverlayProps {
  spacing?: number
  lineColor?: string
  opacity?: number
  lineWidth?: number
  zIndex?: number
}

const GridOverlay: React.FC<GridOverlayProps> = ({
  spacing = 32,
  lineColor = "#888",
  opacity = 0.18,
  lineWidth = 1,
  zIndex = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.globalAlpha = opacity
      ctx.strokeStyle = lineColor
      ctx.lineWidth = lineWidth
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += spacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += spacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
      ctx.restore()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
    // eslint-disable-next-line
  }, [spacing, lineColor, opacity, lineWidth])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ display: "block", zIndex }}
    />
  )
}

export default GridOverlay
