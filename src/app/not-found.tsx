'use client'

import {Button} from "@heroui/react";
import Link from "next/link";

function NotFoundPage() {
  return (
    <section className='flex justify-center mt-100'>
      <section className="flex flex-col">
        <p>Dear User, we're can't find this page 😒</p>
        <Button as={Link} href="/" className="mt-3">
          ←- Back to home page
        </Button>
      </section>
    </section>
  )
}

export default NotFoundPage