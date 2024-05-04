import ProductCard from './ProductCard'

const Favourites = () => {
  return (
    <div
      style={{
        paddingBottom: '200px',
        height: '100%',
        // overflowY: 'scroll',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
        // gap: '30px',
        // background: 'lightgray' // Set your background color here
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px'
        }}
      >
        <div
        className='grid col-span-4 md:grid-cols-1 gap-4 p-4 sm:col-span-2'
          style={{
            display: 'flex',
            // flexWrap: 'wrap',
            gap: '32px',
            justifyContent: 'center'
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default Favourites
