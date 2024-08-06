import Cookies from 'js-cookie'

const SAME_SITE_MODE = process.env.COOKIE_SAME_SITE_MODE as "strict" | "Strict" | "lax" | "Lax" | "none" | "None" | undefined

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
		httpOnly: false,
		domain: process.env.CURRENT_DOMAIN,
		sameSite: SAME_SITE_MODE,
		expires: 1
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
