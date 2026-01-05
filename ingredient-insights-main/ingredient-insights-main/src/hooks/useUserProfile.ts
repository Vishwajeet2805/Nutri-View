import { useState, useEffect } from 'react';
import { UserProfile } from '@/types/nutriscan';

const STORAGE_KEY = 'nutriscan-user-profile';

const defaultProfile: UserProfile = {
  allergies: [],
  dietaryRestrictions: [],
  healthGoals: [],
  healthIssues: [],
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored profile', e);
      }
    }
    setIsLoaded(true);
  }, []);

  const updateProfile = (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    setProfile(newProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
  };

  const clearProfile = () => {
    setProfile(defaultProfile);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { profile, updateProfile, clearProfile, isLoaded };
}
