import React from 'react';
import {PiPaperPlaneRightDuotone} from "react-icons/pi";

function PricingListItem({title}) {
    return (
        <li className="flex items-center space-x-3">
            {/* Icon */}
            <PiPaperPlaneRightDuotone className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
            <span>{title}</span>
        </li>
    );
}

export default PricingListItem;