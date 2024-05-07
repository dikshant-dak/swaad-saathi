import Image from 'next/image'

const ProductCategory = () => {
  return (
    <>
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'all 0.3s ease-out',
          cursor: 'pointer'
        }}
      >
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
            src="../images/Continenal.jpg"
            alt="burger"
            height={100}
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
              left: '100px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <div className="bg-transparent text-white font-semibold flex items-center text-lg">
              Continental
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
      </div>
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'all 0.3s ease-out',
          cursor: 'pointer'
        }}
      >
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
            src="../images/Continenal.jpg"
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
              left: '100px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <div className="bg-transparent text-white font-semibold flex items-center text-lg">
              North Indian
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
      </div>
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'all 0.3s ease-out',
          cursor: 'pointer'
        }}
      >
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
            src="../images/Continenal.jpg"
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
              left: '100px',
              display: 'flex',
              gap: '12px'
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
            20% OFF
          </div>
        </div>
      </div>
      <div
        style={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'all 0.3s ease-out',
          cursor: 'pointer'
        }}
      >
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
            src="../images/Continenal.jpg"
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
              left: '100px',
              display: 'flex',
              gap: '12px'
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
      </div>
    </>
  )
}

export default ProductCategory
