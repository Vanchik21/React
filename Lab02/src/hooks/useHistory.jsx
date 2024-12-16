import { useState, useEffect } from 'react'

export default function useHistory() {
	const [location, setLocation] = useState(window.location.pathname)

	const push = (path) => {
		if (path !== window.location.pathname) {
			window.history.pushState(null, '', path)
			setLocation(path)
		}
	}

	const replace = (path) => {
		if (path !== window.location.pathname) {
			window.history.replaceState(null, '', path)
			setLocation(path)
		}
	}

	const goBack = () => {
		window.history.back()
	}

	const goForward = () => {
		window.history.forward()
	}

	useEffect(() => {
		const handlePopState = () => {
			setLocation(window.location.pathname)
		}

		window.addEventListener('popstate', handlePopState)
		return () => {
			window.removeEventListener('popstate', handlePopState)
		}
	}, [])

	return { location, push, replace, goBack, goForward }
}
