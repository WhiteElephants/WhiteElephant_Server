/**
 * Created by gordon on 16/7/29.
 */

var Wrapper = function (status, message, data) {
    return {status: status, message: message, data: data};
};

module.exports.Wrapper = Wrapper;
