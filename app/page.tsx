import { MacbookScrollDemo } from '@/components/MacBook/MacBook';
import { HeroParallax } from '@/components/Projects/Projects';
import Image from 'next/image';

import { products } from '../src/data/products';

export default function Home() {
  return (
    <>
      <div className="p-4 mx-6">
        <h2 className="text-2xl">I'm Oliver Patrick</h2>
        <p>Full Stack Engineer</p>
        <p>I talk to computers. 🗣💻</p>
        <div>
          <Image
            className="animate-morph border-2"
            src="https://picsum.photos/200"
            alt="Profile"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
      <MacbookScrollDemo />
      <HeroParallax products={products} />
    </>
  );
}
