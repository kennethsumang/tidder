import Image from 'next/image';
import {Typography} from "@/app/_components/MaterialTailwind";

export default async function Home() {
  return (
    <div className="p-24 flex flex-col">
      <Typography variant="h1">
        Welcome to Tidder!
      </Typography>

      <Typography className="mt-5" variant="paragraph">
        An RSS-based reader for Reddit.
      </Typography>
    </div>
  )
}
