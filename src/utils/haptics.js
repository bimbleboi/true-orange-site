export const triggerHaptic = () => {
    try {
        // Try long-press vibration pattern
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate([30]);
        }
        // Fallback for older iOS devices
        else if (window.navigator && window.navigator.notification && window.navigator.notification.vibrate) {
            window.navigator.notification.vibrate(30);
        }
    } catch (e) {
        console.log('Haptic feedback not supported');
    }
}; 