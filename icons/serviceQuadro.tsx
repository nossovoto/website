import { FC } from "react"
import { IIconAsHTMLProps } from "./props/iconInterface"

const ServiceQuadroIcon: FC<IIconAsHTMLProps> = ({ iconClass }) => (
    <div className={iconClass} dangerouslySetInnerHTML={{ __html: icon }} />
)

export default ServiceQuadroIcon

const icon = `<svg width="100%" height="100%" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="Board">
        <g>
            <path d="M386.738,301.719L86.672,301.719C85.726,301.719 84.947,300.977 84.901,300.032L74.137,78.955C74.088,77.944 74.895,77.096 75.908,77.096L375.974,77.096C376.92,77.096 377.699,77.838 377.745,78.782L388.509,299.861C388.558,300.872 387.751,301.719 386.738,301.719" style="fill:rgb(0,81,143);fill-opacity:0.699997;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.800003">
                    <clipPath id="_clip1">
                        <rect x="77.94" y="80.724" width="306.767" height="217.367"/>
                    </clipPath>
                    <g clip-path="url(#_clip1)">
                        <path d="M88.352,296.404L77.941,82.583C77.892,81.571 78.699,80.723 79.712,80.723L372.524,80.723C373.468,80.723 374.248,81.466 374.295,82.41L384.705,296.231C384.753,297.243 383.947,298.091 382.934,298.091L90.124,298.091C89.178,298.091 88.399,297.348 88.352,296.404" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M161.898,286.143C161.418,286.143 161.017,285.765 160.993,285.28L151.662,93.623C151.638,93.123 152.024,92.698 152.524,92.673C153.005,92.652 153.449,93.035 153.474,93.536L162.805,285.192C162.83,285.692 162.443,286.118 161.943,286.142C161.928,286.142 161.913,286.143 161.898,286.143" style="fill:white;fill-rule:nonzero;"/>
            <path d="M310.079,286.143C309.598,286.143 309.198,285.765 309.173,285.28L299.842,93.623C299.817,93.123 300.204,92.698 300.704,92.673C301.177,92.652 301.629,93.035 301.654,93.536L310.986,285.192C311.01,285.692 310.624,286.118 310.124,286.142C310.109,286.142 310.093,286.143 310.079,286.143" style="fill:white;fill-rule:nonzero;"/>
            <path d="M235.988,286.143C235.508,286.143 235.107,285.765 235.083,285.28L225.752,93.623C225.727,93.123 226.113,92.698 226.614,92.673C227.108,92.652 227.539,93.035 227.564,93.536L236.895,285.192C236.92,285.692 236.533,286.118 236.033,286.142C236.018,286.142 236.003,286.143 235.988,286.143" style="fill:white;fill-rule:nonzero;"/>
            <path d="M366.645,113.374L88.511,113.374C88.01,113.374 87.604,112.968 87.604,112.467C87.604,111.966 88.01,111.56 88.511,111.56L366.645,111.56C367.146,111.56 367.552,111.966 367.552,112.467C367.552,112.968 367.146,113.374 366.645,113.374" style="fill:white;fill-rule:nonzero;"/>
            <path d="M96.889,102.171C98.241,101.643 99.693,101.743 100.943,102.509C101.985,103.147 102.546,104.552 103.809,104.808C105.243,105.099 105.68,103.926 106.688,103.258C107.968,102.41 109.922,102.789 111.351,102.897C115.144,103.183 118.934,103.51 122.719,103.878C126.455,104.242 130.24,104.881 133.969,104.149C135.256,103.896 134.711,101.929 133.426,102.181C129.608,102.931 125.556,102.108 121.731,101.742C117.886,101.376 114.035,101.02 110.181,100.77C108.871,100.686 107.496,100.67 106.268,101.194C105.652,101.457 105.172,101.834 104.709,102.311C104.552,102.472 104.388,102.799 104.133,102.756C103.972,102.729 103.579,102.13 103.476,102.015C101.719,100.045 98.833,99.231 96.347,100.203C95.137,100.677 95.663,102.65 96.889,102.171" style="fill:white;fill-rule:nonzero;"/>
            <path d="M164.409,105.172C165.927,104.026 168.215,102.512 169.474,104.79C170.103,105.93 170.71,107.302 172.279,107.062C173.785,106.831 174.891,104.873 175.992,103.946C177.634,102.565 179.292,102.151 181.205,103.273C182.85,104.237 184.293,105.233 186.231,105.504C188.012,105.753 189.656,105.398 191.291,104.689C192.226,104.283 193.174,103.778 194.216,103.743C195.302,103.706 196.396,104.084 197.479,104.175C199.804,104.368 202.14,103.927 204.417,103.505C205.706,103.266 205.16,101.299 203.874,101.537C201.351,102.005 198.888,102.387 196.331,101.972C195.388,101.818 194.502,101.631 193.54,101.767C192.644,101.894 191.827,102.236 191.005,102.596C188.91,103.511 186.889,103.95 184.697,102.983C183.002,102.234 181.679,100.844 179.782,100.565C178.169,100.326 176.634,100.93 175.345,101.871C174.606,102.41 173.939,103.037 173.304,103.694C173.014,103.994 172.739,104.407 172.407,104.656C171.913,105.026 171.865,104.988 171.573,104.442C170.838,103.069 170.142,101.951 168.5,101.623C166.552,101.233 164.868,102.285 163.379,103.41C162.344,104.192 163.36,105.965 164.409,105.172" style="fill:white;fill-rule:nonzero;"/>
            <path d="M241.034,104.608C242.222,104.046 243.429,103.537 244.666,103.094C245.845,102.673 247.212,102.072 248.478,102.048C249.627,102.028 250.641,102.712 251.741,102.946C252.612,103.13 253.455,103.06 254.264,102.688C254.983,102.357 255.716,101.551 256.504,101.424C257.398,101.28 258.143,102.32 258.905,102.674C259.688,103.039 260.532,103.052 261.375,102.958C262.148,102.871 263.284,102.468 263.999,102.928C264.666,103.356 264.866,104.288 265.587,104.719C266.213,105.095 266.992,105.127 267.645,104.804C268.366,104.448 268.761,103.775 269.357,103.275C270.237,102.539 271.263,102.948 272.269,103.186C273.198,103.407 274.1,103.575 275.056,103.448C276.11,103.308 277.326,102.64 278.394,102.852C280.146,103.2 281.057,105.062 283.019,104.102C284.199,103.524 283.166,101.764 281.989,102.339C281.493,102.583 280.042,101.302 279.559,101.1C278.679,100.731 277.785,100.749 276.862,100.935C275.725,101.164 274.739,101.584 273.556,101.388C272.603,101.231 271.691,100.87 270.719,100.811C269.851,100.759 269.046,100.951 268.344,101.471C267.948,101.764 267.107,103.048 266.6,102.944C266.368,102.895 266.003,102.131 265.856,101.945C265.618,101.646 265.359,101.369 265.029,101.167C264.332,100.738 263.513,100.664 262.715,100.732C261.849,100.806 260.861,101.162 260,100.916C259.135,100.668 258.569,99.827 257.711,99.529C255.774,98.856 254.841,100.449 253.184,100.935C252.11,101.251 251.008,100.494 250.001,100.222C248.917,99.929 247.886,100.005 246.805,100.274C244.463,100.856 242.181,101.818 240.004,102.845C238.817,103.406 239.852,105.166 241.034,104.608" style="fill:white;fill-rule:nonzero;"/>
            <path d="M309.154,104.065C310.969,103.547 312.784,103.029 314.6,102.511C315.462,102.265 316.329,101.961 317.204,101.768C318.197,101.549 318.794,101.887 319.681,102.22C321.132,102.763 322.725,102.756 324.253,102.743C326.068,102.726 327.883,102.698 329.697,102.675C337.122,102.584 344.546,102.492 351.971,102.4C353.283,102.383 353.287,100.342 351.971,100.359C344.381,100.453 336.792,100.547 329.202,100.641C327.413,100.664 325.624,100.701 323.834,100.707C322.955,100.71 322.054,100.718 321.189,100.536C320.371,100.364 319.681,99.904 318.885,99.684C317.399,99.274 315.703,100.074 314.294,100.476C312.4,101.016 310.506,101.557 308.612,102.097C307.351,102.457 307.887,104.426 309.154,104.065" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip2">
                        <rect x="111.401" y="134.982" width="52.151" height="51.025"/>
                    </clipPath>
                    <g clip-path="url(#_clip2)">
                        <path d="M163.552,183.403L115.258,186.007C112.474,169.31 111.304,150.634 111.407,136.803L158.59,134.982C159.133,150.06 160.993,166.397 163.552,183.403" style="fill:rgb(0,124,255);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M164.654,181.186L116.36,183.79C113.576,167.093 111.839,150.913 111.398,135.371L159.692,132.765C160.235,147.844 162.095,164.181 164.654,181.186" style="fill:rgb(0,81,143);fill-opacity:0.699997;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip3">
                        <rect x="175.824" y="150.097" width="48.546" height="51.056"/>
                    </clipPath>
                    <g clip-path="url(#_clip3)">
                        <path d="M224.368,201.153L175.823,198.224L175.825,150.096L224.369,153.024L224.368,201.153Z" style="fill:rgb(0,124,255);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M223.732,200.066L175.188,197.138L175.759,148.736L224.304,151.664L223.732,200.066Z" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip4">
                        <rect x="265.116" y="140.907" width="54.239" height="50.81"/>
                    </clipPath>
                    <g clip-path="url(#_clip4)">
                        <path d="M270.655,191.717L319.18,190.13C320.384,178.961 315.104,150.887 312.19,140.907L265.117,143.898C269.137,161.613 270.866,178.272 270.655,191.717" style="fill:rgb(0,124,255);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M271.485,190.13L318.44,187.714C319.644,176.545 316.528,158.256 313.02,139.32L264.776,142.385C268.796,160.1 271.696,176.684 271.485,190.13" style="fill:rgb(0,81,143);fill-opacity:0.699997;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip5">
                        <rect x="131.002" y="213.711" width="56.1" height="52.4"/>
                    </clipPath>
                    <g clip-path="url(#_clip5)">
                        <path d="M137.556,266.111L187.103,261.076C186.974,249.779 181.164,223.544 177.719,213.711L131.002,219.261C135.971,236.779 136.178,252.656 137.556,266.111" style="fill:rgb(0,124,255);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M138.728,265.424L186.492,260.233C187.082,248.986 182.984,230.844 178.459,212.076L130.58,217.766C134.457,235.331 138.206,251.95 138.728,265.424" style="fill:rgb(0,81,143);fill-opacity:0.699997;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip6">
                        <rect x="257.967" y="164.844" width="52.291" height="56.413"/>
                    </clipPath>
                    <g clip-path="url(#_clip6)">
                        <path d="M257.967,212.214L306.187,221.257C309.815,210.738 310.739,182.485 310.044,172.217L262.949,164.844C263.046,182.821 261.113,199.279 257.967,212.214" style="fill:rgb(0,124,255);fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M259.132,210.862L305.985,218.763C309.612,208.244 310.533,189.909 311.209,170.865L262.943,163.309C263.039,181.286 262.278,197.928 259.132,210.862" style="fill:white;fill-rule:nonzero;"/>
            <path d="M372.636,167.277C373.595,168.285 374.404,169.178 375.231,170.16C376.053,171.121 376.856,172.09 377.644,173.076C379.217,175.048 380.722,177.074 382.146,179.177C383.556,181.295 384.944,183.431 386.174,185.711C387.425,187.975 388.599,190.306 389.56,192.815L389.93,193.748L390.022,193.984L390.138,194.327L390.359,195.014C390.475,195.449 390.572,195.872 390.659,196.29C390.724,196.685 390.799,197.093 390.846,197.477C391.027,199.015 391.039,200.42 390.996,201.777C390.914,204.486 390.547,207.027 390.127,209.524C389.225,214.515 387.935,219.256 386.262,223.99L380.996,222.784C381.387,218.079 381.746,213.28 381.877,208.661C381.957,206.353 381.922,204.063 381.769,201.939C381.689,200.881 381.544,199.868 381.344,199.019L381.191,198.427L381.023,197.952L380.454,196.798C378.539,192.924 376.003,189.115 373.301,185.423C371.943,183.574 370.515,181.758 369.071,179.956C368.351,179.052 367.615,178.16 366.869,177.282L364.671,174.727L372.636,167.277Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M381.641,220.81L377.994,224.724L385.11,228.921C385.11,228.921 387.571,225.648 386.607,222.302L381.641,220.81Z" style="fill:rgb(206,91,81);fill-rule:nonzero;"/>
            <path d="M373.259,230.504L380.189,232.935L385.11,228.921L377.994,224.724L373.259,230.504Z" style="fill:rgb(206,91,81);fill-rule:nonzero;"/>
            <path d="M393.223,246.518L347.452,236.536C349.895,220.477 353.157,205.16 357.435,190.764L403.206,200.747C399.164,214.744 395.969,230.235 393.223,246.518" style="fill:rgb(0,81,143);fill-opacity:0.699997;fill-rule:nonzero;"/>
            <path d="M387.048,247.865L342.149,234.494L355.52,189.595L400.419,202.966L387.048,247.865Z" style="fill:white;fill-rule:nonzero;"/>
            <path d="M346.702,137.281C346.671,137.861 346.339,138.318 345.96,138.302C345.581,138.288 345.299,137.805 345.33,137.225C345.361,136.645 345.693,136.187 346.072,136.203C346.451,136.219 346.733,136.701 346.702,137.281" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M346.392,138.32C346.392,138.32 344.895,141.612 343.358,143.168C344.332,144.167 346.099,143.799 346.099,143.799L346.392,138.32Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M348.996,134.147C349.078,134.133 349.156,134.091 349.212,134.02C349.329,133.873 349.307,133.658 349.16,133.543C347.69,132.378 346.19,132.87 346.126,132.89C345.947,132.951 345.849,133.145 345.907,133.323C345.966,133.502 346.16,133.594 346.336,133.537C346.385,133.52 347.56,133.151 348.732,134.079C348.809,134.139 348.905,134.162 348.996,134.147" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M364.101,145.605C363.002,150.869 362.285,158.162 365.923,161.674C365.923,161.674 364.416,167.014 354.635,167.014C343.88,167.014 349.521,162.328 349.521,162.328C354.008,160.94 354.035,155.848 353.065,151.758L364.101,145.605Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M340.206,407.864C340.086,407.864 339.975,407.876 339.876,407.903C339.718,407.945 339.608,408.023 339.539,408.141C339.416,408.352 339.459,408.458 339.501,408.518C339.83,408.983 341.649,408.994 342.989,408.804C342.326,408.463 341.047,407.864 340.206,407.864M341.329,409.26C340.406,409.26 339.516,409.132 339.222,408.718C339.119,408.572 339.04,408.325 339.246,407.972C339.361,407.774 339.545,407.64 339.791,407.574C340.993,407.248 343.489,408.681 343.595,408.742C343.655,408.778 343.688,408.847 343.676,408.918C343.663,408.988 343.609,409.044 343.539,409.057C343.079,409.149 342.19,409.26 341.329,409.26" style="fill:white;fill-rule:nonzero;"/>
            <path d="M341.787,406.144C341.754,406.144 341.719,406.146 341.684,406.15C341.378,406.18 341.356,406.301 341.35,406.341C341.265,406.83 342.418,408.052 343.297,408.584C343.212,408.019 342.971,406.859 342.376,406.366C342.197,406.217 342.003,406.144 341.787,406.144M343.505,409.061C343.481,409.061 343.458,409.056 343.436,409.046C342.572,408.657 340.872,407.1 341.014,406.287C341.047,406.095 341.186,405.858 341.654,405.81C342.005,405.775 342.319,405.873 342.596,406.103C343.501,406.854 343.67,408.792 343.677,408.874C343.682,408.935 343.655,408.994 343.605,409.029C343.575,409.05 343.54,409.061 343.505,409.061" style="fill:white;fill-rule:nonzero;"/>
            <path d="M351.72,408.891L344.525,408.891L344.022,392.228L351.217,392.228L351.72,408.891Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M344.282,408.057L352.14,408.057C352.434,408.057 352.686,408.262 352.746,408.549L354.085,414.945C354.224,415.608 353.713,416.236 353.034,416.224C350.2,416.176 346.106,416.01 342.544,416.01C338.378,416.01 335.75,416.238 330.865,416.238C327.911,416.238 327.129,413.251 328.369,412.981C334.014,411.749 337.639,411.618 342.542,408.618C343.074,408.292 343.661,408.057 344.282,408.057" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M368.815,162.533C375.714,162.607 385.358,180.112 385.358,180.112L374.665,191.025C374.665,191.025 367.657,187.762 363.764,179.798C359.684,171.453 361.761,162.458 368.815,162.533" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip7">
                        <rect x="361.691" y="162.533" width="23.667" height="28.493"/>
                    </clipPath>
                    <g clip-path="url(#_clip7)">
                        <path d="M368.815,162.533C375.714,162.607 385.358,180.112 385.358,180.112L374.665,191.025C374.665,191.025 367.657,187.762 363.764,179.798C359.684,171.453 361.761,162.458 368.815,162.533" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M336.078,170.513C334.508,178.285 333.382,194.248 337.247,225.864L375.733,225.864C376.028,220.742 373.554,198.391 376.839,174.393C377.725,167.916 372.872,162.056 366.345,161.696C366.204,161.688 366.064,161.681 365.923,161.674C361.009,161.437 353.891,161.281 349.563,161.675C347.756,161.839 345.981,162.1 344.399,162.379C340.219,163.117 336.919,166.353 336.078,170.513" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.699997">
                    <path d="M336.078,170.513C334.508,178.285 333.382,194.248 337.247,225.864L375.733,225.864C376.028,220.742 373.554,198.391 376.839,174.393C377.725,167.916 372.872,162.056 366.345,161.696C366.204,161.688 366.064,161.681 365.923,161.674C361.009,161.437 353.891,161.281 349.563,161.675C347.756,161.839 345.981,162.1 344.399,162.379C340.219,163.117 336.919,166.353 336.078,170.513" style="fill:white;fill-rule:nonzero;"/>
                </g>
            </g>
            <g>
                <g opacity="0.199997">
                    <clipPath id="_clip8">
                        <rect x="334.69" y="183.004" width="10.245" height="13.503"/>
                    </clipPath>
                    <g clip-path="url(#_clip8)">
                        <path d="M344.935,186.522L339.754,183.004C334.751,184.626 334.487,189.486 334.765,196.508C339.047,195.427 343.97,191.352 344.935,186.522" style="fill:black;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <g>
                <g opacity="0.199997">
                    <clipPath id="_clip9">
                        <rect x="344.023" y="392.232" width="7.456" height="8.589"/>
                    </clipPath>
                    <g clip-path="url(#_clip9)">
                        <path d="M344.023,392.231L344.281,400.82L351.479,400.82L351.221,392.231L344.023,392.231Z" style="fill:black;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M366.099,136.837C365.282,143.941 365.164,148.136 361.373,151.646C355.672,156.924 347.06,153.306 345.741,146.128C344.554,139.667 346.09,129.135 353.209,126.584C360.223,124.07 366.917,129.733 366.099,136.837" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M350.941,139.875C348.733,140.375 347.733,135.167 349.983,133.167C347.983,132.167 345.089,130.719 344.125,128.542C343.017,126.042 346.024,123.042 348.608,123.167C347.774,121.5 349.623,117.039 354.889,118.723C360.278,120.444 362.649,123 362.649,123C362.649,123 364.389,117.223 368.056,121.889C371.313,126.035 370.024,129.577 370.024,129.577C370.024,129.577 374.858,134.167 373.608,137.583C372.358,141 369.608,142.208 369.608,142.208C369.608,142.208 370.339,150.236 364.458,152.167C358.578,154.097 354.875,150.125 355.366,147.833C351.566,148.042 347.691,142.958 350.941,139.875" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M353.496,139.352C353.255,141.205 352.265,142.904 351.142,143.988C349.452,145.618 347.89,144.452 347.758,142.34C347.64,140.439 348.376,137.301 350.361,136.462C352.317,135.637 353.772,137.234 353.496,139.352" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M412.798,399.815L406.404,402.108L400.041,385.64L406.435,383.346L412.798,399.815Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M401.818,402.751C401.724,402.824 401.644,402.903 401.583,402.985C401.485,403.116 401.447,403.246 401.465,403.381C401.499,403.623 401.598,403.68 401.669,403.7C402.215,403.862 403.651,402.747 404.587,401.77C403.854,401.91 402.479,402.23 401.818,402.751M403.564,403.152C402.838,403.724 402.059,404.174 401.572,404.029C401.402,403.98 401.187,403.834 401.131,403.43C401.099,403.203 401.16,402.984 401.312,402.779C402.056,401.78 404.903,401.363 405.025,401.346C405.094,401.336 405.163,401.371 405.197,401.434C405.23,401.496 405.222,401.574 405.175,401.628C404.87,401.984 404.24,402.621 403.564,403.152" style="fill:white;fill-rule:nonzero;"/>
            <path d="M401.997,400.421C401.971,400.442 401.945,400.464 401.92,400.488C401.698,400.702 401.756,400.811 401.775,400.846C402.01,401.282 403.672,401.53 404.693,401.405C404.276,401.013 403.369,400.251 402.597,400.232C402.364,400.225 402.167,400.287 401.997,400.421M405.151,401.651C405.132,401.666 405.111,401.677 405.087,401.683C404.167,401.91 401.869,401.738 401.477,401.011C401.386,400.84 401.347,400.567 401.686,400.24C401.94,399.996 402.248,399.879 402.607,399.888C403.784,399.919 405.115,401.338 405.171,401.399C405.212,401.442 405.227,401.506 405.21,401.565C405.199,401.6 405.178,401.63 405.151,401.651" style="fill:white;fill-rule:nonzero;"/>
            <path d="M405.18,400.352L411.356,395.494C411.587,395.312 411.921,395.309 412.159,395.487L417.467,399.449C418.017,399.86 418.033,400.647 417.492,401.058C415.232,402.774 410.873,406.288 408.211,408.654C405.097,411.421 407.521,409.571 403.87,412.816C401.662,414.778 398.961,413.184 399.696,412.168C403.042,407.547 403.754,404.796 404.185,401.848C404.273,401.248 404.692,400.736 405.18,400.352" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M300.072,188.367L297.262,182.32L289.607,187.054C289.607,187.054 292.129,192.204 297.351,191.636L300.072,188.367Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M290.066,180.678L288.358,182.15C287.251,183.105 287.215,184.809 288.281,185.81L289.607,187.054L297.262,182.321L292.668,180.291C291.798,179.907 290.786,180.058 290.066,180.678" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <g>
                <g opacity="0.199997">
                    <clipPath id="_clip10">
                        <rect x="400.044" y="383.35" width="9.676" height="10.784"/>
                    </clipPath>
                    <g clip-path="url(#_clip10)">
                        <path d="M400.044,385.645L403.323,394.133L409.72,391.839L406.441,383.351L400.044,385.645Z" style="fill:black;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M350.899,225.863C350.899,225.863 362.906,281.133 367.499,301.648C372.528,324.115 398.991,392.417 398.991,392.417L410.608,386.12C410.608,386.12 398.18,332.535 389.097,303.301C385.803,279.137 375.732,225.863 375.732,225.863L350.899,225.863Z" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M395.718,389.015C395.664,389.036 398.103,393.519 398.103,393.519L412.484,388.118L411.34,383.728L395.718,389.015Z" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.300003">
                    <clipPath id="_clip11">
                        <rect x="356.507" y="251.442" width="11.383" height="51.891"/>
                    </clipPath>
                    <g clip-path="url(#_clip11)">
                        <path d="M357.961,251.479C367.019,252.686 368.043,284.603 367.874,303.333C367.749,302.741 367.613,302.178 367.497,301.645C364.991,290.445 360.275,268.86 356.507,251.582C356.949,251.438 357.44,251.408 357.961,251.479" style="fill:black;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
            <path d="M337.247,225.863C337.247,225.863 334.188,279.661 334.69,301.603C335.211,324.427 341.621,399.157 341.621,399.157L353.81,399.157C353.81,399.157 355.802,325.76 356.632,303.345C357.536,278.91 362.545,225.863 362.545,225.863L337.247,225.863Z" style="fill:rgb(26,46,53);fill-rule:nonzero;"/>
            <path d="M339.338,394.303C339.282,394.303 339.961,399.363 339.961,399.363L354.788,399.363L355.247,394.847L339.338,394.303Z" style="fill:white;fill-rule:nonzero;"/>
            <path d="M347.622,174.235C345.967,177.215 344.07,180.038 342.075,182.759C340.053,185.464 337.871,188.019 335.579,190.446C333.296,192.881 330.893,195.177 328.425,197.356C325.993,199.54 323.369,201.623 321.05,203.531L320.228,204.209L319.555,204.451C317.763,205.094 315.94,205.207 314.382,205.023C312.811,204.843 311.44,204.434 310.204,203.945C307.735,202.952 305.748,201.623 303.907,200.235C302.084,198.827 300.443,197.314 298.915,195.723C298.152,194.927 297.432,194.098 296.722,193.265C296.003,192.425 295.348,191.602 294.662,190.65L298.606,186.958C300.145,188.101 301.791,189.337 303.436,190.402C305.074,191.497 306.729,192.523 308.381,193.388C310.017,194.26 311.687,194.967 313.15,195.328C313.876,195.513 314.542,195.586 315.044,195.557C315.551,195.523 315.845,195.416 315.992,195.302L314.497,196.222C316.938,193.935 319.146,191.902 321.347,189.75C323.525,187.608 325.615,185.418 327.609,183.165C329.588,180.901 331.496,178.596 333.252,176.201C335.027,173.818 336.62,171.334 338.151,168.826L347.622,174.235Z" style="fill:rgb(255,191,160);fill-rule:nonzero;"/>
            <path d="M352.736,172.722C352.05,183.069 340.181,191.758 340.181,191.758L324.776,183.311C324.776,183.311 330.451,171.117 338.094,165.361C347.536,158.25 353.258,164.845 352.736,172.722" style="fill:white;fill-rule:nonzero;"/>
            <g>
                <g opacity="0.199997">
                    <clipPath id="_clip12">
                        <rect x="324.776" y="162.326" width="27.993" height="29.432"/>
                    </clipPath>
                    <g clip-path="url(#_clip12)">
                        <path d="M352.736,172.722C352.05,183.069 340.181,191.758 340.181,191.758L324.776,183.311C324.776,183.311 330.451,171.117 338.094,165.361C347.536,158.25 353.258,164.845 352.736,172.722" style="fill:white;fill-rule:nonzero;"/>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`