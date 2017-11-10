function table(width,length)
{
	var perim, area;
	perim = 2 * length + 2 * width;
    area = length * width;
    document.write(length + "x" + width + "\t"  + perim + "\t" + area);
}
