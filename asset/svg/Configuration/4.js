import * as React from "react"
import Svg, { Path } from "react-native-svg"

function userChange(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M6.696 9.002c-1.9 0-3.442-2.25-3.442-4.167v-.694c0-1.918 1.541-3.473 3.442-3.473 1.901 0 3.443 1.555 3.443 3.473v.694c0 1.918-1.542 4.167-3.443 4.167zM8.762 15.946c0-.556.215-1.078.604-1.473l2.821-2.845a2.019 2.019 0 00-.69-.408c-1.132-.386-2.856-.829-4.8-.829-1.945 0-3.67.444-4.802.829A2.076 2.076 0 00.5 13.192v2.756h8.262v-.002zM14.327 11.433l-3.986 4.021a.697.697 0 00-.202.492v1.389h1.377a.685.685 0 00.487-.204l3.986-4.021c.46-.463.46-1.213 0-1.677a1.168 1.168 0 00-1.662 0z"
                fill="#BFBFBF"
            />
        </Svg>
    )
}

export default userChange
