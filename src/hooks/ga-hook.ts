import { useEffect } from 'react';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.gaTrackingId as string;
ReactGA.initialize(gaTrackingId);

export const useGaTrackPage = (path: string) => {
  useEffect(() => {
    ReactGA.pageview(path);
  }, [path]);
};
