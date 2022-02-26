//import logo from './logo.svg'
import './App.css'
import Head from 'next/head'
import { React, useState, useEffect } from 'react'
//import ReactDOM from 'react-dom'
/* class Header extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
} */
function BikeRobery() {
  let [error, setError] = useState(null)
  let [isLoaded, setIsLoaded] = useState(false)
  let [bikes, setBikes] = useState([])
  let [page, setPage] = useState(1)
  let [countBikes, setCountBikes] = useState(0)
  //const [per_page, setPPage] = useState(10)
  useEffect(() => {
    fetch('https://bikeindex.org/api/v3/search?stolenness=proximity&location=Berlin')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setBikes(result.bikes)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
    fetch(
      'https://bikeindex.org/api/v3/search/count?stolenness=proximity&location=Berlin'
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setCountBikes(result.stolen)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="grid">
        <p className="description">Stolen Bikes - total number of bike theft cases: {countBikes}</p>

        {bikes.map((el) => (
          <a href={el.url} className="card">
            <img
              src={
                el.thumb
                  ? el.thumb
                  : 'https://bikeindex.org/assets/revised/bike_photo_placeholder-ff15adbd9bf89e10bf3cd2cd6c4e85e5d1056e50463ae722822493624db72e56.svg'
              }
            />
            <div className="content">
              <h3>{el.title} </h3>
              <p>Serial: {el.serial} </p>
              <p>
                Primary colors:
                {el.frame_colors.map((el2) => (
                  <span>{el2}</span>
                ))}
              </p>
              <p>
                <span style={{ color: el.stolen ? 'red' : 'none' }}>STOLEN</span>:
                {new Intl.DateTimeFormat('en-US').format(el.date_stolen)}
              </p>
              <p>{el.stolen_location}</p>
            </div>
          </a>
        ))}
        {page <= 1 ? (
          <div className="grid">
            <button onClick={() => setPage((page += 1))}>Next Page</button>
          </div>
        ) : page > 1 ? (
          <div className="grid">
            <button onClick={() => setPage((page -= 1))}>Back Page</button>
          </div>
        ) : null}
      </div>
    )
  }
}

function App() {
  return (
    <div className="container">
      <Head>
        <title>Police Departament of Berlin - Stolen Bike</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Police Departament of Berlin</h1>

        <div>
          <BikeRobery />

          {/* <a href="https://nextjs.org/learn" className="card">
            <h3>Learn </h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples </h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy </h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a> */}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card .content {
          -webkit-box-flex: 0;
          flex: 0 0 75%;
          padding: 12px 0.9375rem;
          float: left;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .card img {
          background: #f2f2f2;
          height: 200px;
          margin: auto;
          min-width: 70px;
          padding: 24px;
          vertical-align: middle;
          float: left;
        }
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default App
