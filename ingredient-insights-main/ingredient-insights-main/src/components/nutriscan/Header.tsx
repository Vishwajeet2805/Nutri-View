import { Leaf, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onProfileClick: () => void;
}

export function Header({ onProfileClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-lg text-foreground">NutriView</h1>
            <p className="text-xs text-muted-foreground">AI Food Co-Pilot</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onProfileClick}
          className="rounded-full"
        >
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}
