from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).parent
scale = 2
canvas = Image.new('RGB', (1200 * scale, 630 * scale), '#f0faf5')
draw = ImageDraw.Draw(canvas)

def font(size, bold=False):
    return ImageFont.truetype('C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf', size * scale)

def text(x, y, value, size, color, bold=False):
    draw.text((x * scale, y * scale), value, font=font(size, bold), fill=color)

draw.rectangle((0, 0, 1200 * scale, 9 * scale), fill='#20b8c9')
draw.line((757 * scale, 110 * scale, 757 * scale, 520 * scale), fill='#d4e4dd', width=2)
text(72, 96, 'LICENCIADA EN NUTRICIÓN · UBA', 18, '#488591', True)
text(68, 159, 'Antonella', 65, '#253a3e', True)
text(68, 233, 'Maccario', 65, '#563474', True)
text(72, 345, 'Nutrición deportiva e integral', 27, '#253a3e')
text(72, 391, 'Alimentación y acompañamiento a tu medida.', 21, '#607475')
text(72, 496, 'Once · Lanús · Consulta virtual', 21, '#563474')
text(72, 535, 'MN 13637  |  @licantomaccario', 17, '#607475')

symbol = Image.open(root / 'dist/assets/simbolo.png').convert('RGBA')
symbol = symbol.crop((215, 90, 1065, 935))
# Preserve the supplied mark; make only its pale background transparent.
pixels = symbol.load()
for y in range(symbol.height):
    for x in range(symbol.width):
        r, g, b, a = pixels[x, y]
        if r > 220 and g > 235 and b > 225:
            pixels[x, y] = (r, g, b, 0)
symbol.thumbnail((320 * scale, 320 * scale), Image.Resampling.LANCZOS)
canvas.paste(symbol, (817 * scale, 155 * scale), symbol)
canvas.resize((1200, 630), Image.Resampling.LANCZOS).save(root / 'dist/assets/og-antonella-maccario.png', optimize=True)
