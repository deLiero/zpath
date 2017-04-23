var path = require("path");

// private
function stringToPath(val) {
    val = val.trim().split(" ");
    return path.join.apply(path, val);
}

// export
function make(val) {
    if (typeof val !== "string") {
        throw new Error("value must be string");
    }

    return stringToPath(val);
}

// export
function _Zpath(root) {
    if (typeof root !== "string") {
        throw new Error("value can be string");
    }
    this.root = root;
}

_Zpath.prototype.make = function (val) {
    if (typeof val === "undefined" || val === null) {
        return path.normalize(this.root);
    }

    if (typeof val !== "string") {
        throw new Error("value must be string, number, undefined or null");
    }

    return path.join(this.root, stringToPath(val));
};

exports.make = make;
exports.create = function (val) {
    return new _Zpath(val);
}