function Array.prototype.map(f) {
    // Ah, why don't pythonic generators exist in javascript? :(
    var _a = [];
    
    for (var i = 0; i < this.length; i++) {
        _a[i] = f(this[i]);
    }
    
    return _a;
}

function Array.prototype.filter(f) {
    var _a = [];
    var accum = 0;
    for (var i = 0; i < this.length; i++) {
        if (f(this[i])) {
            _a[accum] = this[i];
            accum += 1;
        }
    }
    
    return _a;
}

