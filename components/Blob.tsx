'use client';

interface BlobProps {
  className?: string;
  variant?: 'lg' | 'md' | 'sm';
  color?: 'red' | 'gold' | 'cream';
  rotation?: number;
}

const blobs = {
  lg: [
    <svg key="lg-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,50 Q30,80 50,120 T100,180 Q150,160 170,120 T180,50 Q160,20 120,10 T50,50 Z" />
    </svg>,
    <svg key="lg-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M40,80 Q20,120 40,160 Q80,190 130,170 Q175,150 170,100 Q165,60 140,30 Q110,10 70,20 Q50,35 40,80 Z" />
    </svg>,
  ],
  md: [
    <svg key="md-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M80,20 Q120,30 140,70 Q150,100 130,140 Q100,160 60,150 Q20,140 15,100 Q10,60 40,35 Q60,15 80,20 Z" />
    </svg>,
    <svg key="md-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M60,30 Q90,10 120,25 Q155,40 165,80 Q160,120 140,150 Q110,175 70,170 Q35,160 30,120 Q20,80 45,50 Z" />
    </svg>,
  ],
  sm: [
    <svg key="sm-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M100,10 Q140,20 160,60 Q175,100 160,140 Q140,170 100,180 Q60,175 40,140 Q20,100 35,60 Q55,25 100,10 Z" />
    </svg>,
    <svg key="sm-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M40,60 Q20,90 35,120 Q50,150 90,165 Q130,175 160,140 Q180,100 170,60 Q150,30 110,25 Q70,20 40,60 Z" />
    </svg>,
  ],
};

const colorMap = {
  red: 'fill-accent-red',
  gold: 'fill-warm-gold',
  cream: 'fill-cream',
};

export default function Blob({
  className = '',
  variant = 'md',
  color = 'red',
  rotation = 0,
}: BlobProps) {
  const sizeMap = {
    lg: 'w-96 h-96',
    md: 'w-64 h-64',
    sm: 'w-48 h-48',
  };

  const blobOptions = blobs[variant] || blobs.md;
  const selectedBlob = blobOptions[rotation % blobOptions.length];

  return (
    <div className={`${sizeMap[variant]} ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
      {selectedBlob && (
        <div className={colorMap[color]}> {selectedBlob}</div>
      )}
    </div>
  );
}
