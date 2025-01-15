'use client'

import { useEffect, useState } from "react"

export default function Time() {
    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        const formatTime = () => {
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            })
            return formatter.format(new Date())
        }

        setTime(formatTime())

        const interval = setInterval(() => {
            setTime(formatTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2">
                <span>Paris - France</span>
            </div>
            <div className="font-mono">
                <span>{time}</span>
            </div>
        </div>
    )
}