# Grainy SVG

A quick experiment to add noise to an image using SVG filters.

In `/public/waves-2.svg`:

```
<filter
  id="noiseFilter"
  x="0%"
  y="0%"
  width="100%"
  height="100%"
  filterUnits="userSpaceOnUse"
  primitiveUnits="objectBoundingBox"
>
  <feTurbulence
    type="fractalNoise"
    baseFrequency="0.7"
    numOctaves="2"
    stitchTiles="stitch"
  />
  <feColorMatrix type="saturate" values="0" result="grayscaleNoise" />
  <feBlend in="SourceGraphic" in2="grayscaleNoise" mode="hard-light" />
</filter>
```

---

## Notes

- Deployed to [Vercel](vercel.com)
- Start the dev server `npm run dev`
