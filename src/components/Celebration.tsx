import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import cuteHeart from '@/assets/cute-heart.png';
import aribaImage from '@/assets/ariba.jpeg';

const Celebration = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: string; color: string }>>([]);

  useEffect(() => {
    const colors = [
      'hsl(333, 71%, 50%)',  // primary pink
      'hsl(349, 89%, 60%)',  // accent red
      'hsl(328, 85%, 70%)',  // light pink
      'hsl(352, 95%, 81%)',  // soft pink
      'hsl(45, 100%, 60%)',  // gold
    ];
    
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-background to-accent">
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute w-3 h-3 rounded-sm animate-confetti"
            style={{
              left: piece.left,
              top: '-20px',
              animationDelay: piece.delay,
              backgroundColor: piece.color,
            }}
          />
        ))}
      </div>

      <Card className="relative z-10 w-full max-w-md mx-4 shadow-xl border-primary/20 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="animate-bounce mb-6">
            <img 
              src={cuteHeart} 
              alt="Happy heart" 
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
            Yay! 🎉
          </h1>
          
          <p className="text-xl text-foreground mb-4">
            I knew you'd say yes!
          </p>
          
          <img 
            src={aribaImage}
            alt="Ariba"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
          
          {/* <div className="mt-8 flex gap-2 text-4xl animate-pulse">
            <span>❤️</span>
            <span>💖</span>
            <span>💕</span>
            <span>💗</span>
            <span>❤️</span>
          </div> */}
          
          {/* <p className="mt-6 text-muted-foreground text-sm">
            Happy Valentine's Day, my love! 💝
          </p> */}
        </CardContent>
      </Card>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti {
          animation: confetti-fall 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Celebration;
