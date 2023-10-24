import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hromnik.simple_math_ionic',
  appName: 'Simple math Ionic',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
