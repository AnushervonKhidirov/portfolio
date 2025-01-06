import type { FC } from 'react'
import type { TooltipProps } from '@mui/material'

import { Tooltip as MuiTooltip, tooltipClasses } from '@mui/material'

const Tooltip: FC<TooltipProps> = props => {
    return (
        <MuiTooltip
            {...props}
            slotProps={{
                popper: {
                    sx: {
                        [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]: {
                            marginTop: props.followCursor ? '1.5em' : '0.5em',
                        },
                        [`&.${tooltipClasses.popper}`]: {
                            pointerEvents: 'none',
                        },
                    },
                },
                tooltip: {
                    sx: {
                        fontSize: '1.25rem',
                    },
                },
            }}
        />
    )
}

export default Tooltip
