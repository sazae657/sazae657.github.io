function Queue() {
	this.__a = new Array();
}

Queue.prototype.Enqueue = function(o) {
	this.__a.push(o);
}

Queue.prototype.Dequeue = function() {
	if( this.__a.length > 0 ) {
		return this.__a.shift();
	}
	return null;
}

Queue.prototype.Count = function() {
	return this.__a.length;
}

Queue.prototype.ToString = function() {
	return this.__a.join("\n");
}
