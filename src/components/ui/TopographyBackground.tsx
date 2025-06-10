"use client"

import type React from "react"
import { useRef, useEffect, useCallback } from "react"
import { useTheme } from "@/providers/theme-provider"
import GridOverlay from "./GridOverlay"

// Simple pseudo-noise function for demonstration (replace with real noise for best results)
function pseudoNoise(x: number, y: number, t: number) {
  return (
    Math.sin(x * 0.07 + t * 0.0008) +
    Math.cos(y * 0.07 - t * 0.0006) +
    Math.sin((x + y) * 0.03 + t * 0.001)
  ) / 3
}

interface TopographyBackgroundProps {
  speed?: number
  lineColor?: string
  opacity?: number
  lineWidth?: number
  spacing?: number
  curveAmplitude?: number
  curveFrequency?: number
  contourLevels?: number
  zoom?: number
}

const TopographyBackground: React.FC<TopographyBackgroundProps> = ({
  speed = 0.18,
  lineColor,
  opacity,
  lineWidth = 1.5,
  spacing = 18,
  curveAmplitude = 12,
  curveFrequency = 0.011,
  contourLevels = 14,
  zoom = 0.7,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const lastTimestamp = useRef<number>(0)
  const timeRef = useRef(0)
  const { theme } = useTheme()

  // Theme-aware defaults
  const resolvedLineColor = lineColor ?? (theme === "dark" ? "#fff" : "#222")
  const resolvedOpacity = opacity ?? (theme === "dark" ? 0.09 : 0.14)

  // Marching Squares helper for smooth curves
  const getContourPoints = (
    noiseGrid: number[][],
    threshold: number,
    gridSize: number
  ): [number, number][][] => {
    const contours: [number, number][][] = []
    const rows = noiseGrid.length
    const cols = noiseGrid[0].length
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const v0 = noiseGrid[y][x]
        const v1 = noiseGrid[y][x + 1]
        const v2 = noiseGrid[y + 1][x + 1]
        const v3 = noiseGrid[y + 1][x]
        const fx = (ix: number, iy: number, vA: number, vB: number) => {
          const t = (threshold - vA) / (vB - vA)
          return [
            (ix + t) * gridSize,
            iy * gridSize,
          ] as [number, number]
        }
        const points: [number, number][] = []
        if ((v0 < threshold) !== (v1 < threshold)) {
          points.push(fx(x, y, v0, v1))
        }
        if ((v1 < threshold) !== (v2 < threshold)) {
          points.push(fx(x + 1, y, v1, v2))
        }
        if ((v2 < threshold) !== (v3 < threshold)) {
          points.push(fx(x + 1, y + 1, v2, v3))
        }
        if ((v3 < threshold) !== (v0 < threshold)) {
          points.push(fx(x, y + 1, v3, v0))
        }
        // Only add if it's a valid segment (2 points or more)
        if (points.length > 1) {
          contours.push(points)
        }
      }
    }
    return contours
  }

  // Draw organic, smooth contour lines using noise and quadratic curves
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { width, height } = canvas
    ctx.clearRect(0, 0, width, height)
    ctx.save()
    ctx.globalAlpha = resolvedOpacity
    ctx.strokeStyle = resolvedLineColor
    ctx.lineWidth = lineWidth
    ctx.imageSmoothingEnabled = true

    // Grid and noise setup
    const gridSize = spacing
    const levels = contourLevels
    const scale = zoom
    const noiseGrid: number[][] = []
    for (let y = 0; y <= height; y += gridSize) {
      const row: number[] = []
      for (let x = 0; x <= width; x += gridSize) {
        // Animate noise with time, apply zoom scaling and amplitude
        const n =
          pseudoNoise(
            (x * curveFrequency) / scale,
            (y * curveFrequency) / scale,
            timeRef.current * speed
          ) * (curveAmplitude / 12)
        row.push(n)
      }
      noiseGrid.push(row)
    }

    // Draw each contour level
    for (let l = 0; l < levels; l++) {
      const threshold = -1 + (2 * l) / (levels - 1)
      const contours = getContourPoints(noiseGrid, threshold, gridSize)
      ctx.beginPath()
      for (const points of contours) {
        // Smooth curve: quadraticCurveTo between points
        if (points.length > 1) {
          ctx.moveTo(points[0][0], points[0][1])
          for (let i = 1; i < points.length - 1; i++) {
            const xc = (points[i][0] + points[i + 1][0]) / 2
            const yc = (points[i][1] + points[i + 1][1]) / 2
            ctx.quadraticCurveTo(points[i][0], points[i][1], xc, yc)
          }
          ctx.lineTo(points[points.length - 1][0], points[points.length - 1][1])
        }
      }
      ctx.stroke()
    }
    ctx.restore()
  }, [
    resolvedLineColor,
    resolvedOpacity,
    lineWidth,
    spacing,
    curveAmplitude,
    curveFrequency,
    speed,
    contourLevels,
    zoom,
  ])

  // Animation loop
  const animate = useCallback((timestamp?: number) => {
    if (lastTimestamp.current === 0 && timestamp) lastTimestamp.current = timestamp
    const delta = timestamp && lastTimestamp.current ? timestamp - lastTimestamp.current : 16
    lastTimestamp.current = timestamp || 0
    timeRef.current += speed * delta
    draw()
    animationFrameId.current = requestAnimationFrame(animate)
  }, [speed, draw])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
      lastTimestamp.current = 0
    }
  }, [animate, draw])

  useEffect(() => {
    draw()
  }, [draw])

  return (
    <div className="absolute inset-0 w-full h-full z-[-1]" style={{ pointerEvents: "none" }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        style={{ display: "block" }}
      />
      <GridOverlay
        spacing={32}
        lineColor={theme === "dark" ? "#444" : "#bbb"}
        opacity={theme === "dark" ? 0.13 : 0.18}
        zIndex={1}
      />
    </div>
  )
}

export default TopographyBackground
