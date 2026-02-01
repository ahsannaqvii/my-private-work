import { useState, useCallback } from 'react';
import cuteHeart from '@/assets/cute-heart.png';
import cutePanda from '@/assets/cute-panda.png';
import cutePanda2 from '@/assets/cute-panda2.jpg';
import cutePanda3 from '@/assets/panda3.jpg';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FloatingHearts from './FloatingHearts';
import Celebration from './Celebration';

const ValentineCard = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [noHoverCount, setNoHoverCount] = useState(0);

  const moveNoButton = useCallback(() => {
    const maxX = 200;
    const maxY = 150;
    const newX = Math.random() * maxX * 2 - maxX;
    const newY = Math.random() * maxY * 2 - maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setNoHoverCount(prev => prev + 1);
  }, []);

  const handleYesClick = () => {
    setAccepted(true);
  };

  if (accepted) {
    return <Celebration />;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-accent">
      <FloatingHearts />
      
      <Card className="relative z-10 w-full max-w-md mx-4 shadow-xl animate-float border-primary/20 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="animate-pulse-heart mb-6">
            <img 
              src={cutePanda3} 
              alt="Cute heart" 
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-serif">
            Will You Be My
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground mb-8 font-serif">
            Sweetheart? 💕
          </h2>
          
          <div className="flex gap-4 items-center relative min-h-[60px]">
            <Button 
              onClick={handleYesClick}
              className="px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-110 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Yes!
            </Button>
            
            <div
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <Button
                variant="outline"
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                className="px-8 py-6 text-lg font-semibold border-muted-foreground/30 text-muted-foreground hover:bg-muted"
              >
                No
              </Button>
            </div>
          </div>
          
          {noHoverCount > 3 && (
            <p className="mt-4 text-sm text-muted-foreground animate-pulse">
              Hehe, you can't click No! 😜
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ValentineCard;
