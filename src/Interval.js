Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return interval.start >= this.start && interval.end <= this.end ;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	var res = [];
	if(this.overlaps(interval)){
		res.push(new Interval(Math.min(interval.start,this.start),Math.max(interval.end,this.end)));
	}else{
		if(this.start <= interval.start){
			res.push(this);
			res.push(interval);
		}else{
			res.push(interval);
			res.push(this);
		}
	}
	return res;
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if(!this.overlaps(interval))	
		return null
	else
		return new Interval(Math.max(interval.start,this.start),Math.min(interval.end,this.end));
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	var res = [];

	if(this.overlaps(interval)){
		res.push(new Interval(Math.min(interval.start,this.start),Math.max(interval.start,this.start)));
		res.push(new Interval(Math.min(interval.end,this.end),Math.max(interval.end,this.end)));
	}else{
		if(this.start <= interval.start){
			res.push(this);
			res.push(interval);
		}else{
			res.push(interval);
			res.push(this);
		}
	}
	return res;
};



