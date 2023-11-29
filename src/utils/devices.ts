export const sizes = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px',
} as const

export const TABLET_PORTRAIT_MIN_WIDTH = 768

export const devices = {
	mobileS: `(min-width: ${sizes.mobileS})`,
	mobileM: `(min-width: ${sizes.mobileM})`,
	mobileL: `(min-width: ${sizes.mobileL})`,
	tablet: `(min-width: ${sizes.tablet})`,
	laptop: `(min-width: ${sizes.laptop})`,
	laptopL: `(min-width: ${sizes.laptopL})`,
	desktop: `(min-width: ${sizes.desktop})`,
	desktopL: `(min-width: ${sizes.desktop})`,
} as const
