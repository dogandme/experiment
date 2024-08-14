import { create } from 'zustand';

interface Coords {
  lat: number;
  lng: number;
}

interface Bounds {
  east: number;
  north: number;
  south: number;
  west: number;
}

type Zoom = number;

interface State {
  center: Coords;
  zoom: Zoom;
  bounds: Bounds;
}

interface Actions {
  setCenter: (newCenter: Coords) => void;
  setZoom: (newZoom: Zoom) => void;
  setBounds: (newBounds: Bounds) => void;
}

export const useMapStore = create<State & Actions>((set) => ({
  center: {
    lat: 37.553441,
    lng: 126.9696769,
  },
  zoom: 20,
  bounds: {
    east: 126.96995517918529,
    north: 37.55438990691352,
    south: 37.55249208100418,
    west: 126.9693986208147,
  },
  setCenter: (newCenter: Coords) => set({ center: newCenter }),
  setZoom: (newzoom: number) => set({ zoom: newzoom }),
  setBounds: (newBounds: Bounds) => set({ bounds: newBounds }),
}));
