import React, { Component, Fragment } from 'react'

export default class UnmatchedCardIcon extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <svg
            // v-if="cardType==='attack'"
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='22'
            viewBox='0 0 8680 8520'
            preserveAspectRatio='xMidYMid meet'
          >
            <g>
              <path d='M5991 8453 c-12 -21 -25 -45 -31 -53 -5 -8 -241 -448 -525 -977 -285 -530 -520 -963 -525 -963 -7 0 -1014 1904 -1034 1956 -11 28 -26 32 -26 7 -1 -10 -47 -465 -103 -1012 -66 -637 -107 -996 -114 -998 -12 -4 -379 265 -376 276 1 4 -4 8 -10 8 -20 0 -806 587 -799 597 3 5 1 6 -5 3 -5 -3 -103 64 -217 149 -114 84 -213 154 -219 154 -8 0 -9 -3 -1 -8 5 -4 40 -79 76 -167 37 -88 231 -558 433 -1045 202 -487 370 -895 373 -907 2 -13 2 -23 -2 -23 -15 0 -2213 1125 -2223 1139 -7 8 -13 12 -13 8 0 -7 -341 160 -350 172 -3 3 -9 7 -15 8 -5 1 -19 5 -30 9 -14 6 -8 -7 22 -42 51 -61 129 -137 135 -133 10 8 1849 -1794 1840 -1803 -19 -19 -1165 -547 -1175 -541 -5 3 -8 2 -4 -3 3 -5 -82 -49 -188 -99 -107 -49 -193 -90 -192 -92 2 -1 365 -58 807 -128 890 -138 860 -133 860 -145 0 -13 -1490 -1365 -1501 -1362 -6 1 -8 -1 -5 -6 6 -10 -211 -208 -225 -204 -5 1 -8 -2 -7 -7 2 -5 -62 -69 -142 -142 -487 -445 -479 -437 -451 -434 14 1 33 5 41 9 37 14 235 56 247 52 7 -3 13 -2 13 3 0 12 197 54 211 45 7 -4 10 -3 6 2 -3 6 100 34 236 65 133 31 673 156 1200 279 527 122 960 220 963 217 3 -3 -134 -519 -306 -1148 -240 -882 -308 -1144 -299 -1153 9 -8 10 -8 6 0 -8 14 36 57 47 47 4 -5 6 -3 4 3 -4 14 953 1004 964 998 5 -3 7 -1 6 4 -4 12 573 612 587 612 10 -1 909 -1146 904 -1152 -2 -2 8 -14 21 -28 21 -21 27 -23 36 -10 7 8 10 20 7 27 -3 7 -1 13 4 13 5 0 9 8 9 18 1 19 441 1443 449 1451 3 2 22 -11 43 -30 20 -19 102 -95 182 -169 80 -73 172 -158 205 -190 170 -160 1715 -1590 1719 -1590 3 0 -18 51 -46 113 -28 61 -51 120 -52 130 0 9 -3 17 -6 17 -11 0 -40 71 -34 82 4 6 3 9 -2 6 -10 -6 -430 926 -428 948 1 8 -1 12 -5 10 -4 -3 -29 46 -56 107 -27 62 -63 144 -81 182 -89 193 -423 943 -426 956 -2 8 2 13 7 13 47 -5 1812 -511 1808 -518 -4 -5 -1 -6 6 -2 6 4 51 -4 101 -18 49 -14 94 -26 100 -26 6 0 -142 129 -328 288 -187 158 -337 290 -335 295 2 4 0 6 -5 5 -12 -4 -338 272 -335 284 2 4 -1 7 -6 5 -11 -2 -951 792 -951 804 0 11 -85 -9 800 185 415 90 763 163 773 160 9 -2 15 -1 13 3 -3 4 137 38 310 76 181 40 314 73 314 80 0 6 -8 11 -17 11 -10 0 -270 90 -578 199 -308 109 -722 256 -920 325 -267 95 -360 132 -360 144 0 19 1437 1935 1448 1929 4 -3 7 -1 6 4 -4 15 13 43 22 37 5 -3 8 -1 7 4 -4 14 211 302 225 302 6 0 8 3 4 6 -3 4 6 23 21 42 15 20 23 33 17 30 -54 -32 -550 -246 -558 -241 -7 3 -9 2 -4 -2 9 -11 -581 -278 -595 -269 -6 4 -9 3 -5 -2 6 -10 -977 -458 -1005 -458 -9 0 -15 -3 -13 -6 4 -6 -495 -233 -501 -227 -4 3 32 586 96 1582 12 176 29 444 39 595 10 151 17 277 15 278 -1 2 -12 -13 -23 -35z m-5605 -1805 l29 -33 -32 29 c-31 28 -38 36 -30 36 2 0 16 -15 33 -32z' />
            </g>
          </svg>
          {/* <svg
            v-if="cardType==='defence'"
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='26'
            height='22'
            viewBox='0 0 6870 7830'
            preserveAspectRatio='xMidYMid meet'
          >
            <g>
              <path d='M3305 7754 c-600 -333 -1097 -700 -1549 -1144 -359 -354 -579 -615 -838 -1000 -424 -628 -733 -1353 -852 -2002 -55 -297 -56 -323 -56 -1678 0 -687 2 -1250 5 -1250 2 0 771 -150 1709 -334 l1704 -334 1704 334 c936 184 1707 334 1711 334 4 0 6 586 4 1303 -4 1405 -2 1349 -58 1652 -117 635 -421 1359 -822 1960 -532 798 -1247 1469 -2112 1984 -159 95 -418 241 -427 241 -2 0 -57 -30 -123 -66z' />
            </g>
          </svg>
          <svg
            v-if="cardType==='versatile'"
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='22'
            viewBox='0 0 7900 8020'
            preserveAspectRatio='xMidYMid meet'
            style='margin-left: -1mm;'
          >
            <g>
              <path d='M4233 7983 c-8 -21 -39 -94 -68 -163 -29 -69 -85 -201 -123 -295 -149 -362 -240 -584 -278 -677 -21 -54 -42 -97 -46 -95 -4 1 -109 79 -234 172 -125 94 -245 183 -268 199 -22 16 -45 34 -51 41 -5 7 -28 24 -50 38 -22 15 -74 52 -117 84 -42 32 -98 74 -125 93 -26 19 -73 54 -103 77 -30 23 -121 91 -201 150 -81 59 -195 144 -254 188 -184 138 -209 154 -220 144 -6 -6 -5 -25 3 -53 14 -53 182 -494 369 -966 47 -118 103 -262 124 -320 22 -58 46 -118 53 -135 7 -16 32 -77 54 -135 23 -58 80 -203 127 -324 47 -120 84 -221 81 -223 -3 -3 -11 -1 -18 3 -7 5 -18 9 -25 10 -11 2 -276 103 -335 128 -35 15 -92 37 -288 111 -69 27 -199 77 -290 112 -310 121 -337 132 -785 304 -203 78 -422 162 -485 186 -271 105 -331 123 -337 106 -8 -20 318 -343 1455 -1443 259 -250 471 -457 471 -460 0 -3 -149 -75 -332 -160 -1127 -524 -1250 -584 -1245 -608 3 -17 65 -33 178 -47 25 -3 56 -8 70 -10 56 -11 606 -97 620 -97 8 0 37 -4 64 -9 27 -5 196 -32 375 -60 179 -27 336 -53 348 -57 19 -6 1 -25 -145 -157 -91 -82 -276 -251 -412 -375 -279 -256 -479 -438 -1150 -1050 -544 -496 -640 -588 -640 -612 0 -29 0 -29 353 76 104 31 196 58 205 60 9 1 24 6 32 9 18 7 120 36 146 41 11 3 33 9 49 16 17 6 32 12 35 12 3 0 10 2 15 4 40 13 395 114 410 117 11 2 27 7 35 10 24 10 253 76 275 79 11 2 25 6 30 10 12 7 185 57 212 61 10 1 23 5 28 9 12 7 94 30 115 32 9 1 20 5 25 8 12 7 264 80 285 83 8 1 22 5 30 9 42 18 445 131 448 126 1 -4 -67 -204 -152 -446 -543 -1544 -656 -1870 -656 -1895 0 -41 38 -21 175 93 11 9 53 44 92 76 40 33 79 66 87 74 8 7 31 27 52 43 21 17 54 44 73 61 48 42 379 318 415 346 16 13 39 32 52 43 12 11 40 34 60 50 21 17 50 42 64 56 48 49 328 278 333 273 3 -3 10 3 16 14 11 22 138 127 152 127 5 0 9 4 9 8 -1 12 91 86 104 84 5 -1 10 3 11 9 0 12 113 110 118 103 2 -2 50 -110 107 -239 137 -313 149 -338 357 -798 31 -67 60 -125 64 -128 4 -2 13 4 19 15 9 18 11 824 10 6679 l0 1012 -21 0 c-14 0 -25 -11 -36 -37z' />
              <path d='M4954 7818 c-12 -19 -18 -7438 -7 -7449 7 -7 164 20 469 80 253 50 475 93 494 96 19 2 111 20 203 40 93 19 171 34 175 33 4 -1 14 1 22 5 17 6 893 178 930 182 14 1 32 5 40 8 14 5 357 73 417 82 15 3 66 13 113 22 l85 18 0 1300 c0 1387 -3 1475 -49 1705 -14 69 -27 136 -28 150 -2 14 -7 31 -11 37 -5 7 -6 17 -2 22 3 5 0 13 -6 16 -5 4 -8 13 -5 21 3 7 1 16 -3 19 -8 4 -24 61 -26 90 0 6 -3 15 -6 20 -4 6 -25 73 -49 150 -24 77 -51 158 -61 181 -11 22 -19 45 -19 52 0 6 -6 26 -14 44 -13 30 -81 192 -109 262 -16 39 -221 449 -250 501 -13 22 -36 63 -51 90 -72 126 -307 476 -415 617 -429 561 -979 1068 -1626 1498 -119 80 -186 120 -199 120 -3 0 -8 -5 -12 -12z' />
            </g>
          </svg>
          <svg
            v-if="cardType==='scheme'"
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='40'
            viewBox='0 0 5190 12910'
            preserveAspectRatio='xMidYMid meet'
          >
            <g>
              <path d='M73 12883 c7 -35 182 -616 858 -2847 640 -2111 1029 -3406 1029 -3421 0 -22 -140 -25 -1044 -25 -490 0 -897 -4 -904 -9 -14 -9 12 -122 968 -4226 549 -2356 532 -2286 556 -2296 50 -18 3564 -73 3564 -55 0 8 -243 505 -1080 2206 -1046 2127 -1236 2517 -1228 2525 4 5 700 -7 1513 -25 582 -13 885 -13 885 0 0 12 -117 200 -1463 2362 -2940 4720 -3639 5838 -3650 5838 -5 0 -7 -12 -4 -27z' />
            </g>
          </svg>
         */}
        </div>
        <style jsx>{`
          svg {
            margin-top: 1.5mm;
            fill: #fff;
            stroke: none;
          }
        `}</style>
      </Fragment>
    )
  }
}
