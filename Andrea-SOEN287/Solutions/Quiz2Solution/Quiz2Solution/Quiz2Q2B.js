function rectangle(length,width)
{
	var perim, area;
	perim = 2 * (length + width);
    area = length * width;
    document.write(length + "x" + width + "\t"  + perim + "\t" + area);
}
