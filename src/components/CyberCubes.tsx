export const CyberCubes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating cubes */}
      <div className="absolute top-20 left-10 w-12 h-12 border-2 border-cyber-pink animate-cube-spin opacity-20"
           style={{ boxShadow: 'var(--glow-pink)' }} />
      <div className="absolute top-40 right-20 w-16 h-16 border-2 border-cyber-purple animate-cube-spin opacity-20 delay-300"
           style={{ boxShadow: 'var(--glow-purple)', animationDuration: '15s' }} />
      <div className="absolute bottom-40 left-1/4 w-10 h-10 border-2 border-cyber-blue animate-cube-spin opacity-20 delay-500"
           style={{ boxShadow: 'var(--glow-blue)', animationDuration: '25s' }} />
      <div className="absolute top-1/3 right-1/4 w-14 h-14 border-2 border-cyber-pink animate-cube-spin opacity-20"
           style={{ boxShadow: 'var(--glow-pink)', animationDuration: '18s' }} />
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-cyber-purple animate-cube-spin opacity-20 delay-150"
           style={{ boxShadow: 'var(--glow-purple)', animationDuration: '22s' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `
               linear-gradient(hsl(var(--cyber-purple)) 1px, transparent 1px),
               linear-gradient(90deg, hsl(var(--cyber-purple)) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }} />
    </div>
  );
};