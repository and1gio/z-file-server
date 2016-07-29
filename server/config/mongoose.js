/**
 *  Development Environment
 */
exports.default = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/gl-file-store'
        }
    }
};

/**
 *  Staging Environment
 */
exports.staging = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/gl-file-store'
        }
    }
};

/**
 *  Production Environment
 */
exports.production = function (app) {
    return {
        mongoose: {
            uri: 'mongodb://192.168.4.169:27017/gl-file-store'
        }
    }
};