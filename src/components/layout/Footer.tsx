import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 h-12 md:h-12 flex items-center justify-between text-sm text-muted-foreground mb-16 md:mb-0">
        <span>
          © 2025 Asiri. Built with 💛 </span>
        <Separator orientation="vertical" className="h-4" />
        <span>
          <span role="img" aria-label="React">⚛️</span> React &nbsp;
          <span role="img" aria-label="Vite">⚡</span> Vite &nbsp;
          <span role="img" aria-label="Typescript">🛠️</span> Typescript &nbsp;
          <span role="img" aria-label="TailwindCSS">🎨</span> TailwindCSS
        </span>
      </div>
    </footer>
  );
}