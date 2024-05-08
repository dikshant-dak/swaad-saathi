import { CiHeart, CiStar } from 'react-icons/ci'
import ProductCard from './ProductCard'
import { IoBagOutline } from 'react-icons/io5'
import Image from 'next/image'

const Favourites = () => {
  return (
    <div
      style={{
        // paddingBottom: '200px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
        // overflow: 'auto' // Add overflow auto to enable scrolling if content overflows
        // background: 'lightgray' // You can set your background color here
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%', // Ensure the inner div doesn't exceed the parent width
          width: '100%' // Ensure the inner div doesn't exceed the parent width
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 "
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Adjust column sizes for responsiveness
            gap: '20px',
            justifyContent: 'center', // Center the items horizontally
            alignItems: 'center'
          }}
        >
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
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
              padding: '8px'
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
                src="https://www.foodandwine.com/thmb/zmgsyQFv1FojkTVRr4TRSDjQOM4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rainbow-vegetable-gratin-FT-RECIPE0621-a1c73435a5df46319ffac9b986ed3c41.jpg"
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
                Vegetable Gratin
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
               Vegetable Gratin is a classic French dish
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
                $12
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $24
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($50% Off){' '}
                </div>
              </div>
            </div>
          </div>
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
              padding: '8px'
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
                src="https://www.foodandwine.com/thmb/R4YukLreo2B9MvMBNTSLL61Td-Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/roasted-broccoli-steaks-tomato-butter-and-tapenade-FT-RECIPE0920-90bfa9b440a048f586a003eed5810a3e.jpg"
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
                Roasted Broccoli
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
                Roasted Broccoli is a classic French dish
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
                $25
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $100
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($75% Off){' '}
                </div>
              </div>
            </div>
          </div>
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
              padding: '8px'
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
                src="https://www.foodandwine.com/thmb/e9YqWUzD2nKwOLayuVyMIfpr7SQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-vegetable-flatbread-with-smoked-almond-muhammara-FT-RECIPE0620-1-60d23ce866404a2a9a6632b09e1843bc.jpg"
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
                Grilled Vegetable
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
                Grilled Vegetable with sauce
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
                $5
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $20
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($25% Off){' '}
                </div>
              </div>
            </div>
          </div>
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
              padding: '8px'
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
                src="https://www.foodandwine.com/thmb/_hz1-1jxHmNJxNLZxIjlOs2QQ3E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
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
                Veggie Burgers
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
                Burger with multigrain buns
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
                $8
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $24
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($66% Off){' '}
                </div>
              </div>
            </div>
          </div>
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
              padding: '8px'
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
                src="https://www.foodandwine.com/thmb/uzWER1y5wg0ROH6-H7RqvUdS13M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shaking-tofu-XL-RECIPE0219_0-103b2694697d4b0787c58ee3b7971ee2.jpg"
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
                Shaking Tofu
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
                Tofu with chilli sauce and chilli
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
                $5
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $10
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($50% Off){' '}
                </div>
              </div>
            </div>
          </div>
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
              padding: '8px'
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
                src="../images/Pizza.jpg"
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
                Margreata Pizza with tomato topping
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
                $75
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#666', // Set your color here
                    textDecoration: 'line-through'
                  }}
                >
                  $150
                </span>
                <div
                  className="percent"
                  style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'green'
                  }}
                >
                  {' '}
                  ($50% Off){' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favourites
