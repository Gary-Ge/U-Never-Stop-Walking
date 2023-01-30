import { getSortedPostsData } from '../lib/posts'
import Video from '../components/Video'

export default function Home({ allPostsData }) {

  return (
    <div className='whole-part'>
      <div className='head-part'>
        <div className="logo">
            <a href="#"><img src="Logo.jpg" height="125px" /></a>
        </div>

        <nav>
            <ul>
                <li><a href="#">Games</a></li>
                <li><a href="#">Teaching</a></li>
                <li><a href="#">Storys</a></li>
                <li><a href="#">Credits</a></li>
                <li><a href="#">Download</a></li>
                <li className="btn"><a href="#">Sign In</a></li>
            </ul>
        </nav>
      </div>

      <Video />
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
