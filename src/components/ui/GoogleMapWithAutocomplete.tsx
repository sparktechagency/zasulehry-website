"use client";

import { useState, useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FaMap, FaSatellite, FaMoon } from "react-icons/fa";

// Define libraries outside of component to avoid re-render issues
const libraries: "places"[] = ["places"];

// Dark theme styles
const darkThemeStyles: google.maps.MapTypeStyle[] = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

type MapViewType = "roadmap" | "satellite" | "dark";

interface JobMarker {
  id: string | number;
  title: string;
  coordinates: [number, number]; // [lng, lat] - GeoJSON format
}

interface GoogleMapWithAutocompleteProps {
  lat?: number;
  lng?: number;
  jobMarkers?: JobMarker[];
  className?: string;
}

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 51.615567, // Default to London area (same as original iframe)
  lng: -0.244664,
};

const GoogleMapWithAutocomplete = ({
  lat,
  lng,
  jobMarkers = [],
  className = "",
}: GoogleMapWithAutocompleteProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapView, setMapView] = useState<MapViewType>("roadmap");
  const [hasFittedBounds, setHasFittedBounds] = useState(false);

  const center = lat && lng ? { lat, lng } : defaultCenter;
  const hasLocation = lat && lng;

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Fit map to show all job markers on initial load
  useEffect(() => {
    if (map && jobMarkers.length > 0 && !hasLocation && !hasFittedBounds) {
      const bounds = new google.maps.LatLngBounds();

      jobMarkers.forEach((job) => {
        bounds.extend({
          lat: job.coordinates[1], // GeoJSON: [lng, lat]
          lng: job.coordinates[0],
        });
      });

      map.fitBounds(bounds);

      // Add some padding and limit max zoom
      const listener = google.maps.event.addListenerOnce(map, "idle", () => {
        const currentZoom = map.getZoom();
        if (currentZoom && currentZoom > 12) {
          map.setZoom(12);
        }
      });

      setHasFittedBounds(true);

      return () => {
        google.maps.event.removeListener(listener);
      };
    }
  }, [map, jobMarkers, hasLocation, hasFittedBounds]);

  // Update map center when lat/lng props change (user searched for location)
  useEffect(() => {
    if (map && lat && lng) {
      map.panTo({ lat, lng });
      map.setZoom(12);
    }
  }, [map, lat, lng]);

  // Get map options based on current view
  const getMapOptions = (): google.maps.MapOptions => {
    const baseOptions: google.maps.MapOptions = {
      zoomControl: true,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: true,
    };

    if (mapView === "satellite") {
      return {
        ...baseOptions,
        mapTypeId: "hybrid", // Hybrid shows satellite with labels
        styles: [], // Clear any custom styles
      };
    } else if (mapView === "dark") {
      return {
        ...baseOptions,
        mapTypeId: "roadmap",
        styles: darkThemeStyles,
      };
    }
    // Default: classic white theme
    return {
      ...baseOptions,
      mapTypeId: "roadmap",
      styles: [], // Clear any custom styles for classic white theme
    };
  };

  // Update map when view changes
  useEffect(() => {
    if (map) {
      const options = getMapOptions();
      map.setOptions(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, mapView]);

  if (loadError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-lg ${className}`}
        style={{ height: "400px" }}
      >
        <p className="text-red-400">Error loading Google Maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-lg ${className}`}
        style={{ height: "400px" }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Map View Switcher */}
      <div className="absolute top-4 left-4 z-10 flex bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          onClick={() => setMapView("roadmap")}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
            mapView === "roadmap"
              ? "bg-teal-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          title="Map View"
        >
          <FaMap size={14} />
          <span className="hidden sm:inline">Map</span>
        </button>
        <button
          onClick={() => setMapView("satellite")}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors border-l border-gray-200 ${
            mapView === "satellite"
              ? "bg-teal-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          title="Satellite View"
        >
          <FaSatellite size={14} />
          <span className="hidden sm:inline">Satellite</span>
        </button>
        <button
          onClick={() => setMapView("dark")}
          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors border-l border-gray-200 ${
            mapView === "dark"
              ? "bg-teal-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
          title="Dark Mode"
        >
          <FaMoon size={14} />
          <span className="hidden sm:inline">Dark</span>
        </button>
      </div>

      {/* Google Map */}
      <div className="rounded-lg overflow-hidden h-[300px] sm:h-[400px] md:h-[500px]">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={hasLocation ? 12 : 10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={getMapOptions()}
        >
          {hasLocation && (
            <Marker
              position={{ lat, lng }}
              icon={{
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#14b8a6",
                fillOpacity: 1,
                strokeColor: "#ffffff",
                strokeWeight: 3,
              }}
            />
          )}
          {/* Job location markers */}
          {jobMarkers.map((job) => (
            <Marker
              key={job.id}
              position={{
                lat: job.coordinates[1], // GeoJSON: [lng, lat]
                lng: job.coordinates[0],
              }}
              title={job.title}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                scaledSize: new google.maps.Size(32, 32),
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapWithAutocomplete;
