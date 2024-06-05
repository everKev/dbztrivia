import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col" >
        <h1 className="head_text text-center text-cyan-800">
            Discover & Share <br className="max-md:hidden" ></br>
            <span className="blue_gradient text-center" >DBZ Facts</span>
        </h1>
        <p  className='desc text-center'>DBZ facts is an open-source AI archive tool for modern enthusiets to discover, create and share creative facts</p>
        <Feed />
    </section>
  )
}

export default Home