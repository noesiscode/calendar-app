var NoesisCode = NoesisCode || {};
NoesisCode.namespace = function (ns_string) {
	'use strict';
	var parts = ns_string.split('.'), parent = NoesisCode;
	// strip redundant leading global
	if (parts[0] === "NoesisCode") {
		parts = parts.slice(1);
	}
    parts.forEach(function (part, index) {
        // create a property if it doesn't exist
        if (typeof parent[part] === "undefined") {
            parent[part] = {};
        }
        parent = parent[part];
    });
	return parent;
};