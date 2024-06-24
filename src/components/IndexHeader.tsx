import Image from 'next/image'

export const IndexHeader = () => {
  const hi = "Hi I'm Danny,"
  const introCopy = `I develop things for the web, tinker with electronics and I really enjoy solving problems.
    I'm currently working on a few projects, one of which is this site.`
  const ctaCopy = `If you're looking for an online solution, I'm always open to collaborate contact me `

  return (
    <>
      <div className={'flex justify-between items-center'}>
        <div className={'pt-10'}>
          <h1 className="text-2xl">{hi}</h1>
          <p className="whitespace-pre-line">{introCopy}</p>
          <p className="whitespace-pre-line">
            {ctaCopy}
            <a
              target="_blank"
              className={'text-sm hover:underline text-blue-300'}
              href={'mailto:hi@dannythomas.dev'}
            >
              here
            </a>
          </p>
        </div>
        <Image
          width={500}
          height={500}
          src="/me.webp"
          alt="Danny's smiling Apple Memoji"
          className={'w-48 h-48'}
        />
      </div>

      {/* <div className={'flex items-center lg:hidden flex-col'}> */}
      {/*   <div className="flex items-center justify-between"> */}
      {/*     <h1 className="text-2xl">{hi}</h1> */}
      {/*     <Image */}
      {/*       width={500} */}
      {/*       height={500} */}
      {/*       src="/me.webp" */}
      {/*       alt="" */}
      {/*       className={'w-48 h-48'} */}
      {/*     /> */}
      {/*   </div> */}
      {/*   <p className="whitespace-pre-line">{introCopy}</p> */}
      {/* </div> */}
    </>
  )
}
