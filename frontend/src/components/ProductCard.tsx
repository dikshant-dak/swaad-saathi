import Image from "next/image"
import { CiHeart } from 'react-icons/ci'
import { IoBagOutline } from 'react-icons/io5'
import { CiStar } from 'react-icons/ci'

const ProductCard = () => {
  return (
    <div
      className="card"
      style={{
        // width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'all 0.3s ease-out',
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '6px',
        padding: '8px',
      }}
    >
      <div
        className="top"
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
         
          src='../images/Pizza.jpg'
          width="200"
          height="100"
          alt="name"
          className="image"
          style={{
            width: '100%',
            height: '200px',
            borderRadius: '6px',
            objectFit: 'cover',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div
          className="menu"
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'black', // Set your color here
            top: '14px',
            right: '14px',
            display: 'none',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div
            className="menu-item"
            style={{
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              background: 'white',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '200'
            }}
          >
            <CiHeart style={{ fontSize: '20px' }} />
          </div>
          <div
            className="menu-item"
            style={{
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              background: 'white',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: '200'
            }}
          >
            <IoBagOutline style={{ fontSize: '20px' }} />
          </div>
        </div>
        <div
          className="rate"
          style={{
            position: 'absolute',
            zIndex: '10',
            color: 'black', // Set your color here
            bottom: '8px',
            left: '8px',
            padding: '4px 8px',
            borderRadius: '4px',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            opacity: '0.9'
          }}
        >
          <CiStar style={{ fontSize: '14px' }} />
        </div>
      </div>
      <div
        className="details"
        style={{
          display: 'flex',
          gap: '6px',
          flexDirection: 'column',
          padding: '4px 10px'
        }}
      >
        <div
          className="title"
          style={{ fontSize: '16px', fontWeight: '700', color: 'black' }}
        >
          Pizza
        </div>
        <div
          className="desc"
          style={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'black', // Set your color here
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: '2',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal'
          }}
        >
          aloo ki sabji with poori
        </div>
        <div
          className="price"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '18px',
            fontWeight: '500',
            color: 'black'
          }}
        >
          $500
          <span
            style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#666', // Set your color here
              textDecoration: 'line-through'
            }}
          >
            $1000
          </span>
          <div
            className="percent"
            style={{ fontSize: '12px', fontWeight: '500', color: 'green' }}
          >
            {' '}
            ($50% Off){' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
