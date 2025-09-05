export const rgb2hsv = function(rr, gg, bb) {
	var hsv = [ 0, 0, 0 ];
	var r = rr / 255;
	var g = gg /255;
	var b = bb / 255;
	var max = Math.max(r,g,b);
	var min = Math.min(r,g,b);
	if (max != 0) {
		hsv[1] = (max - min) / max;
		if (max == r)
			hsv[0] = 60 * (g - b) / (max - min);
		else if (max == g)
			hsv[0] = 60 * (b - r) / (max - min) + 120;
		else
			hsv[0] = 60 * (r - g) / (max - min) + 240;
		if (hsv[0] < 0)
			hsv[0] += 360;
	}
	hsv[2] = max;
	return hsv;
};
export const hsv2rgb = function(h, s, v) {
	while (h < 0)
		h += 360;
	h %= 360;
	if (s == 0) {
		v *= 255;
		return [ v, v, v ];
	}
	var hi = h / 60 >> 0;
	var f = h / 60 - hi;
	var p = v * (1 - s);
	var q = v * (1 - f * s);
	var t = v * (1 - (1 - f) * s);
	var rgb = [ 1, 1, 1 ];
	if (hi == 0)
		rgb = [ v, t, p ];
	else if (hi == 1)
		rgb = [ q, v, p ];
	else if (hi == 2)
		rgb = [ p, v, t ];
	else if (hi == 3)
		rgb = [ p, q, v ];
	else if (hi == 4)
		rgb = [ t, p, v ];
	else if (hi == 5)
		rgb = [ v, p, q ];
	rgb[0] = rgb[0] * 255 >> 0;
	rgb[1] = rgb[1] * 255 >> 0;
	rgb[2] = rgb[2] * 255 >> 0;
	return rgb;
};