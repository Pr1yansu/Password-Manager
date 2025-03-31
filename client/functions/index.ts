/**
 * Fetches the user's public IP address using the ipify API.
 *
 * @async
 * @function getIpAddress
 * @returns {Promise<string>} The user's public IP address (e.g., "192.168.1.1").
 * @throws {Error} If the network request fails.
 *
 * @example
 * getIpAddress().then(ip => console.log("User IP:", ip));
 */
async function getIpAddress(): Promise<string> {
    const res = await fetch("https://api64.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
}

/**
 * Retrieves detailed user agent information, including OS, browser, and device type.
 *
 * @function getUserAgentInfo
 * @returns {Object} User agent details.
 * @property {string} userAgent - Full user agent string.
 * @property {string} osName - Operating system name (e.g., "Windows", "macOS", "Android").
 * @property {string} osVersion - OS version (if available).
 * @property {string} browserName - Browser name (e.g., "Chrome", "Firefox", "Safari").
 * @property {string} browserVersion - Browser version.
 * @property {string} deviceType - Device type ("Mobile", "Tablet", or "Laptop").
 * @property {string} deviceName - Device platform (e.g., "Win32", "MacIntel").
 */
function getUserAgentInfo(): {
    userAgent: string;
    osName: string;
    osVersion: string;
    browserName: string;
    browserVersion: string;
    deviceType: string;
    deviceName: string;
} {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform || "Unknown Device";

    let osName = "Unknown OS";
    let osVersion = "Unknown Version";
    let browserName = "Unknown Browser";
    let browserVersion = "Unknown Version";
    let deviceType = "Laptop"; // Default to "Laptop"

    // Detect OS
    if (/Windows NT 10.0/.test(userAgent)) {
        osName = "Windows";
        osVersion = "10";
    } else if (/Windows NT 6.3/.test(userAgent)) {
        osName = "Windows";
        osVersion = "8.1";
    } else if (/Windows NT 6.2/.test(userAgent)) {
        osName = "Windows";
        osVersion = "8";
    } else if (/Windows NT 6.1/.test(userAgent)) {
        osName = "Windows";
        osVersion = "7";
    } else if (/Mac OS X (\d+[._\d]+)/.test(userAgent)) {
        osName = "MacOS";
        osVersion = RegExp.$1.replace("_", ".");
    } else if (/Android (\d+[._\d]+)/.test(userAgent)) {
        osName = "Android";
        osVersion = RegExp.$1;
        deviceType = "Mobile";
    } else if (/iPhone OS (\d+[._\d]+)/.test(userAgent)) {
        osName = "iOS";
        osVersion = RegExp.$1.replace("_", ".");
        deviceType = "Mobile";
    } else if (/iPad; CPU OS (\d+[._\d]+)/.test(userAgent)) {
        osName = "iOS";
        osVersion = RegExp.$1.replace("_", ".");
        deviceType = "Tablet";
    } else if (/Linux/.test(userAgent)) {
        osName = "Linux";
    }

    // Detect Browser
    if (/Chrome\/([\d.]+)/.test(userAgent) && !/Edg/.test(userAgent)) {
        browserName = "Chrome";
        browserVersion = RegExp.$1;
    } else if (/Edg\/([\d.]+)/.test(userAgent)) {
        browserName = "Edge";
        browserVersion = RegExp.$1;
    } else if (/Firefox\/([\d.]+)/.test(userAgent)) {
        browserName = "Firefox";
        browserVersion = RegExp.$1;
    } else if (/Safari\/([\d.]+)/.test(userAgent) && /Version\/([\d.]+)/.test(userAgent)) {
        browserName = "Safari";
        browserVersion = RegExp.$1;
    } else if (/OPR\/([\d.]+)/.test(userAgent)) {
        browserName = "Opera";
        browserVersion = RegExp.$1;
    } else if (/MSIE ([\d.]+)/.test(userAgent) || /Trident\/7.0; rv:([\d.]+)/.test(userAgent)) {
        browserName = "Internet Explorer";
        browserVersion = RegExp.$1;
    }

    return {
        userAgent,
        osName,
        osVersion,
        browserName,
        browserVersion,
        deviceType,
        deviceName: platform,
    };
}

/**
 * Retrieves the user's geographical location using the browser's Geolocation API.
 *
 * @async
 * @function getLocation
 * @returns {Promise<{location: string} | null>} An object containing the user's location (formatted address),
 * or `null` if geolocation is unavailable or permission is denied.
 *
 * @example
 * getLocation().then(location => console.log("User Location:", location));
 */
function getLocation(): Promise<{ location: string; } | null> {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve(null);
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                const data = await res.json();
                resolve({ location: data.display_name });
            },
            () => resolve(null) // Handle errors (e.g., permission denied)
        );
    });
}

export { getIpAddress, getUserAgentInfo, getLocation };
