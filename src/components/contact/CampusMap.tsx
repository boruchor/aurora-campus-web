
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const CampusMap = () => {
  // Campus buildings with coordinates (percentage values)
  const buildings = [
    { id: 1, name: "Administration Building", x: 25, y: 30, info: "Administrative offices, President's office" },
    { id: 2, name: "Aurora Library", x: 40, y: 45, info: "24/7 study spaces, research collections" },
    { id: 3, name: "Science Center", x: 60, y: 35, info: "Labs, research facilities, lecture halls" },
    { id: 4, name: "Student Center", x: 75, y: 65, info: "Food court, student services, event spaces" },
    { id: 5, name: "Arts Building", x: 45, y: 70, info: "Gallery spaces, studios, performance halls" },
  ];

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-md bg-white">
      <div className="aspect-[16/9] relative">
        {/* Base campus map image */}
        <img 
          src="https://images.unsplash.com/photo-1551038247-3d9af20df552" 
          alt="Aurora University Campus Map"
          className="w-full h-full object-cover"
        />
        
        {/* Building markers */}
        {buildings.map((building) => (
          <TooltipProvider key={building.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="absolute w-6 h-6 bg-aurora hover:bg-aurora-dark text-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-colors"
                  style={{ 
                    left: `${building.x}%`, 
                    top: `${building.y}%`,
                  }}
                >
                  {building.id}
                </button>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-white p-3 max-w-xs shadow-lg">
                <div>
                  <h4 className="font-bold text-aurora">{building.name}</h4>
                  <p className="text-sm text-muted-foreground">{building.info}</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <p className="text-sm text-muted-foreground text-center">
          Hover or tap building markers for more information. Visit our campus at 1200 Aurora Drive, Aurora, CA 94301.
        </p>
      </div>
    </div>
  );
};

export default CampusMap;
