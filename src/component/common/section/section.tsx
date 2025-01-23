'use client'
import type { FC } from 'react'
import type { AdditionalProps } from '@type/common.type'

import { useEffect, useRef } from 'react'

import useActiveNavigation from '@store/active-navigation'

import classNames from 'classnames'
import classes from './section.module.css'

type TSection = AdditionalProps<{
    title?: string
    headline?: boolean
    fullHeight?: boolean
}>

const Section: FC<TSection> = ({ title, headline = false, fullHeight = false, className, children }) => {
    const addSectionPosition = useActiveNavigation(state => state.addSection)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (sectionRef.current && title) {
            const parent = sectionRef.current.parentElement

            let parentTopPosition = 0
            let parentPaddingTop = 0
            let parentGap = 0

            if (parent) {
                parentTopPosition = parent.getBoundingClientRect().top
                parentPaddingTop = parseInt(document.defaultView?.getComputedStyle(parent).paddingTop ?? '0')
                parentGap = parseInt(document.defaultView?.getComputedStyle(parent).gap ?? '0') / 2
            }

            const position = {
                top: fixNum(
                    sectionRef.current.getBoundingClientRect().top - parentTopPosition - parentPaddingTop - parentGap,
                ),
                bottom: fixNum(
                    sectionRef.current.getBoundingClientRect().bottom -
                        parentTopPosition -
                        parentPaddingTop +
                        parentGap,
                ),
            }

            addSectionPosition(title, position)
        }
    }, [sectionRef, title, addSectionPosition])

    function fixNum(num: number) {
        return num < 0 ? 0 : num
    }

    return (
        <section
            ref={sectionRef}
            id={title?.toLowerCase()}
            data-title={title}
            className={classNames(classes.section, { [classes.fullHeight]: fullHeight })}
        >
            <div className={classes.section_inner}>
                {headline && <h2 className={classes.headline}>{title}</h2>}
                <div className={classNames(classes.content, className)}>{children}</div>
            </div>
        </section>
    )
}

export default Section
