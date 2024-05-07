import Image from "next/image"

const ProductCategory = () => {
  return (
    <div
      style={{
        width: '1200px',
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        transition: 'all 0.3s ease-out',
        cursor: 'pointer'
      }}
    >
      <div
        className="bg-red "
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '6px',
          transition: 'all 0.3s ease-out'
        }}
      >
        <Image
          src="https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/about_us/4.jpg?tr=w-3840"
          alt="burger"
          height={400}
          width={400}
          style={{
            borderRadius: '6px'
          }}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: '10',
            color: 'black',
            bottom: '0px',
            // left: '100px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center' // Center horizontally
          }}
        >
          <div className="bg-transparent text-white font-semibold flex items-center text-lg">
            Chinese
          </div>
        </div>
        <div
          className="sale"
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'white', // Set your color here
            top: '10px',
            right: '10px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'green', // Set your color here
            padding: '3px 6px',
            borderRadius: '4px'
          }}
        >
          30% OFF
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '6px',
          transition: 'all 0.3s ease-out'
        }}
      >
        <Image
          // src="../../images/3.jpg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAoRp6Me9ZJC36RcY-Q2BrVvDPaTkJSukj40HFuyrEhA&s"
          alt="burger"
          height={400}
          width={400}
          style={{
            borderRadius: '6px'
          }}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: '10',
            color: 'black',
            bottom: '0px',
            // left: '100px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center' // Center horizontally
          }}
        >
          <div className="bg-transparent text-white font-semibold flex items-center text-lg">
            Italian
          </div>
        </div>
        <div
          className="sale"
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'white', // Set your color here
            top: '10px',
            right: '10px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'green', // Set your color here
            padding: '3px 6px',
            borderRadius: '4px'
          }}
        >
          20% OFF
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '6px',
          transition: 'all 0.3s ease-out'
        }}
      >
        <Image
          src="https://www.englishclub.com/images/vocabulary/food/mexican/mexican-food-og.jpg"
          alt="burger"
          height={400}
          width={400}
          style={{
            borderRadius: '6px'
          }}
        />
        <div
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: '10',
            color: 'black',
            bottom: '0px',
            // left: '100px',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center' // Center horizontally
          }}
        >
          <div className="bg-transparent text-white font-semibold flex items-center text-lg">
            Mexican
          </div>
        </div>
        <div
          className="sale"
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'white', // Set your color here
            top: '10px',
            right: '10px',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: 'green', // Set your color here
            padding: '3px 6px',
            borderRadius: '4px'
          }}
        >
          10% OFF
        </div>
      </div>
    </div>
  )
}

export default ProductCategory
