import { useState, useEffect, useCallback } from 'react';
import { ScanHistoryItem, AnalysisResult } from '@/types/nutriscan';

const STORAGE_KEY = 'nutriview-scan-history';
const EIGHT_WEEKS_MS = 8 * 7 * 24 * 60 * 60 * 1000; // 8 weeks in milliseconds

export function useScanHistory() {
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load history and clean up expired items
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed: ScanHistoryItem[] = JSON.parse(stored);
        const now = Date.now();
        
        // Filter out items older than 8 weeks
        const validItems = parsed.filter((item) => {
          const scannedTime = new Date(item.scannedAt).getTime();
          return now - scannedTime < EIGHT_WEEKS_MS;
        });
        
        // Save cleaned up list back to storage if items were removed
        if (validItems.length !== parsed.length) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(validItems));
        }
        
        setHistory(validItems);
      } catch (e) {
        console.error('Failed to parse scan history', e);
        setHistory([]);
      }
    }
    setIsLoaded(true);
  }, []);

  const addScan = useCallback((inputLabel: string, result: AnalysisResult) => {
    const newItem: ScanHistoryItem = {
      id: crypto.randomUUID(),
      inputLabel,
      result,
      scannedAt: new Date().toISOString(),
    };

    setHistory((prev) => {
      const updated = [newItem, ...prev].slice(0, 50); // Keep max 50 items
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeScan = useCallback((id: string) => {
    setHistory((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { history, addScan, removeScan, clearHistory, isLoaded };
}
