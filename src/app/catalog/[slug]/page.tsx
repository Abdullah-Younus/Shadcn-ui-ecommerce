import React, { FC } from 'react'

const Catalog: FC<{ params: { slug: string } }> = ({ params }: any) => {

  console.log(params.slug);


  return (
    <div>
      <div>
        {params.slug}
      </div>
    </div>
  )
}

export default Catalog;