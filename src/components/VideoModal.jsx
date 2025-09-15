'use client'
import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

export default function VideoModal({ isOpen, handleClose, videoSrc }) {
    const videoContainerRef = useRef(null)

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = ''
        return () => (document.body.style.overflow = '')
    }, [isOpen])

    // Close modal when clicking outside the video
    const handleBackgroundClick = (e) => {
        if (videoContainerRef.current && !videoContainerRef.current.contains(e.target)) {
            handleClose()
        }
    }

    if (!isOpen) return null

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-[1000] bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={handleBackgroundClick}
        >
            <div
                ref={videoContainerRef}
                className="relative w-auto max-w-[90%] max-h-[90vh] mx-auto"
            >
                <video
                    className="rounded-lg max-w-full max-h-[90vh]"
                    controls
                    autoPlay
                    src={videoSrc}
                />
            </div>
        </div>,
        document.body
    )
}
