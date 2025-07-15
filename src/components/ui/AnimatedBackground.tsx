import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-400/20 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 dark:bg-blue-400/20 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 dark:bg-purple-400/20 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/40 dark:bg-pink-400/20 rounded-full animate-bounce-slow" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}