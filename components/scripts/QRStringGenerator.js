/**
 * Generates string for QR code verification
 * @param {string} resource Target resource to verify
 * @param {string} resourceIdentifier Identifier of resource
 * @param {string} userIdentifier User identifier
 */
function QRStringGenerator(resource, resourceIdentifier, userIdentifier) {
    return `nottscss://nottcs/user/${userIdentifier}/${resource}/${resourceIdentifier}/${Date.now()}`;
}

export default QRStringGenerator;