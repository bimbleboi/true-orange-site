export const triggerHaptic = () => {
  // Check if vibration is supported and device is mobile/tablet
  if (navigator.vibrate && /Mobi|Android/i.test(navigator.userAgent)) {
    navigator.vibrate(50); // 50ms vibration
  }
}; 