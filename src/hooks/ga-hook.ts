import { useEffect } from 'react';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string;
ReactGA.initialize(gaTrackingId);

export const useGaTrackPage = (path: string) => {
  useEffect(() => {
    ReactGA.pageview(path);
  }, [path]);
};
