'use client'
import type { FC } from 'react'
import type { AdditionalProps } from '@type/common'

import { useState, useEffect, useRef } from 'react'

import classNames from 'classnames'
import classes from './scroller.module.css'

type TScroller = {
    pageScroller?: boolean
}

const Scroller: FC<AdditionalProps<TScroller>> = ({ pageScroller, className, children }) => {
    const scrollerWrapperRef = useRef<HTMLDivElement>(null)
    const scrollerContentRef = useRef<HTMLDivElement>(null)
    const scrollerBarRef = useRef<HTMLDivElement>(null)

    const [position, setPosition] = useState(0)
    const [showScrollerBar, setShowScrollerBar] = useState(false)
    const [scrollerBarHeight, setScrollerBarHeight] = useState(0)

    function scrollerPositionHandler() {
        const scrollerContent = scrollerContentRef.current

        if (!scrollerContent) return

        const scrollHeight = scrollerContent.scrollHeight
        const clientHeight = scrollerContent.clientHeight
        const scrollTop = scrollerContent.scrollTop
        const maxScroll = scrollHeight - clientHeight

        setPosition((scrollTop / maxScroll) * 100)
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
