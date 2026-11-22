async function stitch(f, out) {
  const b = new Uint8Array(await (await readFileBinary(f)).arrayBuffer());
  const s = new TextDecoder('latin1').decode(b);
  const strips = []; let i = 0;
  while ((i = s.indexOf('/DCTDecode', i)) >= 0) {
    const a = s.lastIndexOf('<<', i), z = s.indexOf('>>', i); const hd = s.slice(a, z);
    const H = +(/\/Height (\d+)/.exec(hd) || [])[1], W = +(/\/Width (\d+)/.exec(hd) || [])[1];
    const so = s.indexOf('stream', z); let st = so + 6; if (s[st] === '\r') st++; if (s[st] === '\n') st++;
    const en = s.indexOf('endstream', st);
    strips.push({ H, W, st, L: en - st, flate: /FlateDecode/.test(hd) }); i = en;
  }
  const W0 = strips[0].W, pageH = Math.round(W0 * 1.414), sc = Math.min(0.5, 1050 / W0), Wc = Math.round(W0 * sc);
  let y = 0, page = 1, c, ctx;
  const nc = () => { c = createCanvas(Wc, Math.round(pageH * sc)); ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height); }; nc();
  const bm = async x => { let blob = new Blob([b.slice(x.st, x.st + x.L)]); if (x.flate) blob = await new Response(blob.stream().pipeThrough(new DecompressionStream('deflate'))).blob(); return createImageBitmap(new Blob([blob], { type: 'image/jpeg' })); };
  for (const x of strips) {
    if (x.H > pageH * 0.8) { if (y > 0) { await saveFile(out + '-' + page + '.jpg', c); page++; y = 0; nc(); } const bmp = await bm(x); const cc = createCanvas(Wc, Math.round(x.H * Wc / x.W)); cc.getContext('2d').drawImage(bmp, 0, 0, cc.width, cc.height); await saveFile(out + '-' + page + '.jpg', cc); page++; continue; }
    if (y + x.H > pageH + 5) { await saveFile(out + '-' + page + '.jpg', c); page++; y = 0; nc(); }
    const bmp = await bm(x); ctx.drawImage(bmp, 0, Math.round(y * sc), Wc, Math.ceil(x.H * sc)); y += x.H;
  }
  if (y > 0) { await saveFile(out + '-' + page + '.jpg', c); page++; }
  return [strips.length, page - 1];
}