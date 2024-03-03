import React, { useState } from 'react'
import Link  from 'next/link'

export default function Home() {

  return (
    <>
    
      <main>
        <div className="h-screen">
          <div>
            <Link href="/login">
              <button>Show Login</button>
            </Link>
            <Link href="/registration">
              <button>Show Registration</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
