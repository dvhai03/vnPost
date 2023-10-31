import * as React from "react"
import Svg, { Path } from "react-native-svg"

function cauHinh(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M15.12 2.678a.25.25 0 00-.393-.049l-3.365 3.365-1.326-1.326 3.367-3.367a.249.249 0 00-.049-.39 5.007 5.007 0 00-7.379 5.607L.253 12.24a.152.152 0 00.006.215l3.314 3.315c.06.06.158.064.215.005l5.72-5.72a5.007 5.007 0 005.611-7.377zm-1.77 5.084a3.6 3.6 0 01-4.191.656l-.172.172-.002-.002-5.351 5.353-1.547-1.546L6.58 7.9s0 .002.002.002l1.031-1.03a3.6 3.6 0 013.469-5.237L8.487 4.229a.626.626 0 000 .884l2.432 2.432a.626.626 0 00.884 0l2.594-2.594a3.602 3.602 0 01-1.047 2.81z"
                fill="#FBAF17"
            />
        </Svg>
    )
}

export default cauHinh