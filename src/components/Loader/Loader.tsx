import './Loader.scss'

const Loader = () => {
  return (
    <div>
      <div className="page-preloader">
        <div className="preloader__icon">
          <svg
            width="503px"
            height="438px"
            viewBox="0 0 503 438"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M365.495449,0.801863515 L7.55317959,27.1774418 C5.20206405,27.3581996 3.06194606,28.6235044 1.76581827,30.6118404 C0.499832976,32.6303027 0.21347916,35.1006595 1.05746935,37.3300059 L12.3609094,67.456309 L26.4977452,62.1540796 L18.7209784,41.4723726 L347.937439,17.2206987 L292.656081,78.5879779 L303.838951,88.6652263 L371.659592,13.379595 C373.618855,11.1954381 374.131277,8.0773657 372.970791,5.38106158 C371.825375,2.6696943 369.202977,0.907305576 366.279154,0.801863515 L365.887302,0.801863515 L365.495449,0.801863515 L365.495449,0.801863515 Z"
                id="li-path-1"
              ></path>
              <path
                d="M7.82446215,0.0526361212 C5.65420165,0.14301503 3.61958244,1.15224618 2.24809838,2.83931915 C0.876614312,4.52639212 0.318977934,6.71054909 0.680688017,8.86457976 L8.20124349,57.7896959 C8.54788232,60.5161263 10.3413615,62.8358516 12.8884033,63.8601459 C15.4203739,64.8844402 18.3291258,64.4476088 20.4541725,62.7002833 C22.5792193,60.9680208 23.6040645,58.2265273 23.1067131,55.51516 L15.5710864,6.57498073 C15.0586638,2.824256 11.8484868,0.0526361212 8.09574471,0.0526361212 L7.82446215,0.0526361212 L7.82446215,0.0526361212 Z"
                id="li-path-3"
              ></path>
              <path
                d="M2.141268,2.62843503 C0.619071407,4.3456343 -0.044063745,6.66535964 0.332717591,8.92483236 L45.5615492,291.298671 C45.9835443,293.964848 47.7920947,296.179132 50.308994,297.143173 C52.8258933,298.107215 55.659289,297.655321 57.7541932,295.953184 C59.8641687,294.251048 60.8739427,291.569807 60.4519476,288.918693 L15.2381873,6.57498073 C14.7257646,3.02007697 11.7868702,0.338836 8.19991189,0.127951879 C8.06427061,0.112888727 7.91355808,0.112888727 7.76284554,0.112888727 C5.62272755,0.112888727 3.57303708,1.03174097 2.141268,2.62843503 L2.141268,2.62843503 Z"
                id="li-path-5"
              ></path>
              <path
                d="M2.0533221,237.790426 C0.500982991,240.24572 0.500982991,243.363792 2.0533221,245.819086 C3.59058995,248.289443 6.40891434,249.630063 9.28752375,249.298674 L167.550756,230.469735 L165.78742,215.512025 L23.273647,232.458071 L165.485994,8.66482861 L152.765857,0.606042545 L2.0533221,237.790426 L2.0533221,237.790426 Z"
                id="li-path-7"
              ></path>
              <path
                d="M400.207098,9.55355455 C392.928056,13.274153 387.448555,15.6691941 382.696958,15.6691941 C377.945362,15.6691941 372.48608,13.274153 365.186819,9.55355455 C357.907777,5.81789297 348.788755,0.786800364 336.252628,0.786800364 C323.696281,0.786800364 314.597479,5.81789297 307.298217,9.55355455 C299.998956,13.274153 294.559894,15.6691941 289.808298,15.6691941 C285.056701,15.6691941 279.59742,13.274153 272.298158,9.55355455 C265.019117,5.81789297 255.900095,0.786800364 243.363967,0.786800364 C230.80762,0.786800364 221.688599,5.81789297 214.409557,9.55355455 C207.130515,13.274153 201.671234,15.6691941 196.919637,15.6691941 C192.16804,15.6691941 186.66832,13.274153 179.389278,9.55355455 C172.090017,5.81789297 162.970995,0.786800364 150.434868,0.786800364 C137.89874,0.786800364 128.820158,5.81789297 121.541116,9.55355455 C114.241855,13.274153 108.742134,15.6691941 103.990538,15.6691941 C99.2389408,15.6691941 93.7796595,13.274153 86.5006177,9.55355455 C79.2013564,5.81789297 70.0823347,0.786800364 57.5462072,0.786800364 C44.9696407,0.786800364 33.0401,5.20030376 22.9909785,9.17697576 C12.941857,13.1385846 5.23820445,17.0700672 5.23820445,17.0700672 C2.22548995,18.5914455 0.527046879,21.1973707 0.789901165,23.8936748 C1.07297501,26.5899789 3.2769071,28.98502 6.55247588,30.1298195 C9.84826423,31.2896822 13.6899807,31.0486718 16.6824756,29.4971672 C16.6824756,29.4971672 23.5571262,26.002516 32.4739523,22.4777385 C41.3907785,18.9529611 52.774391,15.8348887 57.5462072,15.8348887 C62.2978039,15.8348887 67.7570852,18.244993 75.036127,21.9655914 C82.3353883,25.6861898 91.45441,30.7323456 103.990538,30.7323456 C116.526665,30.7323456 125.645687,25.6861898 132.944948,21.9655914 C140.22399,18.244993 145.683271,15.8348887 150.434868,15.8348887 C155.186464,15.8348887 160.686185,18.244993 167.985446,21.9655914 C175.264488,25.6861898 184.38351,30.7323456 196.919637,30.7323456 C209.475984,30.7323456 218.595006,25.6861898 225.874048,21.9655914 C233.153089,18.244993 238.592151,15.8348887 243.363967,15.8348887 C248.095345,15.8348887 253.554626,18.244993 260.853887,21.9655914 C268.132929,25.6861898 277.251951,30.7323456 289.808298,30.7323456 C302.344425,30.7323456 311.463447,25.6861898 318.742489,21.9655914 C326.04175,18.244993 331.501031,15.8348887 336.252628,15.8348887 C341.004225,15.8348887 346.503945,18.244993 353.782987,21.9655914 C361.082248,25.6861898 370.140611,30.7323456 382.696958,30.7323456 C395.233086,30.7323456 404.352107,25.6861898 411.631149,21.9655914 C418.93041,18.244993 424.409911,15.8348887 429.161508,15.8348887 C433.953544,15.8348887 445.316937,18.9077716 454.253982,22.4024228 C463.150589,25.9121371 470.065679,29.4067882 470.065679,29.4067882 C473.037954,31.1541138 477.061647,31.5005663 480.498972,30.3557668 C483.936297,29.180841 486.221108,26.6803578 486.423303,23.8786116 C486.625499,21.0768655 484.70464,18.4106876 481.449291,16.9947514 C481.449291,16.9947514 473.725419,13.0180794 463.696517,9.0715337 C453.647396,5.124988 441.717855,0.786800364 429.161508,0.786800364 C416.625381,0.786800364 407.506359,5.81789297 400.207098,9.55355455 L400.207098,9.55355455 Z"
                id="li-path-9"
              ></path>
              <mask
                id="li-mask-10"
                maskContentUnits="userSpaceOnUse"
                maskUnits="objectBoundingBox"
                x="-8"
                y="-8"
                width="501.67455"
                height="46.2332958"
              >
                <rect
                  x="-7.23671775"
                  y="-7.21319964"
                  width="501.67455"
                  height="46.2332958"
                  fill="white"
                ></rect>
                <use xlinkHref="#li-path-9" fill="black"></use>
              </mask>
              <mask
                id="li-mask-12"
                maskContentUnits="userSpaceOnUse"
                maskUnits="objectBoundingBox"
                x="-8"
                y="-8"
                width="501.67455"
                height="46.2332958"
              >
                <rect
                  x="-7.23671775"
                  y="-7.21319964"
                  width="501.67455"
                  height="46.2332958"
                  fill="white"
                ></rect>
                <use xlinkHref="#li-path-9" fill="black"></use>
              </mask>
              <path
                d="M429.161508,0.786800364 C416.625381,0.786800364 407.506359,5.83295612 400.207098,9.55355455 C392.928056,13.274153 387.448555,15.6993204 382.696958,15.6993204 C377.945362,15.6993204 372.48608,13.274153 365.186819,9.55355455 C357.907777,5.83295612 348.788755,0.786800364 336.252628,0.786800364 C323.696281,0.786800364 314.597479,5.83295612 307.298217,9.55355455 C299.998956,13.274153 294.559894,15.6993204 289.808298,15.6993204 C285.056701,15.6993204 279.59742,13.274153 272.298158,9.55355455 C265.019117,5.83295612 255.900095,0.786800364 243.363967,0.786800364 C230.80762,0.786800364 221.688599,5.83295612 214.409557,9.55355455 C207.130515,13.274153 201.671234,15.6993204 196.919637,15.6993204 C192.16804,15.6993204 186.66832,13.274153 179.389278,9.55355455 C172.090017,5.83295612 162.970995,0.786800364 150.434868,0.786800364 C137.89874,0.786800364 128.820158,5.83295612 121.541116,9.55355455 C114.241855,13.274153 108.742134,15.6993204 103.990538,15.6993204 C99.2389408,15.6993204 93.7796595,13.274153 86.5006177,9.55355455 C79.2013564,5.83295612 70.0823347,0.786800364 57.5462072,0.786800364 C44.9696407,0.786800364 33.0401,5.20030376 22.9909785,9.16191261 C12.941857,13.1385846 5.23820445,17.1001935 5.23820445,17.1001935 C2.22548995,18.6215718 0.527046879,21.227497 0.789901165,23.9238011 C1.07297501,26.6201052 3.2769071,29.0151463 6.55247588,30.1599458 C9.84826423,31.3348716 13.6899807,31.0787981 16.6824756,29.5272935 C16.6824756,29.5272935 23.5571262,25.9874528 32.4739523,22.4626754 C41.3907785,18.9378979 52.774391,15.8499519 57.5462072,15.8499519 C62.2978039,15.8499519 67.7570852,18.2751193 75.036127,21.9957177 C82.3353883,25.7163161 91.45441,30.7624719 103.990538,30.7624719 C116.526665,30.7624719 125.645687,25.7163161 132.944948,21.9957177 C140.22399,18.2751193 145.683271,15.8499519 150.434868,15.8499519 C155.186464,15.8499519 160.686185,18.2751193 167.985446,21.9957177 C175.264488,25.7163161 184.38351,30.7624719 196.919637,30.7624719 C209.475984,30.7624719 218.595006,25.7163161 225.874048,21.9957177 C233.153089,18.2751193 238.592151,15.8499519 243.363967,15.8499519 C248.095345,15.8499519 253.554626,18.2751193 260.853887,21.9957177 C268.132929,25.7163161 277.251951,30.7624719 289.808298,30.7624719 C302.344425,30.7624719 311.463447,25.7163161 318.742489,21.9957177 C326.04175,18.2751193 331.501031,15.8499519 336.252628,15.8499519 C341.004225,15.8499519 346.503945,18.2751193 353.782987,21.9957177 C361.082248,25.7163161 370.140611,30.7624719 382.696958,30.7624719 C395.233086,30.7624719 404.352107,25.7163161 411.631149,21.9957177 C418.93041,18.2751193 424.409911,15.8499519 429.161508,15.8499519 C433.953544,15.8499519 445.316937,18.9378979 454.253982,22.4325491 C463.150589,25.9422634 470.065679,29.4369145 470.065679,29.4369145 C473.058174,31.0637349 477.000988,31.3649979 480.357435,30.1900721 C483.713882,29.0302095 485.938034,26.5899789 486.160449,23.8334222 C486.403084,21.0768655 484.583323,18.4709402 481.449291,16.9947514 C481.449291,16.9947514 473.725419,13.0482057 463.696517,9.11672315 C453.667615,5.17017745 441.758294,0.786800364 429.222167,0.786800364 L429.161508,0.786800364 L429.161508,0.786800364 Z"
                id="li-path-13"
              ></path>
              <mask
                id="li-mask-14"
                maskContentUnits="userSpaceOnUse"
                maskUnits="objectBoundingBox"
                x="-8"
                y="-8"
                width="501.41873"
                height="46.1144256"
              >
                <rect
                  x="-7.23671775"
                  y="-7.21319964"
                  width="501.41873"
                  height="46.1144256"
                  fill="white"
                ></rect>
                <use xlinkHref="#li-path-13" fill="black"></use>
              </mask>
              <mask
                id="li-mask-16"
                maskContentUnits="userSpaceOnUse"
                maskUnits="objectBoundingBox"
                x="-8"
                y="-8"
                width="501.41873"
                height="46.1144256"
              >
                <rect
                  x="-7.23671775"
                  y="-7.21319964"
                  width="501.41873"
                  height="46.1144256"
                  fill="white"
                ></rect>
                <use xlinkHref="#li-path-13" fill="black"></use>
              </mask>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="iPad-Landscape"
                transform="translate(-199.000000, -112.000000)"
              >
                <g
                  id="ship-loading"
                  transform="translate(207.000000, 112.000000)"
                >
                  <g id="ship" transform="translate(77.000000, 0.000000)">
                    <g id="hull" transform="translate(0.792369, 278.364860)">
                      <mask id="li-mask-2" fill="white">
                        <use xlinkHref="#li-path-1"></use>
                      </mask>
                      <g id="Clip-11"></g>
                      <polygon
                        id="Fill-10"
                        fill="#000000"
                        mask="url(#li-mask-2)"
                        points="-74.781078 163.980984 448.944979 163.980984 448.944979 -74.5138941 -74.781078 -74.5138941"
                      ></polygon>
                    </g>
                    <g id="sail3" transform="translate(166.576157, 135.923769)">
                      <mask id="li-mask-4" fill="white">
                        <use xlinkHref="#li-path-3"></use>
                      </mask>
                      <g id="Clip-5"></g>
                      <polygon
                        id="Fill-4"
                        fill="#000000"
                        mask="url(#li-mask-4)"
                        points="-74.781078 139.718177 98.5986217 139.718177 98.5986217 -75.2631215 -74.781078 -75.2631215"
                      ></polygon>
                    </g>
                    <g id="sail2" transform="translate(174.444683, 0.355405)">
                      <mask id="li-mask-6" fill="white">
                        <use xlinkHref="#li-path-5"></use>
                      </mask>
                      <g id="Clip-14"></g>
                      <polygon
                        id="Fill-13"
                        fill="#000000"
                        mask="url(#li-mask-6)"
                        points="-75.1290484 372.956015 135.898642 372.956015 135.898642 -75.2028688 -75.1290484 -75.2028688"
                      ></polygon>
                    </g>
                    <g id="sail1" transform="translate(26.879559, 22.291284)">
                      <mask id="li-mask-8" fill="white">
                        <use xlinkHref="#li-path-7"></use>
                      </mask>
                      <g id="Clip-17"></g>
                      <polygon
                        id="Fill-16"
                        fill="#000000"
                        mask="url(#li-mask-8)"
                        points="-74.4634317 324.659621 242.907023 324.659621 242.907023 -74.709715 -74.4634317 -74.709715"
                      ></polygon>
                    </g>
                  </g>
                  <g id="wave2" transform="translate(0.000000, 398.870072)">
                    <mask id="li-mask-11" fill="white">
                      <use xlinkHref="#li-path-9"></use>
                    </mask>
                    <g
                      id="Clip-2"
                      stroke="#FFFFFF"
                      mask="url(#li-mask-10)"
                      stroke-width="16"
                    >
                      <use mask="url(#li-mask-12)" xlinkHref="#li-path-9"></use>
                    </g>
                    <polygon
                      id="Fill-1"
                      fill="#000000"
                      mask="url(#li-mask-11)"
                      points="-100.32812 106.334303 587.541325 106.334303 587.541325 -74.5289572 -100.32812 -74.5289572"
                    ></polygon>
                  </g>
                  <g id="wave1" transform="translate(0.000000, 353.680618)">
                    <mask id="li-mask-15" fill="white">
                      <use xlinkHref="#li-path-13"></use>
                    </mask>
                    <g
                      id="Clip-8"
                      stroke="#FFFFFF"
                      mask="url(#li-mask-14)"
                      stroke-width="16"
                    >
                      <use
                        mask="url(#li-mask-16)"
                        xlinkHref="#li-path-13"
                      ></use>
                    </g>
                    <polygon
                      id="Fill-7"
                      fill="#000000"
                      mask="url(#li-mask-15)"
                      points="-100.32812 106.213798 587.27847 106.213798 587.27847 -74.5440204 -100.32812 -74.5440204"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loader
