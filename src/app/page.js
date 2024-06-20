export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rebeccapurple',
          background: 'url(/waves.svg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          background: 'url(/noise.svg)',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'color-burn',
        }}
      />
    </main>
  )
}
