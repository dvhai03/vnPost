import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function iconHistory(props) {
    return (
        <Svg
            width={31}
            height={39}
            viewBox="0 0 31 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M4.612 35.458l2.177-23.586V4.059c0-.29.109-.58.326-.781l2.177-2.232a1.034 1.034 0 011.524 0l1.415 1.428 1.415-1.428a1.034 1.034 0 011.524 0l1.415 1.428L18 1.046a1.034 1.034 0 011.523 0l1.416 1.428 1.415-1.428a1.034 1.034 0 011.523 0l1.415 1.428 1.415-1.428a1.034 1.034 0 011.524 0l2.177 2.232c.217.2.326.491.326.781v29.167c0 3.08-2.438 5.58-5.442 5.58H3.523l1.089-3.348z"
                fill="url(#paint0_linear_1953_220495)"
            />
            <Path
                d="M18.069 9.906h6.53c.602 0 1.088.5 1.088 1.116 0 .617-.486 1.116-1.088 1.116h-6.53c-.602 0-1.089-.499-1.089-1.116 0-.617.487-1.116 1.088-1.116zm0 4.464h6.53c.602 0 1.088.5 1.088 1.117s-.486 1.116-1.088 1.116h-6.53c-.602 0-1.089-.5-1.089-1.116 0-.617.487-1.117 1.088-1.117zm-4.354-4.464c.6 0 1.088.5 1.088 1.116 0 .617-.487 1.116-1.088 1.116-.601 0-1.089-.5-1.089-1.116 0-.616.488-1.116 1.089-1.116zm0 4.464c.6 0 1.088.5 1.088 1.117 0 .616-.487 1.116-1.088 1.116-.601 0-1.089-.5-1.089-1.116 0-.617.488-1.117 1.089-1.117z"
                fill="#fff"
            />
            <Path
                d="M.585 13.772l1.088-1.116a1.071 1.071 0 011.524 0l.653.67c.414.424 1.11.424 1.524 0l1.415-1.451v23.586c0 1.8-1.405 3.349-3.265 3.349-1.911 0-3.266-1.699-3.266-3.527V14.576c0-.313.11-.58.327-.804z"
                fill="#FBD5BD"
            />
            <Path
                d="M19.56 26.184c-1.682-.437-2.223-.889-2.223-1.593 0-.807.748-1.37 2-1.37 1.319 0 1.807.63 1.852 1.555h1.637c-.052-1.274-.83-2.444-2.378-2.822v-1.622h-2.222v1.6c-1.437.311-2.593 1.245-2.593 2.674 0 1.711 1.415 2.563 3.482 3.06 1.852.444 2.222 1.096 2.222 1.785 0 .51-.363 1.325-2 1.325-1.526 0-2.126-.681-2.207-1.555H15.5c.089 1.622 1.304 2.533 2.726 2.837v1.607h2.222v-1.592c1.445-.274 2.593-1.111 2.593-2.63 0-2.104-1.8-2.822-3.482-3.26z"
                fill="#fff"
            />
            <Defs>
                <LinearGradient
                    id="paint0_linear_1953_220495"
                    x1={17.1289}
                    y1={0.710937}
                    x2={17.1289}
                    y2={38.8062}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#F79D64" />
                    <Stop offset={1} stopColor="#F37322" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default iconHistory
