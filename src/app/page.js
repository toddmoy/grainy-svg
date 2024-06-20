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
          background: 'url(/waves-2.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </main>
  )
}
