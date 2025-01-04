'use client'
import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'

import { useState, useEffect, useRef } from 'react'
import useActiveNavigation from '@store/active-navigation'

import classNames from 'classnames'
import classes from './scroller.module.css'

type TScroller = {
    pageScroller?: boolean
    handleMenu?: boolean
}

const Scroller: FC<AdditionalProps<TScroller>> = ({ pageScroller, handleMenu, className, children }) => {
    const scrollerWrapperRef = useRef<HTMLDivElement>(null)
    const scrollerContentRef = useRef<HTMLDivElement>(null)
    const scrollerBarRef = useRef<HTMLDivElement>(null)

    const [position, setPosition] = useState(0)
    const [showScrollerBar, setShowScrollerBar] = useState(false)
    const [scrollerBarHeight, setScrollerBarHeight] = useState(0)

    const activeNavigation = useActiveNavigation(state => state)

    function scrollerPositionHandler() {
        const scrollerContent = scrollerContentRef.current

        if (!scrollerContent) return

        const scrollHeight = scrollerContent.scrollHeight
        const clientHeight = scrollerContent.clientHeight
        const scrollTop = scrollerContent.scrollTop
        const maxScroll = scrollHeight - clientHeight

        setPosition((scrollTop / maxScroll) * 100)

        if (handleMenu) {
            getActiveFromRange(scrollTop + clientHeight / 3)
        }
    }

    function getActiveFromRange(position: number) {
        const sectionKeys = Object.keys(activeNavigation.sectionPosition)

        sectionKeys.forEach(key => {
            const section = activeNavigation.sectionPosition[key]

            if (position >= section.top && position < section.bottom) {
                activeNavigation.setActive(key)
            }
        })
    }

    function calcScrollerBarHeight() {
        const scrollerContent = scrollerContentRef.current

        if (!scrollerContent) return

        const scrollHeight = scrollerContent.scrollHeight
        const clientHeight = scrollerContent.clientHeight

        if (scrollHeight === clientHeight) return

        setScrollerBarHeight(() => {
            setShowScrollerBar(true)
            return 100 / (scrollHeight / clientHeight)
        })
    }

    useEffect(() => {
        const scrollerContent = scrollerContentRef.current

        if (scrollerContent) {
            calcScrollerBarHeight()

            scrollerContent.addEventListener('scroll', scrollerPositionHandler)

            return () => {
                scrollerContent.addEventListener('scroll', scrollerPositionHandler)
            }
        }
    }, [scrollerContentRef])

    return (
        <div
            ref={scrollerWrapperRef}
            className={classNames(classes.scroller, { [classes.page_scroller]: pageScroller }, className)}
        >
            <div ref={scrollerContentRef} className={classes.scroller_content}>
                {children}
            </div>

            {showScrollerBar && (
                <div className={classes.scroller_line}>
                    <div
                        ref={scrollerBarRef}
                        className={classes.scroller_bar}
                        style={{
                            height: `${scrollerBarHeight}%`,
                            top: `${position}%`,
                            transform: `translateY(-${position}%)`,
                        }}
                    ></div>
                </div>
            )}
        </div>
    )
}

export default Scroller
