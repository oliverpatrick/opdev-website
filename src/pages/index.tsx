import type { NextPage } from 'next';
import Head from 'next/head';
import { IconButton } from '../components/Button/IconButton';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OPDev - Home</title>
        <meta
          name="description"
          content="Oliver Patrick - Web Developer. Application programmer and citizen of earth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-col md:flex-row">
          <div className="flex flex-col w-full md:w-2/5 justify-center text-center md:text-left">
            <p className="uppercase w-full font-semibold">
              Looking to build your online presence?
            </p>
            <h1 className="my-4 font-extrabold leading-tight uppercase text-transparent text-5xl stroke-slate-100 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 break-words">
              Bespoke
              <span className="text-4xl"> Websites</span>
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Contact me for a quotation today!
            </p>
            <a href="mailto:opphdev@gmail.com" className="justify-self-center">
              <IconButton className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Contact
              </IconButton>
            </a>
          </div>
          <div className="w-full md:w-3/5 py-6 text-center flex justify-center">
            <img
              className="w-full md:w-4/5 z-40 hue-rotate-60"
              src="/images/hero.webp"
              alt="hero picture"
            />
          </div>
        </div>
      </div>

      <div className="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fillRule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Scale your business
          </h1>

          <div className="w-full mb-4">
            <div className="h-1 mx-auto w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold mb-3">
                <span className="stroke-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-extrabold">
                  Open yourself up to the world
                </span>
              </h3>
              <p className="text-gray-600 mb-8">
                Step into the digital age with your own place on the internet.
                Made from the ground up for your business.
              </p>
            </div>

            <div className="w-full sm:w-1/2 p-6">
              <svg
                className="w-full sm:h-64 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 356.926 356.926"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M211.89,213.669c0-10.475-8.521-18.997-18.996-18.997c-0.401,0-0.799,0.017-1.193,0.041v2.406
			c0.396-0.028,0.79-0.061,1.193-0.061c9.158,0,16.608,7.452,16.608,16.611s-7.45,16.61-16.608,16.61
			c-0.269,0-0.53-0.027-0.795-0.041v0.897v1.509v4.723H186.2v3.182h13.388v-3.182h-5.104v-4.774
			C204.218,231.781,211.89,223.607,211.89,213.669z"
                      fill="#00722c"
                    />
                    <g>
                      <polygon
                        points="260.072,79.408 260.398,82.045 256.447,82.882 255.913,88.517 260.677,88.517 266.998,87.913 270.251,84.021 
				266.788,82.678 264.883,80.488 262.024,75.858 260.677,69.329 255.286,70.409 253.799,72.721 253.799,75.312 256.378,77.084 			
				"
                        fill="#00722c"
                      />
                      <polygon
                        points="255.495,81.569 255.773,78.037 252.637,76.683 248.233,77.706 244.945,82.94 244.945,86.344 248.768,86.344 			
				"
                        fill="#00722c"
                      />
                      <path
                        d="M164.852,96.598l-0.976,2.498h-4.7v2.428h1.121c0,0,0.07,0.511,0.168,1.191l2.876-0.238l1.783-1.121l0.465-2.248
				l2.335-0.204l0.912-1.888l-2.138-0.442L164.852,96.598z"
                        fill="#00722c"
                      />
                      <polygon
                        points="152.739,101.001 152.565,103.366 155.976,103.081 156.324,100.705 154.279,99.096"
                        fill="#00722c"
                      />
                      <path
                        d="M356.868,176.633c-0.047-5.223-0.313-10.398-0.802-15.505c-1.662-17.01-5.717-33.311-11.828-48.589
				c-0.441-1.127-0.859-2.283-1.336-3.41c-8.121-19.183-19.531-36.646-33.474-51.721c-0.906-0.987-1.835-1.952-2.765-2.916
				c-2.649-2.736-5.333-5.415-8.156-7.971C266.788,17.631,224.642,0,178.463,0C131.896,0,89.447,17.957,57.635,47.271
				c-7.413,6.832-14.221,14.303-20.408,22.285C13.919,99.717,0,137.49,0,178.463c0,98.398,80.059,178.463,178.463,178.463
				c69.225,0,129.316-39.643,158.897-97.399c6.32-12.327,11.247-25.491,14.569-39.294c0.837-3.486,1.58-7.018,2.208-10.585
				c1.801-10.137,2.788-20.56,2.788-31.196C356.902,177.859,356.868,177.249,356.868,176.633z M323.278,105.306l1.022-1.162
				c1.359,2.637,2.649,5.304,3.846,8.028l-1.708-0.07l-3.172,0.436v-7.233H323.278z M297.484,74.156l0.023-7.971
				c2.812,2.975,5.508,6.036,8.087,9.214l-3.207,4.781l-11.247-0.111l-0.696-2.341L297.484,74.156z M82.214,54.364v-0.302h3.567
				l0.325-1.226h5.838v2.55l-1.691,2.236h-8.052v-3.259H82.214z M87.925,62.323c0,0,3.578-0.61,3.892-0.61c0.296,0,0,3.573,0,3.573
				l-8.081,0.511l-1.534-1.847L87.925,62.323z M334.642,133.156h-13.06l-7.971-5.92l-8.365,0.808v5.112h-2.648l-2.848-2.033
				l-14.512-3.671v-9.4l-18.38,1.423l-5.705,3.062h-7.285l-3.59-0.36l-8.854,4.926v9.254l-18.097,13.065l1.5,5.583h3.677
				l-0.964,5.315l-2.58,0.953l-0.133,13.884l15.633,17.823h6.819l0.407-1.081h12.246l3.531-3.265h6.948l3.812,3.811l10.328,1.069
				l-1.359,13.757l11.503,20.28l-6.064,11.572l0.406,5.438l4.775,4.752v13.095l6.251,8.412v10.897h5.391
				c-30.046,36.913-75.823,60.534-127.026,60.534c-90.312,0-163.783-73.454-163.783-163.777c0-22.732,4.665-44.401,13.077-64.089
				v-5.106l5.855-7.11c2.033-3.846,4.212-7.582,6.542-11.235l0.25,2.974l-6.791,8.261c-2.108,3.985-4.084,8.052-5.855,12.217v9.312
				l6.791,3.276v12.955l6.535,11.136l5.316,0.808l0.68-3.817l-6.245-9.661l-1.237-9.388h3.677l1.557,9.673l9.051,13.193l-2.33,4.27
				l5.734,8.795l14.291,3.532v-2.306l5.711,0.808l-0.534,4.078l4.484,0.825l6.948,1.888l9.8,11.171l12.507,0.941l1.237,10.207
				l-8.58,5.984l-0.39,9.115l-1.237,5.588l12.386,15.5l0.947,5.32c0,0,4.49,1.209,5.048,1.209c0.535,0,10.062,7.227,10.062,7.227
				v28.024l3.393,0.964l-2.294,12.92l5.71,7.634l-1.068,12.827l7.563,13.269l9.696,8.47l9.731,0.197l0.952-3.148l-7.163-6.029
				l0.418-2.986l1.272-3.684l0.273-3.741l-4.839-0.14l-2.44-3.066l4.021-3.881l0.546-2.916l-4.496-1.29l0.261-2.719l6.402-0.976
				l9.73-4.672l3.265-6.006l10.196-13.06l-2.312-10.213l3.131-5.438l9.399,0.278l6.327-5.02l2.051-19.693l7.04-8.877l1.237-5.704
				l-6.39-2.045l-4.224-6.942l-14.419-0.145l-11.444-4.351l-0.534-8.162l-3.811-6.675l-10.335-0.145l-5.995-9.382l-5.298-2.585
				l-0.273,2.858l-9.672,0.569l-3.532-4.926l-10.079-2.045l-8.302,9.603l-13.065-2.23l-0.953-14.727l-9.527-1.632l3.805-7.221
				l-1.092-4.148l-12.531,8.371l-7.877-0.964l-2.817-6.158l1.737-6.355l4.339-8.005l9.998-5.072h19.322l-0.064,5.891l6.948,3.235
				l-0.558-10.062l5.007-5.037l10.103-6.64l0.703-4.659l10.068-10.486l10.707-5.937l-0.941-0.773l7.256-6.826l2.655,0.703
				l1.214,1.522l2.76-3.062l0.68-0.296l-3.021-0.43l-3.084-0.987v-2.963l1.632-1.33h3.579l1.655,0.726l1.418,2.858l1.737-0.267
				v-0.244l0.5,0.163l5.02-0.772l0.714-2.463l2.852,0.726v2.667l-2.666,1.818h0.018l0.377,2.928l9.115,2.794c0,0,0,0.035,0.023,0.11
				l2.079-0.18l0.146-3.939l-7.209-3.282l-0.396-1.894l5.972-2.033l0.273-5.722l-6.245-3.805l-0.412-9.667l-8.581,4.218h-3.143
				l0.837-7.355l-11.688-2.748l-4.816,3.654v11.119l-8.673,2.754l-3.486,7.244l-3.758,0.604v-9.277l-8.162-1.133l-4.096-2.667
				l-1.639-6.007l14.611-8.54l7.14-2.179l0.72,4.804l3.991-0.215l0.308-2.411l4.166-0.599l0.07-0.842l-1.784-0.738l-0.407-2.544
				l5.118-0.43l3.091-3.213l0.18-0.238l0.035,0.012l0.941-0.976l10.753-1.354l4.746,4.032l-12.467,6.64l15.871,3.747l2.045-5.31
				h6.948l2.44-4.625l-4.903-1.226v-5.856l-15.359-6.803l-10.62,1.226l-6.001,3.125l0.407,7.628l-6.257-0.953l-0.964-4.212
				l6.007-5.449l-10.898-0.535l-3.125,0.953l-1.359,3.677l4.084,0.686l-0.813,4.084l-6.936,0.406l-1.092,2.725L118.987,52.4
				c0,0-0.273-5.711-0.703-5.711c-0.389,0,7.901-0.145,7.901-0.145l5.995-5.85l-3.271-1.632l-4.339,4.223l-7.222-0.406l-4.403-6.019
				h-9.254L94.03,44.07h8.848l0.796,2.597l-2.307,2.172l9.807,0.279l1.487,3.532l-11.032-0.407l-0.546-2.725l-6.925-1.499
				l-3.689-2.033l-8.255,0.069c27.043-19.699,60.284-31.358,96.226-31.358c41.403,0,79.263,15.476,108.124,40.915l-1.929,3.474
				l-7.564,2.962l-3.194,3.462l0.743,4.02l3.893,0.546l2.358,5.867l6.704-2.713l1.127,7.86h-2.045l-5.519-0.819l-6.111,1.022
				l-5.926,8.377l-8.458,1.319l-1.221,7.25l3.579,0.842l-1.046,4.665l-8.412-1.69l-7.703,1.69l-1.639,4.293l1.325,9.01l4.531,2.115
				l7.61-0.046l5.123-0.465l1.58-4.078l8.018-10.422l5.264,1.081l5.193-4.7l0.976,3.678l12.78,8.621l-1.557,2.108l-5.763-0.308
				l2.23,3.137l3.556,0.79l4.159-1.737l-0.093-5.002l1.859-0.923l-1.487-1.575l-8.528-4.758l-2.254-6.314h7.099l2.243,2.248
				l6.134,5.257l0.244,6.367l6.332,6.733l2.348-9.231l4.392-2.394l0.802,7.552l4.287,4.7l8.54-0.139
				c1.661,4.247,3.148,8.563,4.427,12.978L334.642,133.156z M97.324,81.092l4.27-2.044l3.881,0.929l-1.324,5.211l-4.183,1.319
				L97.324,81.092z M120.073,93.35v3.37h-9.783l-3.689-1.028l0.918-2.341l4.7-1.94h6.437v1.94H120.073z M124.582,98.05v3.259
				l-2.463,1.58l-3.044,0.575c0,0,0-4.903,0-5.415H124.582z M121.822,96.72v-3.893l3.363,3.067L121.822,96.72z M123.355,104.568
				v3.178l-2.347,2.347h-5.211l0.813-3.573l2.463-0.215l0.5-1.226L123.355,104.568z M110.39,98.05h5.408l-6.948,9.696l-2.852-1.534
				l0.616-4.084L110.39,98.05z M132.529,103.464v3.166h-5.211l-1.417-2.062v-2.951h0.406L132.529,103.464z M127.748,99.096
				l1.475-1.557l2.498,1.557l-1.999,1.656L127.748,99.096z M337.291,141.428l0.511-0.61c0.232,0.93,0.441,1.859,0.662,2.789
				L337.291,141.428z"
                        fill="#00722c"
                      />
                      <path
                        d="M27.734,109.268v5.106c1.771-4.177,3.747-8.231,5.855-12.223L27.734,109.268z"
                        fill="#00722c"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <svg className="w-5/6 sm:h-64 mx-auto" viewBox="0 0 36 36">
                <path d="M18.1,11c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S22,11,18.1,11z M18.1,23c-2.8,0-5-2.2-5-5s2.2-5,5-5c2.8,0,5,2.2,5,5S20.9,23,18.1,23z" />
                <path d="M32.8,14.7L30,13.8l-0.6-1.5l1.4-2.6c0.3-0.6,0.2-1.4-0.3-1.9l-2.4-2.4c-0.5-0.5-1.3-0.6-1.9-0.3l-2.6,1.4l-1.5-0.6l-0.9-2.8C21,2.5,20.4,2,19.7,2h-3.4c-0.7,0-1.3,0.5-1.4,1.2L14,6c-0.6,0.1-1.1,0.3-1.6,0.6L9.8,5.2C9.2,4.9,8.4,5,7.9,5.5L5.5,7.9C5,8.4,4.9,9.2,5.2,9.8l1.3,2.5c-0.2,0.5-0.4,1.1-0.6,1.6l-2.8,0.9C2.5,15,2,15.6,2,16.3v3.4c0,0.7,0.5,1.3,1.2,1.5L6,22.1l0.6,1.5l-1.4,2.6c-0.3,0.6-0.2,1.4,0.3,1.9l2.4,2.4c0.5,0.5,1.3,0.6,1.9,0.3l2.6-1.4l1.5,0.6l0.9,2.9c0.2,0.6,0.8,1.1,1.5,1.1h3.4c0.7,0,1.3-0.5,1.5-1.1l0.9-2.9l1.5-0.6l2.6,1.4c0.6,0.3,1.4,0.2,1.9-0.3l2.4-2.4c0.5-0.5,0.6-1.3,0.3-1.9l-1.4-2.6l0.6-1.5l2.9-0.9c0.6-0.2,1.1-0.8,1.1-1.5v-3.4C34,15.6,33.5,14.9,32.8,14.7z M32,19.4l-3.6,1.1L28.3,21c-0.3,0.7-0.6,1.4-0.9,2.1l-0.3,0.5l1.8,3.3l-2,2l-3.3-1.8l-0.5,0.3c-0.7,0.4-1.4,0.7-2.1,0.9l-0.5,0.1L19.4,32h-2.8l-1.1-3.6L15,28.3c-0.7-0.3-1.4-0.6-2.1-0.9l-0.5-0.3l-3.3,1.8l-2-2l1.8-3.3l-0.3-0.5c-0.4-0.7-0.7-1.4-0.9-2.1l-0.1-0.5L4,19.4v-2.8l3.4-1l0.2-0.5c0.2-0.8,0.5-1.5,0.9-2.2l0.3-0.5L7.1,9.1l2-2l3.2,1.8l0.5-0.3c0.7-0.4,1.4-0.7,2.2-0.9l0.5-0.2L16.6,4h2.8l1.1,3.5L21,7.7c0.7,0.2,1.4,0.5,2.1,0.9l0.5,0.3l3.3-1.8l2,2l-1.8,3.3l0.3,0.5c0.4,0.7,0.7,1.4,0.9,2.1l0.1,0.5l3.6,1.1V19.4z" />
                <polygon
                  fill="#f1c40f"
                  points="18.682 0.773 17.318 14.909 20.682 14.454 17.682 35.545 31.727 10.045 26 10.318 29.045 1.045"
                />
              </svg>
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  <span className="stroke-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-extrabold">
                    Industry Accredited Developer
                  </span>
                </h3>
                <p className="text-gray-600 mb-8">
                  Accreditted in the industry, three years of development
                  experience. Tranferring my industry secrets to your custom
                  bespoke website.
                  <br />
                  <br />⚡ Lightning ⚡ fast websites: Built with the latest
                  technologies available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Add-Ons
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                CMS Integration
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Content Management System
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                {`A content management system is for creating, managing, and
                optimizing your customers' digital experience.`}
                <br></br>
                <a
                  className="text-purple-600"
                  href="https://www.sitecore.com/knowledge-center/digital-marketing-resources/what-is-a-cms#:~:text=sites%2C%20and%20more.-,What%20is%20a%20CMS%3F%20%2D%20quick%20definition,pages%2C%20blog%20posts%2C%20etc."
                >
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Authentication
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                User logins
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Integrate a login system into your website allowing users to
                make accounts and access previously hidden parts of your
                website.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                Database
              </p>
              <div className="w-full font-bold text-xl text-gray-800 px-6">
                Online Storage
              </div>
              <p className="text-gray-800 text-base px-6 mb-5">
                Store data online and recieve it to your application for later
                use. Useful in creating social media type websites and ecommerce
                sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave bg-white">
              <path
                fill="white"
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                  fill="#5b21b6"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                  fill="#5b21b6"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                  fill="#5b21b6"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto text-center py-6 mb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-400">
          <span className="uppercase stroke-slate-100 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl font-extrabold">
            Get in touch
          </span>
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Call: <span className="font-semibold">07891 381401</span>
        </h3>
        <h3 className="my-4 text-xl leading-tight">Email: opphdev@gmail.com</h3>
        <a href="mailto:opphdev@gmail.com">
          <IconButton className="mx-auto lg:mx-0 hover:underline bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Contact
          </IconButton>
        </a>
      </section>

      <footer className="w-full text-center text-white bg-gray-200">
        <div className="w-full pt-9">
          <div className="flex justify-center mb-9">
            <a href="https://twitter.com/dev_op" className="mr-9 text-gray-800">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                className="svg-inline--fa fa-twitter w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/oliverjpatrick/"
              className="mr-9 text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/oliver-patrick-4b6bb4ba/"
              className="mr-9 text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/oliverpatrick"
              className="text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-700 p-4 bg-slate-300">
          © 2022 Copyright -{' '}
          <a className="text-gray-800" href="https://opdev.co.uk/">
            OPDev
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;
